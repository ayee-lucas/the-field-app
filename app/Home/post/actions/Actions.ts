'use server';

import dbConnect from '@/app/db/Connection';
import Post from '@/app/models/Post';
import User, { IUser } from '@/app/models/User';
import { revalidatePath } from 'next/cache';

const url = process.env.NEXTAUTH_URL as string;

export async function findPost(id: string) {
  dbConnect();
  try {
    const post = await Post.findById(id);

    if (!post) {
      throw new Error('Post not found');
    }

    return post;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function fetchPostById(id: any) {
  try {
    const res = await fetch(`${url}/api/Posts/post/${id}`, {
      method: 'GET',
      next: { revalidate: 100 },
    });

    if (!res.ok) {
      throw new Error('Something went wrong');
    }

    const post = await res.json();

    return post.post;
  } catch (err) {
    console.log(err);
    return err;
  }
}

// eslint-disable-next-line consistent-return
export async function createPost(data: any, id : any) {
  dbConnect();
  try {
    const author = id;

    const body = {
      author,
      content: {
        text: data,
      },
    };

    const post = await new Post(body);

    const user = await User.findById(author);

    if (!user) {
      return new Error('User not found');
    }
    user.posts.push(post);

    await post.save();

    await user.save();

    revalidatePath('/Home');
  } catch (err) {
    console.log(err);
    return err;
  }
}

// Like Post

export async function likePost(postId: any, userId: any) {
  try {
    dbConnect();
    console.log({ postId, userId });

    const post = await Post.findById(postId).exec();
    if (!post) {
      console.error('Post not found');
      return;
    }

    const user: IUser | null = await User.findById(userId);

    user?.likes?.push(postId);
    const userUpdated = await user?.save();

    console.log({ USER_UPDATED: userUpdated });

    post.likes.push(userId);
    const updatedPost = await post.save();

    console.log({ POST_UPDATED: updatedPost });
    return;
  } catch (err) {
    console.error(err);
    // eslint-disable-next-line consistent-return
    return err;
  }
}

// Dislike Post

export async function dislikePost(postId: any, userId: any) {
  try {
    dbConnect();
    console.log({ postId, userId });

    const post = await Post.findById(postId).exec();
    if (!post) {
      console.error('Post not found');
      return;
    }

    post.likes.pull(userId);
    const updatedPost = await post.save();

    console.log({ POST_UPDATED: updatedPost });
    return;
  } catch (err) {
    console.error(err);
    // eslint-disable-next-line consistent-return
    return err;
  }
}

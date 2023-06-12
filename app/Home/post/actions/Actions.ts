'use server';

import dbConnect from '@/app/db/Connection';
import Post from '@/app/models/Post';
import User from '@/app/models/User';
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

    console.log(body);

    const post = await new Post(body);

    const user = await User.findById(author);

    if (!user) {
      return new Error('User not found');
    }
    user.posts.push(post);

    await user.save();

    revalidatePath('/Home');
  } catch (err) {
    console.log(err);
    return err;
  }
}

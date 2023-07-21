'use server';

import dbConnect from '@/app/db/Connection';
import Post from '@/app/models/Post';
import User, { IUser } from '@/app/models/User';
import { PostType } from '@/app/types/postType';
import { cookies } from 'next/headers';

const nextUrl = process.env.NEXTAUTH_URL as string;
const goUrl = process.env.GO_BACKEND as string;

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
    const res = await fetch(`${nextUrl}/api/Posts/post/${id}`, {
      method: 'GET',
      cache: 'no-store',
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

type CreatePostType = {
  error: unknown,
  message: string,
  result?: {
    id: string
    message: string,
    post: PostType
  }
};

export async function createPostGo(author:string, text?:string, media?:string)
  :
  Promise<CreatePostType> {
  try {
    const sessionId = cookies().get('session');

    const noMedia: string[] = [];

    const data = {
      author,
      content: {
        text,
        media: media ?? noMedia,
      },
    };

    console.log(data);

    const res = await fetch(`${goUrl}/api/posts/upload`, {

      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionId?.value}`,
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(data),
    });

    const json = await res.json();

    return json;
  } catch (err) {
    console.log(err);
    const res = {
      error: err,
      message: 'Error creating post',

    };
    return res;
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

export async function fetchUserById(id: any) {
  const res = await fetch(`/api/User/user/${id}`, {
    method: 'GET',
    cache: 'no-store',
  });

  const user = await res.json();

  console.log(user);

  return user;
}

type FetchPostsType = {
  error?: string,
  message?: 'No Posts to show',
  posts?: PostType
};

export async function fetchPostsOnScroll(query: string):Promise<FetchPostsType> {
  try {
    const res = await fetch(nextUrl + query, {
      method: 'GET',
      cache: 'no-store',
    });

    if (res.status === 404) {
      const data = {
        message: 'No Posts to show',
      };
      return data as FetchPostsType;
    }

    const json = await res.json();

    const data = {
      error: '',
      posts: json,
    };

    return data;
  } catch (err) {
    console.log(err);
    const res = {
      error: 'Error fetching posts',
    };
    return res;
  }
}

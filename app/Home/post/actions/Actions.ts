'use server';

import dbConnect from '@/app/db/Connection';
import Post from '@/app/models/Post';

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

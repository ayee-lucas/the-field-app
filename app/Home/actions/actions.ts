'use server';

import { PostType } from '@/app/types/postType';

const url = process.env.NEXTAUTH_URL as string;

type GetPostsType = {
  error?: unknown,
  message?: 'No Posts to show',
  data?: PostType[]
};

export async function GetInitialPosts(): Promise<GetPostsType> {
  try {
    const res = await fetch(`${url}/api/Posts/initial`, {
      method: 'GET',
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' },
    });
    const posts = await res.json();

    if (!res.ok) {
      return {
        error: posts.error,
        message: 'No Posts to show',
        data: [],
      };
    }

    const result = {
      data: posts,
    };

    return result;
  } catch (error) {
    return {
      error,
      message: 'No Posts to show',
      data: [],
    };
  }
}

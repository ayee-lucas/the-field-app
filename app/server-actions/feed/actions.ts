'use server';

import prisma from '@/lib/prisma';
import { ExtendedPost } from '@/app/types/postType';
import {
  FETCH_ERROR,
  POSTS_NOTFOUND,
  SCROLLING_PAGINATION_NUMBER,
} from '@/app/config';

export type GetPostsType = {
  data: ExtendedPost[];
};

export type GetPostsTypeErr = {
  error: string;
  message: typeof FETCH_ERROR;
};

export async function GetInitialPosts(): Promise<
  GetPostsType | GetPostsTypeErr
> {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        created_at: 'desc',
      },
      include: {
        Author: true,
        Like: true,
      },
      take: SCROLLING_PAGINATION_NUMBER,
    });

    if (posts.length <= 0) {
      return {
        error: POSTS_NOTFOUND,
        message: FETCH_ERROR,
      };
    }

    return {
      data: posts,
    };
  } catch (err) {
    console.log(err);
    return {
      error: JSON.stringify(err),
      message: FETCH_ERROR,
    };
  }
}

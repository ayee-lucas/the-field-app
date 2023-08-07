'use server';

import prisma from '@/lib/prisma';
import { Post } from '@prisma/client';

type GetPostsType = {
  data: Post[];
};

type GetPostsTypeErr = {
  error: string;
  message: 'No Posts to show';
};

export async function GetInitialPosts(): Promise<
  GetPostsType | GetPostsTypeErr
> {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        created_at: 'desc',
      },
      take: 4,
    });

    console.log(posts);

    if (posts.length <= 0) {
      return {
        error: 'Posts not found',
        message: 'No Posts to show',
      };
    }

    return {
      data: posts,
    };
  } catch (err) {
    console.log(err);
    return {
      error: JSON.stringify(err),
      message: 'No Posts to show',
    };
  }
}

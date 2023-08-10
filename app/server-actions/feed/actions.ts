'use server';

import prisma from '@/lib/prisma';
import { ExtendedPost } from '@/app/types/postType';

type GetPostsType = {
  data: ExtendedPost[];
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
      include: {
        Author: true,
        Like: true,
      },
      take: 4,
    });

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

'use server';

import {
  FETCH_ERROR,
  FETCH_ERROR_MESSAGE,
  POSTS_NOTFOUND,
  REQUIREMENT_NOTFOUND,
  ROUTES,
  ROUTES_API,
} from '@/app/config';
import { NewPostFormSChema } from '@/resolvers/newPostResolver';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { isRedirectError } from 'next/dist/client/components/redirect';
import prisma from '@/lib/prisma';
import { ExtendedPost } from '@/app/types/postType';

export type ResNewPost = {
  message: 'success';
};

type ResSuccess = {
  message: 'success';
  data: ExtendedPost;
};

export type ResError = {
  message: string;
  error: string;
};

export async function createNewPost(
  data: NewPostFormSChema
): Promise<ResNewPost | ResError> {
  try {
    const sessionId = cookies().get('session');

    const res = await fetch(`${process.env.NEXT_URL}${ROUTES_API.newPost}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${sessionId?.value}`,
      },
      cache: 'no-store',
    });

    const json = await res.json();

    if (res.status === 401) {
      redirect(ROUTES.signin);
    }

    if (!res.ok) {
      return {
        message: json.message,
        error: json.error,
      };
    }

    return {
      message: 'success',
    };
  } catch (err) {
    if (isRedirectError(err)) throw err;

    return {
      message: FETCH_ERROR_MESSAGE,
      error: `${FETCH_ERROR} [NEW POST]`,
    };
  }
}

export async function fetchPostById(
  postId: string
): Promise<ResSuccess | ResError> {
  try {
    if (!postId) {
      return {
        error: REQUIREMENT_NOTFOUND,
        message: FETCH_ERROR_MESSAGE,
      };
    }
    const sessionId = cookies().get('session');

    if (!sessionId) {
      redirect('/auth/signin');
    }

    const post = await prisma.post.findFirst({
      where: {
        id: postId,
      },
      include: {
        Author: {
          select: {
            username: true,
            picture: true,
            profile_id: true,
            Profile: {
              select: {
                name: true,
              },
            },
          },
        },
        Like: true,
      },
    });

    if (!post) {
      return {
        message: POSTS_NOTFOUND,
        error: `${FETCH_ERROR} [GET POST]`,
      };
    }

    return {
      message: 'success',
      data: post,
    };
  } catch (err) {
    if (isRedirectError(err)) throw err;
    return {
      message: FETCH_ERROR_MESSAGE,
      error: `${FETCH_ERROR} [GET POST]`,
    };
  }
}

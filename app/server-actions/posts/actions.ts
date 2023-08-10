'use server';

import {
  FETCH_ERROR,
  FETCH_ERROR_MESSAGE,
  ROUTES_API,
  ROUTES,
} from '@/app/config';
import { NewPostFormSChema } from '@/resolvers/newPostResolver';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { isRedirectError } from 'next/dist/client/components/redirect';

export type ResNewPost = {
  message: 'success';
};

export type ResNewPostError = {
  message: string;
  error: string;
};

export async function createNewPost(
  data: NewPostFormSChema
): Promise<ResNewPost | ResNewPostError> {
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

    console.log(err);

    return {
      message: FETCH_ERROR_MESSAGE,
      error: `${FETCH_ERROR} [NEW POST]`,
    };
  }
}

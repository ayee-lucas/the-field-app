'use server';

import { FETCH_ERROR, FETCH_ERROR_MESSAGE, NEWPOST_ROUTE } from '@/app/config';
import { NewPostFormSChema } from '@/resolvers/newPostResolver';
import { cookies } from 'next/headers';

type ResNewPost = {
  message: 'success';
};

type ResNewPostError = {
  message: string;
  error: string;
};

export async function createNewPost(
  data: NewPostFormSChema
): Promise<ResNewPost | ResNewPostError> {
  try {
    const sessionId = cookies().get('session');

    const res = await fetch(`${process.env.NEXT_URL}${NEWPOST_ROUTE}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${sessionId?.value}`,
      },
      cache: 'no-store',
    });

    const json = await res.json();

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
    console.log(err);
    return {
      message: FETCH_ERROR_MESSAGE,
      error: `${FETCH_ERROR} [NEW POST]`,
    };
  }
}

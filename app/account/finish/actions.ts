'use server';

import { cookies } from 'next/headers';

const goUrl = process.env.GO_BACKEND as string;

type FinishUserRequest = {
  message?: string,
  error?: string,
};

type Values = {
  name: string;
  bio: string;
};

export async function finishUser(id:string, values:Values): Promise<FinishUserRequest> {
  try {
    const sessionId = cookies().get('session');
    const res = await fetch(`${goUrl}/api/users/finish/${id}`, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionId?.value}`,
      },
      cache: 'no-store',
    });

    const json = await res.json();

    console.log({ json, sessionId });

    if (!res.ok) {
      return {
        message: json.message,
        error: json.error,
      };
    }

    return json;
  } catch (err) {
    console.log(err);
    return {
      message: 'Something went wrong',
      error: 'FetchError',
    };
  }
}

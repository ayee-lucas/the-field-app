'use server';

import { cookies } from 'next/headers';

const goURL = process.env.GO_BACKEND as string;

export default async function goSignIn(data: any) {
  try {
    const res = await fetch(`${goURL}/api/account/login`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });

    const json = await res.json();

    cookies().set({
      name: 'session',
      value: json.session_id,
      httpOnly: true,
      path: '/',
    });

    return json;
  } catch (err) {
    console.log(err);
    const message = {
      error: 'Fetch failed',
      message: 'Something went wrong',
    };
    return message;
  }
}

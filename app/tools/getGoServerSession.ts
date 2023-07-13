'use server';

import { cookies } from 'next/headers';
import { Session } from '../types/sessionType';

const goURL = process.env.GO_BACKEND;

export async function getGoSession() {
  try {
    const sessionId = cookies().get('session');

    const res = await fetch(`${goURL}/api/account/me`, {
      headers: {
        Authorization: `Bearer ${sessionId?.value}`,
      },
    });

    const json = await res.json();

    console.log(json);

    return json as Session;
  } catch (err) {
    console.log(err);

    return null;
  }
}

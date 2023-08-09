'use server';

import { cookies } from 'next/headers';
import { Session } from '../types/sessionType';
import { ROUTES_API } from '../config';

const goURL = process.env.GO_BACKEND;

export async function getGoSession() {
  try {
    const sessionId = cookies().get('session');

    const res = await fetch(`${goURL}${ROUTES_API.getSession}`, {
      headers: {
        Authorization: `Bearer ${sessionId?.value}`,
      },
      cache: 'no-store',
    });

    const json = await res.json();

    return json as Session;
  } catch (err) {
    console.log(err);

    return null;
  }
}

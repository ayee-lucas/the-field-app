'use server';

import { redirect } from 'next/navigation';

interface props {}

const url = process.env.NEXTAUTH_URL as string;

export async function signUp(data: props) {
  try {
    const response = await fetch(`${url}/api/account/register`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

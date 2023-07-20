'use server';

import { cookies } from 'next/headers';
import { UserType } from '@/app/types/userType';
import { SignInTypeFSchema } from './components/signInTypeFSchema';

const goURL = process.env.GO_BACKEND as string;

type SignInRequest = {
  message: string,
  error?: string,
  session_id?: string,
};

export default async function goSignIn(data: SignInTypeFSchema): Promise<SignInRequest> {
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
    const res = {
      error: 'Fetch failed',
      message: 'Something went wrong',
    };
    return res;
  }
}

type GetUserType = {
  message: string,
  error?: string,
  user?: UserType
};

export async function goGetUserById(id: string):Promise<GetUserType> {
  try {
    const sessionId = cookies().get('session');

    const res = await fetch(`${goURL}/api/users/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionId?.value}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const json = await res.json();

    return json;
  } catch (err) {
    console.log(err);
    const res = {
      error: 'Fetch failed',
      message: 'Something went wrong',
    };
    return res;
  }
}

// TODO: delete this code

/* type RequestPFinished = {
  message: string,
    error?: string,
    user:

}

export async function isProfileFinished() {
  try {

  } catch (err) {
    console.log(err);
    const res = {
      error: 'Fetch failed',
      message: 'Something went wrong',
    };
    return res;
  }
}
 */

'use server';

import { cookies } from 'next/headers';

type UpdatePictureRes = {
  error?: unknown,
  message?: string | 'success',
  user?: {
    MatchedCount: number,
    ModifiedCount: number,
    UpsertedCount: number,
    UpsertedID: null
  }
};

const goUrl = process.env.GO_BACKEND;

export async function updatePicture(
  id: string,
  pictureKey:string,
  pictureURL: string,
)
  :Promise<UpdatePictureRes> {
  try {
    const cookie = cookies().get('session')?.value;

    console.log({ cookie });

    const data = {
      picture: {
        pictureKey,
        pictureURL,
      },
    };

    const body = JSON.stringify(data);

    console.log(body);

    const res = await fetch(`${goUrl}/api/users/picture/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ picture: { pictureKey, pictureURL } }),
      headers: {

        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookie}`,
      },
      cache: 'no-store',
    });

    const json = await res.json();

    console.log(json);

    return json;
  } catch (err) {
    console.log(err);
    return {
      error: 'Server Fetch Error',
      message: 'Fetch Error',

    };
  }
}

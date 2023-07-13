'use server';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface props {}

const url = process.env.NEXTAUTH_URL as string;
const goUrl = process.env.GO_BACKEND as string;

// eslint-disable-next-line consistent-return

/** DELETE THIS ACTION WHEN GO IS READY */
export async function nextSignUp(data: props) {
  try {
    const response = await fetch(`${url}/api/account/register`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    return await response.json();
  } catch (err) {
    console.log(err);
    return err;
  }
}

/** GOLANG API */

export async function goSignUp(data: props) {
  try {
    const res = await fetch(`${goUrl}/api/account/register`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    return await res.json();
  } catch (err) {
    console.log(err);

    const message = {
      error: 'Fetch failed',
      message: 'Something went wrong',
    };

    return message;
  }
}

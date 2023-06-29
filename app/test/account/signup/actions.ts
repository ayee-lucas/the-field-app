'use server';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface props {}

const url = process.env.NEXTAUTH_URL as string;

// eslint-disable-next-line consistent-return
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

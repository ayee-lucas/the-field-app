'use server';

// eslint-disable-next-line consistent-return
export async function userEntered(id: any) {
  console.log(id);
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/User/status/online/${id}`, {
      method: 'PUT',
      cache: 'no-store',
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

// eslint-disable-next-line consistent-return
export async function userExit(id: any) {
  console.log(id);
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/User/status/offline/${id}`, {
      method: 'PUT',
      cache: 'no-store',
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

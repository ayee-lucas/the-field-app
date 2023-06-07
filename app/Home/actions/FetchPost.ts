'use server';

const url = process.env.NEXTAUTH_URL as string;

export async function fetchAllPosts() {
  const res = await fetch(`${url}/api/Posts`, {
    method: 'GET',
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  const result = await res.json();
  return result;
}

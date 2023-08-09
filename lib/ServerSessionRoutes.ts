import { ROUTES_API } from '@/app/config';
import { Session } from '@/app/types/sessionType';

const goURL = process.env.GO_BACKEND;

export async function ServerSessionRoutes(sessionId: string) {
  try {
    const res = await fetch(`${goURL}${ROUTES_API.getSession}`, {
      headers: {
        Authorization: `Bearer ${sessionId}`,
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

import { SERVER_ERROR, SERVER_POST_ERROR_MESSAGE } from '@/app/config';

const tag = 'GET POSTS';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: Request) {
  try {
    return new Response(JSON.stringify({ message: 'success' }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response(
      JSON.stringify({
        message: SERVER_POST_ERROR_MESSAGE,
        error: `${SERVER_ERROR} ${tag}`,
      })
    );
  }
}

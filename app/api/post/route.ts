import {
  FETCH_ERROR,
  QUERY_ERROR,
  SERVER_ERROR,
  SERVER_POST_ERROR_MESSAGE,
} from '@/app/config';
import prisma from '@/lib/prisma';

const tag = 'GET POSTS';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const limit = searchParams.get('limit');

    if (!limit) {
      return new Response(
        JSON.stringify({ error: QUERY_ERROR, message: FETCH_ERROR }),
        {
          status: 400,
        }
      );
    }

    const page = searchParams.get('page');

    if (!page) {
      return new Response(
        JSON.stringify({ error: QUERY_ERROR, message: FETCH_ERROR }),
        {
          status: 400,
        }
      );
    }

    const posts = await prisma.post.findMany({
      orderBy: {
        created_at: 'desc',
      },
      include: {
        Author: true,
        Like: true,
      },
      take: Number(limit),
      skip: (Number(page) - 1) * Number(limit),
    });

    if (posts.length <= 0) {
      return new Response(
        JSON.stringify({ error: QUERY_ERROR, message: FETCH_ERROR }),
        {
          status: 404,
        }
      );
    }

    return new Response(JSON.stringify({ message: 'success', data: posts }), {
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

import {
  REQUEST_BODY_ERROR,
  SERVER_ERROR,
  SERVER_POST_ERROR_MESSAGE,
  UNAUTHORIZED_ERROR,
  UNAUTHORIZED_ERROR_MESSAGE,
} from '@/app/config';
import { ServerSessionRoutes } from '@/lib/ServerSessionRoutes';
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';

type ResJson = {
  text?: string;
  original_post?: string;
};

type PostData = {
  text?: string;
  author_id: string;
  content: {
    text: string;
    media: {
      MediaKey: string;
      MediaURL: string;
    };
  };
  original_post?: string;
};

const tag = '[CREATING POSTS]';

export async function POST(request: Request) {
  try {
    const res: ResJson = await request.json();
    const headersList = headers();
    const referer = headersList.get('authorization');

    if (!res) {
      return new Response(
        JSON.stringify({
          message: REQUEST_BODY_ERROR,
          error: `${REQUEST_BODY_ERROR} [RES BODY]`,
        }),
        {
          status: 400,
        }
      );
    }

    if (!res.text) {
      return new Response(
        JSON.stringify({
          message: REQUEST_BODY_ERROR,
          error: `${REQUEST_BODY_ERROR} [RES TEXT]`,
        }),
        {
          status: 400,
        }
      );
    }

    const token = referer?.slice(7);

    if (!token) {
      return new Response(
        JSON.stringify({
          message: UNAUTHORIZED_ERROR_MESSAGE,
          error: `${UNAUTHORIZED_ERROR} [TOKEN]`,
        }),
        { status: 401 }
      );
    }

    const session = await ServerSessionRoutes(token);

    if (!session?.user) {
      return new Response(
        JSON.stringify({
          message: UNAUTHORIZED_ERROR_MESSAGE,
          error: `${UNAUTHORIZED_ERROR} ${tag}`,
        }),
        { status: 401 }
      );
    }

    const postData: PostData = {
      author_id: session.user.sub,
      content: {
        text: res.text,
        media: {
          MediaKey: '',
          MediaURL: '',
        },
      },
    };

    if (res.original_post) {
      postData.original_post = res.original_post;
    }

    await prisma.post.create({
      data: postData,
    });

    return new Response(
      JSON.stringify({
        message: 'success',
      }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        message: SERVER_POST_ERROR_MESSAGE,
        error: `${SERVER_ERROR} ${tag}`,
      })
    );
  }
}

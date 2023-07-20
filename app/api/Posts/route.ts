/* eslint-disable radix */
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/app/db/Connection';
import User from '@/app/models/User';
import Post from '@/app/models/Post';
import Comment from '@/app/models/Comment';

export async function GET(req: Request) {
// Conectar a la base de datos
  dbConnect();

  const url = new URL(req.url);

  const { limit, page } = {
    limit: url.searchParams.get('limit'),
    page: url.searchParams.get('page'),
  };

  try {
    // Obtener todas las notificaciones con datos relacionados
    const posts = await Post.find()
      .populate('author', 'username name picture')
      .populate('comments', 'author', Comment)
      .populate('likes', 'username', User)
      .sort({ createdAt: 'desc' })
      .limit(parseInt(limit as string))
      .skip((parseInt(page as string) - 1) * parseInt(limit as string));

    if (posts.length === 0) {
      return new NextResponse('No posts found', {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ error: err }), { status: 500 });
  }
}

export async function POST() {
  // Get the user session
  const session = await getServerSession(authOptions);
  try {
    // Check if user is authenticated and has the required role
    if (!session?.user.username) {
      return new NextResponse('Unauthorized', {
        status: 401,
      });
    }

    const author = session.user.id;
    const post = new Post({ author });
    const savedPost = await post.save();

    const user = await User.findById(author);
    if (!user) {
      return new NextResponse('User not found', {
        status: 404,
      });
    }
    user.posts.push(savedPost);
    await user.save();

    return new NextResponse(JSON.stringify(savedPost), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.log({ err });
    return new NextResponse(JSON.stringify(err), { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import Comment from '@/app/models/Comment';
import Post from '@/app/models/Post';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/app/db/Connection';

dbConnect();

export async function get() {
  try {
    const comments = await Comment.find()
      .populate({
        path: 'author',
        select: 'name username',
      })
      .populate({
        path: 'post',
        populate: {
          path: 'author',
          select: 'name username',
        },
      });

    const data = {
      comments,
    };

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify(err), { status: 500 });
  }
}

export async function post(request: NextRequest) {
  const session = await getServerSession(authOptions);
  try {
    const { post, content } = await request.json();

    if (!post || !content) {
      return new NextResponse(
        JSON.stringify({
          message: 'Missing required fields in the request body.',
        }),
        { status: 400 },
      );
    }

    const userId = session?.user?.id;

    if (!userId) {
      return new NextResponse(
        JSON.stringify({
          message: 'User session not found.',
        }),
        { status: 401 },
      );
    }

    const comment = new Comment({
      post,
      content,
      author: userId,
    });

    await comment.save();

    const postDocument = await Post.findById(post);

    if (postDocument) {
      postDocument.comments.push(comment._id);
      await postDocument.save();
    }

    return new NextResponse(JSON.stringify(comment), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 500 });
  }
}

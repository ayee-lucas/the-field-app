import dbConnect from '@/app/db/Connection';
import Post from '@/app/models/Post';
import Comment from '@/app/models/Comment';
import User from '@/app/models/User';
import { NextResponse } from 'next/server';
import { SCROLLING_PAGINATION_NUMBER } from '@/app/config';

export async function GET() {
  try {
    await dbConnect();
    const posts = await Post.find()
      .populate('author', 'username name picture')
      .populate('comments', 'author', Comment)
      .populate('likes', 'username', User)
      .sort({ createdAt: 'desc' })
      .limit(SCROLLING_PAGINATION_NUMBER);

    if (posts.length === 0)
      return new NextResponse(JSON.stringify({ message: 'No Posts to show' }), {
        status: 404,
      });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: 'Error getting posts' }),
      { status: 500 }
    );
  }
}

import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/app/db/Connection';
import User from '@/app/models/User';
import Post from '@/app/models/Post';
import Comment from '@/app/models/Comment';

dbConnect();

interface params extends Request {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, params: params) {
  const { id } = params.params;

  // Obtener todos los usuarios
  const users = await User.find();
  const comments = await Comment.find();

  try {
    const post = await Post.findById(id)
      .populate('author', 'name username')
      .populate('comments', 'author content')
      .populate('likes', 'name username');

    const data = {
      post,
    };

    // Validar si no se encontró la notificación
    if (!post) {
      return new NextResponse('Notification not found', {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(post), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

export async function PUT(request: Request, params: params) {
  const { id } = params.params;
  const data = await request.json();

  try {
    const post = await Post.findByIdAndUpdate(id, data, {
      new: true,
    });

    // Validar si no se encontró la notificación
    if (!post) {
      return new NextResponse('Notification not found', {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(post), {
      status: 200,
    });
  } catch (err) {
    console.log(err);

    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

export async function DELETE(request: Request, params: params) {
  const { id } = params.params;

  try {
    const post = await Post.findByIdAndDelete(id);

    // Validar si no se encontró la notificación
    if (!post) {
      return new NextResponse('Notification not found', {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(post), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

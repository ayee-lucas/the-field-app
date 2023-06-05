import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/app/db/Connection';
import Post from '@/app/models/Post';

dbConnect();

// eslint-disable-next-line @typescript-eslint/naming-convention
interface params extends Request {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, params: params) {
  const { id } = params.params;

  try {
    const post = await Post.findById(id)
      .populate('author', 'name username')
      .populate('comments', 'author content')
      .populate('likes', 'name username');

    const data = {
      post,
    };

    // Validar si no se encontró la notificación
    if (!data) {
      return new NextResponse('Notification not found', {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(data), {
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

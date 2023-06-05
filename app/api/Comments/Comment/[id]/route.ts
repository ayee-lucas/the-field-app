import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/app/db/Connection';
import Comment from '@/app/models/Comment';
import User from '@/app/models/User';

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

  try {
    const comment = await Comment.findById(id)
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
      comment,
    };

    // Validar si no se encontró la notificación
    if (!comment) {
      return new NextResponse('Notification not found', {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(comment), {
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
    const comment = await Comment.findByIdAndUpdate(id, data, {
      new: true,
    });

    // Validar si no se encontró la notificación
    if (!comment) {
      return new NextResponse('Comment not found', {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(comment), {
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
    const comment = await Comment.findByIdAndDelete(id);

    // Validar si no se encontró la notificación
    if (!comment) {
      return new NextResponse('Comment not found', {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(comment), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/db/Connection';
import Message, { IMessage } from '@/app/models/Messages';
import { getGoSession } from '@/app/tools/getGoServerSession';

export async function GET() {
  try {
    dbConnect();

    const session = await getGoSession();

    const userUsername = session?.user?.username.toString() ?? '';
    /*const message = await Message.find();
    // Validar si se encontraron notificaciones
    if (message.length === 0) {
      return new NextResponse(
        JSON.stringify({ message: 'No messages found.' }),
        {
          status: 404,
        }
      );
    }*/

    return new NextResponse(JSON.stringify(userUsername), {
      status: 200,
    });
  } catch (err) {
    console.log(err);

    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

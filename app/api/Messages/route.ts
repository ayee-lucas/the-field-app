import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/db/Connection';
import Message, { IMessage } from '@/app/models/Messages';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { getGoSession } from '@/app/tools/getGoServerSession';

export async function POST(request: NextRequest) {
  try {
    dbConnect();
    const session = await getGoSession();
    const userId = session?.user?.sub.toString() ?? '';

    // Parse the request body as JSON
    const json = await request.json();
    console.log({ DataRequest: json });

    // Create a new message object with the parsed data and set the 'sender' field to the 'userId'
    const data: IMessage = {
      ...json,
      sender: userId,
    };

    const message = new Message(data);
    console.log({ MessageCreated: message });

    // Save the message object to the database
    const savedMessage = await message.save();

    // Return a NextResponse object with the saved message data and a 200 status code
    return new NextResponse(JSON.stringify(savedMessage), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.log({ err });

    const error = {
      message: 'Error saving message.',
      error: err,
    };
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}

export async function GET() {
  try {
    dbConnect();
    const message = await Message.find();
    // Validar si se encontraron notificaciones
    if (message.length === 0) {
      return new NextResponse(
        JSON.stringify({ message: 'No messages found.' }),
        {
          status: 404,
        }
      );
    }

    return new NextResponse(JSON.stringify(message), {
      status: 200,
    });
  } catch (err) {
    console.log(err);

    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

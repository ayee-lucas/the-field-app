import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/db/Connection';
import { getGoSession } from '@/app/tools/getGoServerSession';
import Message, { IMessage } from '@/app/models/Messages';
import Chat from '@/app/models/Chats';

export async function POST(request: NextRequest) {
  try {
    dbConnect();
    const nowDate = Date.now();

    // Parse the request body as JSON
    const json = await request.json();
    console.log({ DataRequest: json });

    const data: IMessage = {
      ...json,
      date: nowDate,
    };

    if (!data.content || !data.username) {
      return new NextResponse(JSON.stringify('All parameters are required'), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const message = new Message(data);

    console.log({ MessageCreated: message });

    // Save the message object to the database
    const savedMessage = await message.save();

    const chat = await Chat.findById(json.chatId);
    if (chat) {
      chat.messages.push(savedMessage._id);
      await chat.save();
    }

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
    const session = await getGoSession();
    const message = await Message.find({ sender: session?.user?.sub });
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

import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/db/Connection';
import Chat, { IChat } from '@/app/models/Chats';
import User from '@/app/models/User';
import Conversation from '@/app/models/Conversations';

export async function POST(request: NextRequest) {
  try {
    dbConnect();
    // Parse the request body as JSON
    const json = await request.json();
    console.log({ DataRequest: json });

    // Create a new chat
    const data: IChat = {
      ...json,
    };

    const userExist = await User.find({ username: data.username });

    if (userExist.length === 0) {
      return new NextResponse(JSON.stringify('User does not exist'), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const chat = new Chat(data);
    console.log({ ChatCreated: chat });

    // Save the chat object to the database
    const savedChat = await chat.save();

    const user = await User.findOne({ username: json.sessionUser });
    console.log({ USER: user });
    console.log({ USER_CONVERSATION: user.conversations[0] });
    if (user) {
      const conversation = await Conversation.findById(user.conversations[0]);
      conversation.chats.push(savedChat._id);
      await conversation.save();
    }

    // Return a NextResponse object with the saved message data and a 200 status code
    return new NextResponse(JSON.stringify(savedChat), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.log({ err });

    const error = {
      message: 'Error saving chat.',
      error: err,
    };
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}

export async function GET() {
  try {
    dbConnect();
    const chats = await Chat.find();
    // Validar si se encontraron notificaciones
    if (chats.length === 0) {
      return new NextResponse(JSON.stringify({ message: 'No chats found.' }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(chats), {
      status: 200,
    });
  } catch (err) {
    console.log(err);

    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

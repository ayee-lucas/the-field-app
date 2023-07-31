import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/db/Connection';
import Conversation, { IConversation } from '@/app/models/Conversations';
import Chat from '@/app/models/Chats';

export async function POST(request: NextRequest) {
  try {
    dbConnect();
    // Parse the request body as JSON
    const json = await request.json();
    console.log({ DataRequest: json });

    // Create a new chat
    const data: IConversation = {
      ...json,
    };

    const conversation = new Conversation(data);
    console.log({ ConversationCreated: conversation });

    // Save the chat object to the database
    const savedConversation = await conversation.save();

    // Return a NextResponse object with the saved message data and a 200 status code
    return new NextResponse(JSON.stringify(savedConversation), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.log({ err });

    const error = {
      message: 'Error saving conversation.',
      error: err,
    };
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}

export async function GET() {
  try {
    dbConnect();
    const conversations = await Conversation.find();

    if (conversations.length === 0) {
      return new NextResponse(
        JSON.stringify({ message: 'No conversations found.' }),
        {
          status: 404,
        }
      );
    }

    return new NextResponse(JSON.stringify(conversations), {
      status: 200,
    });
  } catch (err) {
    console.log(err);

    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

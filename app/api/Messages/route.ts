import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/db/Connection';
import Message from '@/app/models/Messages';

export async function POST(request: NextRequest) {
  try {
    dbConnect();

    // Parse the request body as JSON
    const json = await request.json();
    console.log({ DataRequest: json });

    // Create a new notification object with the parsed data
    const data = new Message(json);
    console.log({ MessageCreated: data });

    // Save the notification object to the database
    const message = await data.save();

    // Return a NextResponse object with the saved notification data and a 200 status code
    return new NextResponse(JSON.stringify(message), {
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

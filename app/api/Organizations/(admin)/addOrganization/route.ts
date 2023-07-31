import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/app/db/Connection';
import Organization from '@/app/models/Organizations';
/* import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'; */

dbConnect();

export async function POST(request: NextRequest) {
  try {
    // Parse the request body as JSON
    const json = await request.json();

    // Create a new notification object with the parsed data
    const data = new Organization(json);

    // Save the notification object to the database
    const organization = await data.save();

    // Return a NextResponse object with the saved notification data and a 200 status code
    return new NextResponse(JSON.stringify(organization), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.log({ err });

    const error = {
      message: 'Error saving notification.',
      error: err,
    };
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}

/** GET SERVER SESSION ROUTE */

/**
 *  DELETE THIS CODE NOT WORKING CURRENTLY NEEDS FIXING *
 */

import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);
  try {
    if (!session?.user) {
      console.log(session);
    }
    return new NextResponse(JSON.stringify(session), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: 'Error retrieving server session' }),
      { status: 500 },
    );
  }
}

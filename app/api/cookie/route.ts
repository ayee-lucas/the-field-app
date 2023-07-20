import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const sessionId = cookies().get('session');

  return new NextResponse(JSON.stringify({ value: sessionId?.value }), { status: 200 });
}

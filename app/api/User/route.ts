import dbConnect from '@/app/db/Connection';
import User from '@/app/models/User';
/* import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'; */
import { NextResponse } from 'next/server';

// Conectar a la base de datos
dbConnect();

// eslint-disable-next-line @typescript-eslint/naming-convention
interface params extends Request {
  params: {
    id: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request, params: params) {
  try {
    const users = await User.find({});
    return new NextResponse(JSON.stringify(users), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

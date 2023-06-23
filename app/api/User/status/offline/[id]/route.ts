import dbConnect from '@/app/db/Connection';
import User, { IUser } from '@/app/models/User';

interface Params extends Request {
  params: {
    id: string;
  }
}

export async function PUT(req: Request, params: Params) {
  try {
    dbConnect();

    if (params.params.id.length !== 24) return new Response('User not found', { status: 404 });

    const user:IUser | null = await User.findById(params.params.id);

    if (!user) {
      return new Response('User not found', { status: 404 });
    }

    user.online = false;

    await user.save();

    return new Response(JSON.stringify({ message: `User ${user.username} is offline` }));
  } catch (err) {
    console.log(err);
    return new Response('Something went wrong', { status: 500 });
  }
}

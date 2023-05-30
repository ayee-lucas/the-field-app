import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Page() {
  const session = await getServerSession(authOptions);

  console.log({ session: session?.user });

  return (
    <div className="w-full h-screen">
      <Link href={`/Home/profile/${session?.user.username}`}>
        account
      </Link>
    </div>
  );
}

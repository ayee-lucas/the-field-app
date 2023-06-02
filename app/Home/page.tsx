import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '../api/auth/[...nextauth]/route';
import FeedBar from './components/FeedBar';

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full h-screen dark:bg-black p-2 dark:text-white">
      <h1 className="text-4xl py-3 font-bold">
        Feed
      </h1>

      <FeedBar />
    </div>
  );
}

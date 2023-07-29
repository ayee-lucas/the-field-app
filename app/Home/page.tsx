import { Suspense } from 'react';
import FeedBar from './components/FeedBar';
import ClientNewPost from './components/ClientNewPost';
import { GetInitialPosts } from './actions/actions';
import { getGoSession } from '../tools/getGoServerSession';
import { Session } from '../types/sessionType';
import { FeedHandlerClient } from './components/FeedHandlerCLient';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const postsData = await GetInitialPosts();
  const session = await getGoSession();
  const idUser = session?.user?.sub.toString() ?? '';

  return (
    <div className="w-full min-h-screen h-full dark:bg-black  dark:text-white py-10 px-[5rem] max-sm:px-3 max-xl:px-5">
      <h1 className="text-4xl pb-3 pt-6 font-bold dark:text-white">
        Feed
      </h1>
      <FeedBar />
      <Suspense fallback={<div>Loading...</div>}>
        <ClientNewPost session={session as Session} />
      </Suspense>
      {postsData.data?.length === 0 ? (
        <div className="w-full flex justify-center items-center">
          There are no posts to show
        </div>
      ) : (
        <FeedHandlerClient
          initialPosts={postsData.data ?? []}
          sessionId={idUser}
        />
      )}
    </div>
  );
}

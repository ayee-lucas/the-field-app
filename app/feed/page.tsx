import { Suspense } from 'react';
import { GetInitialPosts } from '@/app/server-actions/feed/actions';
import { FeedHandlerClient } from './components/FeedHandlerCLient';
import { getGoSession } from '../tools/getGoServerSession';
import FeedBar from './components/FeedBar';
import NewPostHandler from './components/NewPostHandler';
import NoPostsFound from './components/NoPostsFound';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const postsData = await GetInitialPosts();
  const session = await getGoSession();
  const idUser = session?.user?.sub.toString() ?? '';

  console.log(postsData);

  if ('error' in postsData) {
    return (
      <div className="w-full min-h-screen h-full dark:bg-black  dark:text-white py-10 px-[5rem] max-sm:px-3 max-xl:px-5">
        <h1 className="text-4xl py-3 font-bold dark:text-white">Feed</h1>
        <FeedBar />
        <Suspense fallback={<div>Loading...</div>}>
          <NewPostHandler />
        </Suspense>
        <NoPostsFound />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen h-full dark:bg-black  dark:text-white py-10 px-[5rem] max-sm:px-3 max-xl:px-5">
      <h1 className="text-4xl py-3 font-bold dark:text-white">Feed</h1>
      <FeedBar />
      <Suspense fallback={<div>Loading...</div>}>
        <NewPostHandler />
      </Suspense>
      {postsData.data?.length === 0 ? (
        <div className="w-full flex justify-center items-center">
          There are no posts to show
        </div>
      ) : (
        <FeedHandlerClient initialPosts={postsData.data} sessionId={idUser} />
      )}
    </div>
  );
}

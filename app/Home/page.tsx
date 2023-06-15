import { getServerSession } from 'next-auth';
import FeedBar from './components/FeedBar';
import ClientNewPost from './components/ClientNewPost';
import PostHomeCard from './components/PostHomeCard';
import { fetchAllPosts } from './actions/FetchPost';
import { IPost } from '../models/Post';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Page() {
  const postsData: IPost[] = await fetchAllPosts();
  const session = await getServerSession(authOptions);
  const idUser = session?.user?.id.toString() ?? '';

  return (
    <div className="w-full min-h-screen h-full dark:bg-black  dark:text-white py-10 px-[5rem] max-sm:px-3 max-xl:px-5">
      <h1 className="text-4xl py-3 font-bold dark:text-white">
        Feed
      </h1>
      <FeedBar />
      <ClientNewPost />
      {
        postsData.map((post: IPost) => (
          <PostHomeCard
            key={post.id}
            post={post}
            sessionId={idUser}
          />
        ))
      }
    </div>
  );
}

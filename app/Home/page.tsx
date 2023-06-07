import FeedBar from './components/FeedBar';
import ClientNewPost from './components/ClientNewPost';
import PostHomeCard from './components/PostHomeCard';
import { fetchAllPosts } from './actions/FetchPost';
import { IPost } from '../models/Post';

export default async function Page() {
  const postsData: IPost[] = await fetchAllPosts();

  return (
    <div className="w-full min-h-screen h-full dark:bg-black  dark:text-white py-10 px-[5rem] max-sm:px-3 max-xl:px-5">
      <h1 className="text-4xl py-3 font-bold dark:text-white">
        Feed
      </h1>
      <FeedBar />
      <ClientNewPost />
      {
        postsData.map((post: IPost) => (
          <PostHomeCard key={post.id} post={post} />
        ))
      }
    </div>
  );
}

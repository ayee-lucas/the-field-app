import FeedBar from './components/FeedBar';
import ClientNewPost from './components/ClientNewPost';
import PostHomeCard from './components/PostHomeCard';

export default async function Page() {
  return (
    <div className="w-full min-h-screen h-full dark:bg-black  dark:text-white py-10 px-[3rem]">
      <h1 className="text-4xl py-3 font-bold dark:text-white">
        Feed
      </h1>
      <FeedBar />
      <ClientNewPost />
      {Array.from({ length: 10 }, (_, i) => (
        <PostHomeCard key={i} />
      ))}
    </div>
  );
}

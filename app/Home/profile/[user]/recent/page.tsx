import React from 'react';
import PostCard from './components/PostCard';

export default function Page() {
  return (
    <div className="w-full h-full py-5">
      <h1 className="text-4xl font-bold">Recent Activity</h1>
      <div className="w-full h-full pt-5 flex flex-col">
        <PostCard />
        <PostCard />

      </div>
    </div>
  );
}

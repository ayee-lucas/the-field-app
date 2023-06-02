import React from 'react';
import PostBarCard from './PostBarCard';

const FeedBar = () => (
  <div className="w-full flex flex-col gap-2 items-start justify-center">
    <h1 className="text-xl font-bold ">Recent</h1>
    <div className="w-full flex items-center gap-2 relative overflow-x-scroll">
      {Array.from({ length: 8 }).map((_, index) => (
        <PostBarCard />
      ))}

    </div>

  </div>
);

export default FeedBar;

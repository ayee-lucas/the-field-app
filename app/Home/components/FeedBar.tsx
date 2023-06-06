/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import PostBarCard from './PostBarCard';

const FeedBar = () => (
  <div className="w-full flex flex-col gap-2 items-start justify-center py-5">
    <h1 className="text-xl font-bold ">Recent</h1>
    <div className="w-full flex items-center justify-between gap-2 overflow-x-auto">
      {Array.from({ length: 5 }).map((_, index) => (
        <PostBarCard />
      ))}

    </div>

  </div>
);

export default FeedBar;

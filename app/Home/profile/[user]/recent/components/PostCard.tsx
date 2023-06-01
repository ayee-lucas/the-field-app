'use client';

import React from 'react';
import { ubuntu, quicksand } from '@/app/fonts';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PostFooterActions from '@/app/Home/post/components/PostFooterActions';

const PostCard = () => {
  const router = useRouter();

  return (
    <div
      className={` ${ubuntu.variable} ${quicksand.variable} w-full my-2 min-h-[200px] bg-zinc-50 pl-3
      rounded-lg border border-gray-400 relative flex flex-col gap-4 justify-between items-center select-none cursor-pointer hover:bg-gray-100 transition-all 
      `}
      onClick={() => (router.push('/Home/post/alopez/lebron-james-ja-morant'))}
      aria-hidden="true"
    >
      <div className="flex justify-start w-full h-full  items-center">
        <div className="flex flex-col w-full h-full justify-start items-start pr-3">
          <h1 className="text-xl font-ubuntu text-black font-semibold">
            LEBRON JAMES JA MORANT
          </h1>
          <p className="text-[17px] font-ubuntu font-light text-gray-600 ">
            The more I think about this streak, the more I believe it's the
            most unbeatable of all records. LBJ is on an open streak of 1,151
            consecutive double digit Regular Season games (the streak doesn't
            include Playoffs matches). That's 14 full 82-game seasons. To put
            include Playoffs matches). That's 14 full 82-game seasons. To put
            include Playoffs matches). That's 14 full 82-game seasons. To put
            include Playoffs matches). That's 14 full 82-game seasons. To put
            include Playoffs matches). That's 14 full 82-game seasons. To put
            include Playoffs matches). That's 14 full 82-game seasons. To put
            include Playoffs matches). That's 14 full 82-game seasons. To put
            include Playoffs matches). That's 14 full 82-game seasons. To put
            thing...
          </p>
        </div>
        <div className="relative min-h-[200px] min-w-[200px]">
          <Image
            src="https://images.unsplash.com/photo-1533923156502-be31530547c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            fill
            alt="post"
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
      <PostFooterActions />

    </div>
  );
};

export default PostCard;

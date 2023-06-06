import Image from 'next/image';
import React from 'react';
import imagePost from '../../../public/images/Background/card_example.jpg';

const PostHomeCard = () => (
  <div className="w-full min-h-[500px] bg-gray-100 dark:bg-black dark:border-zinc-800 border rounded-lg p-5 my-3 grid grid-flow-row gap-2">
    <div className="">
      <h1 className="text-2xl font-bold">LEBRON JAMES JA MORANT</h1>
      <p className="pt-4 text-gray-700 dark:text-gray-300">
        The more I think about this streak, the more I believe it's the most
        unbeatable of all records. LBJ is on an open streak of 1,151 consecutive
        double digit Regular Season games (the streak doesn't include Playoffs
        matches). That's 14 full 82-game seasons. To put include Playoffs
        matches). That's 14 full 82-game seasons. To put include Playoffs
        matches). That's 14 full 82-game seasons. To put include Playoffs
        matches). That's 14 full 82-game seasons. To put include Playoffs
        matches). That's 14 full 82-game seasons. To put include Playoffs
        matches). That's 14 full 82-game seasons. To put include Playoffs
        matches). That's 14 full 82-game seasons. To put include Playoffs
        matches). That's 14 full 82-game seasons.
      </p>
    </div>

    <div className="relative w-full h-full min-h-[300px]">
      <Image
        src={imagePost}
        alt="imagePost"
        fill
        className="rounded-lg  object-cover"
      />
    </div>

    <div className="max-h-[50px]">Footer</div>
  </div>
);

export default PostHomeCard;

import Image from 'next/image';
import React from 'react';
import example from '../../../public/images/Background/card_example.jpg';

const PostBarCard = () => (
  <div className="flex flex-col text-white items-start relative justify-end gap-2 w-full min-h-[250px] max-h-[250px] border border-gray-700 dark:border-zinc-800 rounded-xl p-4 shadow-lg min-w-[200px] max-w-[200px]">

    <h1 className="text-lg font-medium">Title</h1>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>

    <div className="absolute inset-0 bg-black/40 z-[-1] rounded-lg" />

    <Image
      src={example}
      alt="example"
      fill
      className="object-cover z-[-2] rounded-lg"
    />

  </div>

);

export default PostBarCard;

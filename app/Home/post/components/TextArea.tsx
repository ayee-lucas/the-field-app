'use client';

import React from 'react';

type Props = {
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function TextArea({ setText }: Props) {
  return (
    <div className="p-3">
      <textarea
        name=""
        id=""
        onChange={(e) => setText(e.target.value)}
        cols={30}
        rows={10}
        placeholder="What's on your mind?"
        className="w-full p-2 my-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:border-gray-400
                      dark:bg-transparent dark:text-white dark:border-zinc-700 first-line:text-xl first-line:font-bold resize-none"
      />
    </div>
  );
}

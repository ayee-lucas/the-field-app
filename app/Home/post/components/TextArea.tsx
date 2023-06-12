'use client';

import React, { useRef } from 'react';

const TextArea = ({ setText }
:
{ setText: (text: string) => void }) => {
  const textArea = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="p-3">
      <textarea
        name=""
        id=""
        onChange={() => setText(textArea.current?.value ?? '')}
        ref={textArea}
        cols={30}
        rows={10}
        placeholder="What's on your mind?"
        className="w-full p-2 my-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:border-gray-400
                      dark:bg-transparent dark:text-white dark:border-zinc-700 first-line:text-3xl resize-none"

      />

    </div>
  );
};

export default TextArea;

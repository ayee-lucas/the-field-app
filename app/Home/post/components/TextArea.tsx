'use client';

import React from 'react';

const TextArea = ({ setText, textAreaRef }
:
{ setText: (text: string) => void, textAreaRef: React.RefObject<HTMLTextAreaElement> }) => (
  <div className="p-3">
    <textarea
      name=""
      id=""
      onChange={() => setText(textAreaRef.current?.value ?? '')}
      ref={textAreaRef}
      cols={30}
      rows={10}
      placeholder="What's on your mind?"
      className="w-full p-2 my-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:border-gray-400
                      dark:bg-transparent dark:text-white dark:border-zinc-700 first-line:text-xl first-line:font-bold resize-none"
    />

  </div>
);

export default TextArea;

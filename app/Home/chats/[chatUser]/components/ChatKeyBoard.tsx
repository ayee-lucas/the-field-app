'use client';

import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BsImage } from 'react-icons/bs';

export default function ChatKeyBoard() {
  const [text, setText] = useState('');

  return (
    <div className="max-md:absolute mb-2 bottom-0 w-full z-50 min-h-[50px] max-h-[50px] bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-700">
      <div className="flex w-full py-4">
        <div className="w-[80%] h-full pl-3 flex items-center">
          <textarea onChange={(e) => setText(e.target.value)} rows={1} className="w-full pl-3 text-sm dark:bg-black text-zinc-600 dark:text-gray-300 border border-zinc-400 dark:border-zinc-600 rounded-xl focus:border-zinc-500 dark:focus:border-zinc-500 focus:outline-none" style={{ resize: 'none', overflowY: 'hidden' }} />
        </div>
        <div className="flex items-center w-[20%] h-full text-right text-sm">
          <button type="button" className={`w-full ${text === '' && 'hidden'}`}>
            <AiOutlineSend className="w-full h-6 text-zinc-800 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200" />
          </button>
          <button type="button" className={`w-full ${text !== '' && 'hidden'}`}>
            <BsImage className="w-full h-6 text-zinc-800 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200" />
          </button>
        </div>
      </div>
    </div>
  );
}

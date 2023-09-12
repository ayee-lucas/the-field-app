'use client';

import React from 'react';
import { AiFillEdit } from 'react-icons/ai';

function Editbtn() {
  return (
    <button
      type="button"
      className="py-1 px-5 rounded-xl cursor-pointer  bg-gray-200 flex items-center gap-2 hover:bg-gray-300 max-w-[230px] my-4
        dark:bg-zinc-900 dark:text-gray-300 border dark:border-gray-300"
    >
      <AiFillEdit />
      <span className="max-sm:text-[12px]">Edit Profile</span>
    </button>
  );
}

export default Editbtn;

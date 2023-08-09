import React from 'react';
import { CiSettings } from 'react-icons/ci';

function Settigns() {
  return (
    <button
      type="button"
      className="py-1 px-5 rounded-xl cursor-pointer  bg-gray-200 flex items-center gap-2 hover:bg-gray-300 max-w-[230px] my-4
    dark:bg-zinc-900 dark:text-gray-300 border dark:border-gray-300"
    >
      <CiSettings />
      <span className="max-sm:text-[12px]">

        Preferences
      </span>
    </button>
  );
}

export default Settigns;

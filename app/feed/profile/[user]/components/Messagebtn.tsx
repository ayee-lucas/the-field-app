import React from 'react';
import { TbMessageCircle2Filled } from 'react-icons/tb';

function Messagebtn() {
  return (
    <button
      type="button"
      className="py-1 px-5 rounded-xl cursor-pointer bg-gray-200 flex items-center gap-2 hover:bg-gray-300 max-w-[140px] my-4
      dark:bg-zinc-900 dark:text-gray-300 border dark:border-gray-300"
    >
      <TbMessageCircle2Filled />
      Message
    </button>
  );
}

export default Messagebtn;

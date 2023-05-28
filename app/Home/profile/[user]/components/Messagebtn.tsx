import React from "react";
import { TbMessageCircle2Filled } from "react-icons/tb";

const Messagebtn = () => {
  return (
    <button className="py-1 px-5 rounded-xl cursor-pointer bg-gray-200 flex items-center gap-2 hover:bg-gray-300 max-w-[140px] my-4">
      <TbMessageCircle2Filled />
      Message
    </button>
  );
};

export default Messagebtn;

"use client";

import React from "react";
import { GrAddCircle } from "react-icons/gr";

const Followbtn = () => {
  return (
    <button className="py-1 px-5 rounded-xl cursor-pointer  bg-gray-200 flex items-center gap-2 hover:bg-gray-300 max-w-[130px] my-4">
      <GrAddCircle />
      Follow
    </button>
  );
};

export default Followbtn;

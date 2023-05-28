"use client";

import React from "react";
import { AiFillEdit } from "react-icons/ai"

const Editbtn = () => {
  return (
    <button className="py-1 px-5 rounded-xl cursor-pointer  bg-gray-200 flex items-center gap-2 hover:bg-gray-300 max-w-[230px] my-4">
      <AiFillEdit />
      Edit Profile
    </button>
  );
};

export default Editbtn;

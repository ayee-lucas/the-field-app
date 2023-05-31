'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import defaultImage from '../../../../public/images/default_user.png';

const AddComment = () => {
  const [comment, setComment] = useState(false);

  return (
    <form
      className="w-full h-full flex flex-col justify-center items-center border-t-4 border-fieldGreen mt-3 border-x border-x-gray-300"
    >
      <h1 className="text-black text-lg pt-2 pl-4 text-start w-full font-semibold">
        ADD
        {' '}
        <span className="text-fieldGreen">REPLY</span>
      </h1>

      <div className={`w-full max-w-[98%] transition-all h-full flex gap-3 justify-center items-center border-y  mt-3 py-2 px-2 ${
        comment ? 'border-fieldGreen' : ' border-gray-300 '
      } `}
      >
        <Image
          src={defaultImage}
          alt="user"
          width={40}
          height={40}
          className="rounded-full"
        />
        <input
          type="text"
          onFocus={() => setComment(!comment)}
          onBlur={() => setComment(!comment)}
          placeholder="Reply..."
          className="w-full h-full focus:outline-none focus:placeholder:text-black"
        />
      </div>

    </form>
  );
};

export default AddComment;

import React from 'react';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { BiRepost } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';

const PostFooterActions = () => (
  <div className="flex justify-between items-center gap-3 py-1 px-2 w-full border-t border-t-gray-300 text-xl text-gray-600">
    <div className="flex items-center gap-3 w-full h-full">
      <div className="flex items-center gap-1">
        <AiOutlineHeart className="cursor-pointer" />
        <span className="text-sm">31</span>
      </div>

      <div className="flex items-center gap-1">
        <BiRepost className="cursor-pointer" />
        <span className="text-sm">2</span>
      </div>

      <div className="flex items-center gap-1">
        <AiOutlineStar className="cursor-pointer" />
        <span className="text-sm">3</span>
      </div>

      <div className="flex items-center gap-1">
        <FaRegComment className="cursor-pointer" size={16} />
        <span className="text-sm">3 </span>
      </div>
    </div>
    <div className="flex items-center gap-3  cursor-pointer text-sm text-white bg-fieldGreen px-5 py-1 rounded-full">
      <RiSendPlaneLine />
      <span>Send</span>
    </div>
  </div>
);

export default PostFooterActions;

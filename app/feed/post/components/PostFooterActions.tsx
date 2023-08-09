'use client';

import { FC, useTransition, useState } from 'react';
import { AiOutlineHeart, AiOutlineStar, AiFillHeart } from 'react-icons/ai';
import { BiRepost } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import { ExtendedPost } from '@/app/types/postType';
import { REQUIREMENT_NOTFOUND } from '@/app/config';

type Props = {
  post: ExtendedPost;
  sessionId: string;
};

const PostFooterActions: FC<Props> = ({ post, sessionId }) => {
  if (!post) {
    throw new Error(`${REQUIREMENT_NOTFOUND} [POST]`);
  }

  if (!post.Like) {
    throw new Error(`${REQUIREMENT_NOTFOUND} [POST LIKES]`);
  }
  const LikesArr = post.Like;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();

  const [likes, setLikes] = useState<number>(LikesArr.length);

  const [isLiked, setIsLiked] = useState<boolean>(false);

  const router = useRouter();

  const handleLiked = () => {
    console.log('Like');
  };

  const handleDislike = () => {
    console.log('Disklike');
  };

  return (
    <div className="flex justify-between items-center gap-3 py-1 px-2 w-full border-t border-t-gray-300 dark:border-t-zinc-600 text-xl text-gray-600 dark:text-gray-300">
      <div className="flex items-center gap-3 w-full h-full">
        <div className="flex items-center gap-1">
          {isLiked ? (
            <AiFillHeart
              className="cursor-pointer text-red-600"
              onClick={handleDislike}
            />
          ) : (
            <AiOutlineHeart className="cursor-pointer " onClick={handleLiked} />
          )}
          <span className="text-sm">{likes === 0 ? '0' : likes}</span>
        </div>

        <div className="flex items-center gap-1">
          <BiRepost className="cursor-pointer" />
          <span className="text-sm">0</span>
        </div>

        <div className="flex items-center gap-1">
          <AiOutlineStar className="cursor-pointer" />
          <span className="text-sm">0</span>
        </div>

        <div className="flex items-center gap-1">
          <FaRegComment className="cursor-pointer" size={16} />
          <span className="text-sm">0</span>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-3 max-sm:mt-0 cursor-pointer text-sm text-white dark:text-fieldGreen bg-fieldGreen dark:bg-black border dark:border-fieldGreen px-5 py-1 rounded-full">
        <RiSendPlaneLine />
        <span className="max-sm:hidden">Send</span>
      </div>
    </div>
  );
};

export default PostFooterActions;

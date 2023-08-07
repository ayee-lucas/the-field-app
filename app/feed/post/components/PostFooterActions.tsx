'use client';

import {
  FC, useTransition, useState,
} from 'react';
import { AiOutlineHeart, AiOutlineStar, AiFillHeart } from 'react-icons/ai';
import { BiRepost } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import { PostType } from '@/app/types/postType';
import { dislikePost, likePost } from '../actions';

interface Props {
  // eslint-disable-next-line react/require-default-props
  onClick: () => void;
  // eslint-disable-next-line react/require-default-props
  Post: PostType;
  // eslint-disable-next-line react/require-default-props
  sessionId: string;
}

const PostFooterActions:FC<Props> = ({ onClick, Post, sessionId }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();

  const [likes, setLikes] = useState<number>(Post.likes.length);

  const [isLiked, setIsLiked] = useState<boolean>(
    Boolean(Post.likes.find((like) => like._id === sessionId)),
  );

  const router = useRouter();

  const handleLiked = () => {
    if (!sessionId) {
      router.push('/auth/signin');
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
      startTransition(() => {
        likePost(Post?._id, sessionId);
      });
    }
  };

  const handleDislike = () => {
    if (!sessionId) {
      router.push('/auth/sigin');
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
      startTransition(() => {
        dislikePost(Post?._id, sessionId);
      });
    }
  };

  //  const isLiked = Post?.likes.find((like) => like._id === sessionId);

  return (

    <div className="flex justify-between items-center gap-3 py-1 px-2 w-full border-t border-t-gray-300 dark:border-t-zinc-600 text-xl text-gray-600 dark:text-gray-300">
      <div className="flex items-center gap-3 w-full h-full">
        <div className="flex items-center gap-1">
          { isLiked
            ? <AiFillHeart className="cursor-pointer text-red-600" onClick={handleDislike} />
            : <AiOutlineHeart className="cursor-pointer " onClick={handleLiked} />}
          <span className="text-sm">{likes === 0 ? '0' : likes}</span>
        </div>

        <div className="flex items-center gap-1">
          <BiRepost className="cursor-pointer" />
          <span className="text-sm">{Post.repost.length}</span>
        </div>

        <div className="flex items-center gap-1">
          <AiOutlineStar className="cursor-pointer" />
          <span className="text-sm">{Post.starred.length}</span>
        </div>

        <div className="flex items-center gap-1">
          <FaRegComment onClick={onClick} className="cursor-pointer" size={16} />
          <span className="text-sm">{Post.comments.length}</span>
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

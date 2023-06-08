'use client';

import Image from 'next/image';
import {
  FC, useRef, useEffect, useState,
} from 'react';
import { useRouter } from 'next/navigation';
import { IPost } from '@/app/models/Post';
import PostFormatted from '@/app/tools/postFormatter';
import imagePost from '../../../public/images/Background/card_example.jpg';
import defaultImage from '../../../public/images/default_user.png';
import PostFooterActions from '../post/components/PostFooterActions';

interface Props {
  post: IPost;
}

const PostHomeCard: FC<Props> = ({ post }) => {
  const router = useRouter();
  const postContentRef = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  const resizeContent = () => {
    const element = postContentRef.current;
    if (element && element.scrollHeight > element.clientHeight) {
      setIsTruncated(true);
    } else {
      setIsTruncated(false);
    }
  };

  useEffect(() => {
    resizeContent();

    const handleResize = () => {
      resizeContent();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { title, body } = PostFormatted(post.content.text);

  const redirect = () => {
    router.push(`/Home/post/${post.author.username}/${post._id}/`);
  };

  return (
    <div className="w-full min-h-[500px] bg-gray-100 dark:bg-black dark:border-zinc-800 border rounded-lg p-5 my-3 grid grid-flow-row gap-2">
      <div className="w-full flex items-center gap-2">
        <Image
          src={defaultImage}
          alt="image"
          width={30}
          height={30}
          className="rounded-full"
        />
        {post.author.name}
        <span className="text-sm text-gray-700 dark:text-zinc-500">
          @
          {post.author.username}
        </span>
      </div>
      <div className="relative">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p
          ref={postContentRef}
          className="pt-4 text-gray-700 dark:text-gray-300 max-xl:max-h-[200px] overflow-hidden "
        >
          { body }

        </p>

        {isTruncated && (
          <button type="button" onClick={redirect} className="absolute w-full text-center dark:text-zinc-500 z-40 -bottom-1 rounded-t-lg bg-black/70 backdrop-blur-sm shadow-[0px_-10px_30px_10px] shadow-black">
            {body ? 'Show More' : 'Show Less'}
          </button>
        )}

      </div>

      <div className="relative w-full h-full min-h-[300px]">
        <Image
          src={imagePost}
          alt="imagePost"
          fill
          className="rounded-lg  object-cover"
        />
      </div>

      <PostFooterActions onClick={redirect} />
    </div>
  );
};

export default PostHomeCard;

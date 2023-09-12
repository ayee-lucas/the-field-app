'use client';

import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import formatPost from '@/app/tools/postFormatter';
import Link from 'next/link';
import { formatDate } from '@/app/tools/datesFormatter';
import imagePost from '@/public/images/Background/card_example.jpg';
import CustomAvatar from '@/components/ui/custom-avatar';
import { ExtendedPost } from '@/app/types/postType';
import { REQUIREMENT_NOTFOUND } from '@/app/config';
import PostFooterActions from '../post/components/PostFooterActions';

type Props = {
  post: ExtendedPost;
  sessionId: string;
};

const PostHomeCard: FC<Props> = ({ post, sessionId }) => {
  const router = useRouter();

  const postContentRef = useRef<HTMLParagraphElement>(null);

  const [isTruncated, setIsTruncated] = useState(false);

  if (!post.Author) {
    throw new Error(`${REQUIREMENT_NOTFOUND} [POST AUTHOR]`);
  }
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

  const { title, body } = formatPost(post.content.text);

  const { formatedDate, formatedTime } = formatDate(post.created_at);

  const redirect = () => {
    router.push(`/Home/post/${post.author_id}/${post.id}/`);
  };

  return (
    <div
      className="w-full min-h-fit bg-gray-100 dark:bg-black dark:border-zinc-800 border rounded-lg p-5 my-3 grid grid-flow-row gap-2 overflow-hidden"
      aria-hidden
    >
      <Link
        className="w-full flex items-center gap-2"
        href={`/Home/profile/${post.author_id}`}
      >
        <CustomAvatar imgUrl={post.Author.picture.pictureURL} />
        {post.Author.Profile.name}
        <span className="text-sm text-gray-700 dark:text-zinc-500">
          @{post.Author.username}
        </span>
      </Link>
      <div className="relative">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p
          ref={postContentRef}
          className="pt-4 text-gray-700 dark:text-gray-300 max-xl:max-h-[200px] overflow-hidden "
        >
          {body}
        </p>

        {isTruncated && (
          <button
            type="button"
            onClick={redirect}
            className="absolute w-full text-center dark:text-zinc-500 z-40 -bottom-1 rounded-t-lg dark:bg-black/70 backdrop-blur-sm shadow-[0px_-10px_30px_10px] dark:shadow-black shadow-white bg-white/70"
          >
            {body ? 'Show More' : 'Show Less'}
          </button>
        )}
      </div>

      {post.content.media.MediaURL.length > 0 && (
        <div className="relative w-full h-full min-h-[300px]">
          <Image
            src={imagePost}
            alt="imagePost"
            fill
            className="rounded-lg  object-cover"
          />
        </div>
      )}

      <PostFooterActions post={post} sessionId={sessionId} />

      <div className="flex items-center text-sm text-gray-700 dark:text-zinc-500 gap-3 w-full">
        <span>{formatedTime}</span>
        <span>{formatedDate}</span>
      </div>
    </div>
  );
};

export default PostHomeCard;

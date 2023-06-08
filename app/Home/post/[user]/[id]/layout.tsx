import React from 'react';
import Image from 'next/image';
import { BsFillBookmarkDashFill } from 'react-icons/bs';
import { IPost } from '@/app/models/Post';
import PostFormatted from '@/app/tools/postFormatter';
import { formatDate } from '@/app/tools/datesFormatter';
import Link from 'next/link';
import defaultImage from '../../../../../public/images/default_user.png';
import PostFooterActions from '../../components/PostFooterActions';
import AddComment from '../../components/AddComment';
import { fetchPostById } from '../../actions/Actions';
import PostBody from '../../components/PostBody';
import MobileComents from '../../components/MobileComents';

export default async function Post({
  params, children,
}: {
  params: { id: string }, children: React.ReactNode
}) {
  const post:IPost = await fetchPostById(params.id);

  const { title, body } = PostFormatted(post.content.text);

  const { formatedDate, formatedTime } = formatDate(post.createdAt);

  return (
    <div
      className="w-full h-full px-[5rem] max-sm:px-3 flex flex-col text-black dark:text-white pt-5 justify-start items-center dark:bg-black"
      aria-hidden
    >
      <div className="py-2">
        <div className="flex items-center justify-between w-full gap-2 my-3">
          <Link
            href={`/Home/profile/${post.author.username}`}
            className="flex items-center gap-2"
          >
            <Image
              src={defaultImage}
              alt="user"
              className="rounded-full border border-black"
              width={35}
              height={35}
            />
            {post.author.name}
            <span className="text-sm text-gray-600 dark:text-zinc-500">
              @
              {post.author.username}
            </span>

          </Link>

          <BsFillBookmarkDashFill className="text-gray-500" size={20} />

        </div>
        <PostBody title={title} body={body} />

        <div className="relative w-full h-[400px] max-h-[400] mt-5">
          <Image
            src="https://images.unsplash.com/photo-1533923156502-be31530547c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            fill
            alt="post"
            className="absolute inset-0 object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 w-full text-sm pl-2 pb-3 text-gray-500">
        <span>
          {formatedTime}
        </span>
        <span>
          {formatedDate}
        </span>
      </div>
      <PostFooterActions />
      <AddComment postAuthor={post.author.username} />
      <MobileComents />
      {children}

    </div>
  );
}

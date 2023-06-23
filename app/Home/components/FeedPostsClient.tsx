'use client';

/* eslint-disable import/no-extraneous-dependencies */

import {
  FC, useRef, useEffect, useState,
} from 'react';
import { IPost } from '@/app/models/Post';
import { useIntersection } from '@mantine/hooks';
import { useInfiniteQuery } from '@tanstack/react-query';
import { SCROLLING_PAGINATION_NUMBER } from '@/app/config';
import axios from 'axios';
import PostHomeCard from './PostHomeCard';

type Props = {
  initialPosts: IPost[];
  sessionId: string;
};

const FeedPostsClient: FC<Props> = ({ initialPosts, sessionId }) => {
  const lastPostRef = useRef<HTMLElement>(null);
  const [noPosts, setNoPosts] = useState<boolean>(false);

  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['infinite-query'],
    // eslint-disable-next-line consistent-return
    async ({ pageParam = 1 }) => {
      const query = `/api/Posts?limit=${SCROLLING_PAGINATION_NUMBER}&page=${pageParam}`;
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { data } = await axios.get(query);
      return data as IPost[];
    },
    {
      getNextPageParam: (_, pages) => pages.length + 1,
      // @ts-expect-error
      initialData: { pages: [initialPosts], pagesParams: [1] },
    },
  );

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage(); // Load more posts when the last post comes into view
    }
  }, [entry, fetchNextPage]);

  const posts = data?.pages.flatMap((page) => page) ?? initialPosts;

  if (posts.length === 0) {
    setNoPosts(true);
  }

  return (
    <>
      <ul className="flex flex-col">
        {posts.map((post, index) => {
          if (index === posts.length - 1) {
            return (
              <li
                ref={ref}
              >

                <PostHomeCard
                  post={post as IPost}
                  sessionId={sessionId}
                />
              </li>
            );
          }
          return (
            <PostHomeCard
              post={post as IPost}
              sessionId={sessionId}
            />
          );
        })}
      </ul>
      {isFetchingNextPage && (
        <div className="text-white text-3xl w-full flex items-center justify-center animate-pulse">
          ...
        </div>
      )}
      {noPosts && (
        <div className="text-white text-3xl w-full flex items-center justify-center">
          No more posts to show.
        </div>
      )}
    </>
  );
};

export default FeedPostsClient;

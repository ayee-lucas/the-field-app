'use client';

/* eslint-disable import/no-extraneous-dependencies */

import {
  FC, useRef, useEffect, useState,
} from 'react';
import { useIntersection } from '@mantine/hooks';
import { useInfiniteQuery } from '@tanstack/react-query';
import { SCROLLING_PAGINATION_NUMBER } from '@/app/config';
import { PostType } from '@/app/types/postType';
import PostHomeCard from './PostHomeCard';
import { fetchPostsOnScroll } from '../post/actions';

type Props = {
  initialPosts: PostType[];
  sessionId: string;
};

const FeedPostsClient: FC<Props> = ({ initialPosts, sessionId }) => {
  const lastPostRef = useRef<HTMLElement>(null);
  const [noPosts, setNoPosts] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

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
      const data = await fetchPostsOnScroll(query);

      console.log({ POSTSINIFNITEQUERY: data });

      if (data.error) {
        return setError(true);
      }

      if (data.message === 'No Posts to show') {
        setNoPosts(true);
        return [];
      }

      if (!data.posts) {
        setNoPosts(true);
        return [];
      }

      return data.posts;
    },
    {
      getNextPageParam: (_, pages) => pages.length + 1,
      // @ts-expect-error
      initialData: { pages: [initialPosts], pagesParams: [1] },
    },
  );

  useEffect(() => {
    if (entry?.isIntersecting) {
      if (!noPosts) {
        fetchNextPage();
      }
    }
  }, [entry, fetchNextPage, noPosts]);

  const posts = data?.pages.flatMap((page) => page) ?? initialPosts;

  if (posts.length === 0) {
    setNoPosts(true);
    return (
      <div className="text-white text-3xl w-full flex items-center justify-center">
        No posts to show.
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-white text-3xl w-full flex items-center justify-center">
        Something went wrong.
      </div>
    );
  }

  return (
    <>
      <ul className="flex flex-col">
        {posts.map((post, index) => {
          if (index === posts.length - 1) {
            return (
              <li ref={ref}>
                <PostHomeCard post={post as PostType} sessionId={sessionId} />
              </li>
            );
          }
          return <PostHomeCard post={post as PostType} sessionId={sessionId} />;
        })}
      </ul>

      {isFetchingNextPage && (
        <div className="text-white text-3xl w-full flex items-center justify-center animate-pulse">
          ...
        </div>
      )}
      {noPosts && (
        <div className="text-white text-sm w-full flex items-center justify-center">
          No more posts to show.
        </div>
      )}
    </>
  );
};

export default FeedPostsClient;

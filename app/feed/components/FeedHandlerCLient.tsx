'use client';

import { SCROLLING_PAGINATION_NUMBER } from '@/app/config';
import { useIntersection } from '@mantine/hooks';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { Suspense, useEffect, useRef } from 'react';
import { ExtendedPost } from '@/app/types/postType';
import {
  GetPostsType,
  GetPostsTypeErr,
} from '@/app/server-actions/feed/actions';
import PostHomeCard from './PostHomeCard';

type Props = {
  initialPosts: ExtendedPost[];
  sessionId: string;
};

const fetchPosts = async (pageParam: number): Promise<ExtendedPost[]> => {
  const query = `/api/post?limit=${SCROLLING_PAGINATION_NUMBER}&page=${pageParam}`;
  const res = await fetch(query, {
    method: 'GET',
    cache: 'no-store',
  });

  const posts: GetPostsType | GetPostsTypeErr = await res.json();

  if ('error' in posts) {
    return [];
  }

  return posts.data;
};

export function FeedHandlerClient({ initialPosts, sessionId }: Props) {
  const lastPostRef = useRef<HTMLElement>(null);
  const { entry, ref } = useIntersection({
    root: lastPostRef.current,
    threshold: 0.5,
  });
  const { data, fetchNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: async ({ pageParam = 1 }) => fetchPosts(pageParam),
    getNextPageParam: (_, pages) => pages.length + 1,
    initialData: { pages: [initialPosts], pageParams: [1] },
  });

  const posts = data?.pages.flatMap((page) => page) ?? initialPosts;

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  return (
    <div>
      <ul className="flex flex-col">
        {posts.map((post, index) => {
          if (index === posts.length - 1) {
            return (
              <li key={post.id} ref={ref}>
                <Suspense fallback={<Suspense />}>
                  <PostHomeCard
                    key={post.id}
                    post={post}
                    sessionId={sessionId}
                  />
                </Suspense>
              </li>
            );
          }
          return (
            <Suspense fallback={<Suspense />}>
              <PostHomeCard key={post.id} post={post} sessionId={sessionId} />
            </Suspense>
          );
        })}
      </ul>

      {isFetchingNextPage && (
        <div className="text-white text-3xl w-full flex items-center justify-center animate-pulse">
          ...
        </div>
      )}
      {status === 'error' && (
        <div className="text-white text-sm w-full flex items-center justify-center animate-pulse">
          Already up to date.
        </div>
      )}
    </div>
  );
}

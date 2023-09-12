'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useClickOutside } from '@/app/hooks/clickOutside';
import defaultImage from '../../../../public/images/default_user.png';

const MobileComents = () => {
  const [commentPop, setCommentPop] = useState(false);

  const domNode = useClickOutside(() => {
    setCommentPop(false);
  });

  return (
    <>
      <div
        className="sm:hidden w-full h-full select-none cursor-pointer pb-5"
        aria-hidden
        role="button"
        onClick={() => setCommentPop(!commentPop)}
      >
        <div className="flex items-center justify-start w-full gap-3 text-gray-200 border border-zinc-700 p-2 rounded-lg">
          <Image
            src={defaultImage}
            alt="profile"
            width={40}
            height={40}
            className="rounded full"
          />
          Reply...
        </div>
        <div className="flex items-center justify-center w-full h-full mt-4 bg-zinc-800 rounded-xl px-6 text-gray-200">
          Show 3 Replies
        </div>
      </div>
      <div
        ref={domNode}
        className={
          commentPop
            ? 'fixed inset-x-0 top-24 transition-all  bg-white dark:bg-zinc-900 rounded-t-xl bottom-0 shadow-[0_0_0_100vmax]  shadow-black/80 z-[999]'
            : 'fixed inset-x-0 top-full transition-all rounded-t-xl bottom-0'
        }
      />

      <div
        className={`absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black/10 backdrop-blur-sm backdrop-saturate-200 z-[998] ${
          commentPop ? 'block' : 'hidden'
        }`}
      />
    </>
  );
};

export default MobileComents;

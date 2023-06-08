'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import defaultImage from '../../../../public/images/default_user.png';

const MobileComents = () => {
  const [commentPop, setCommentPop] = useState(false);

  return (
    <>
      <div
        className="sm:hidden mt-4 w-full h-full select-none cursor-pointer"
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
      { commentPop ? (
        <div className={commentPop ? 'absolute inset-x-0 top-32 transition-all bg-white rounded-t-xl bottom-0 translate-y-0' : 'absolute inset-x-0 top-32 transition-all bg-white rounded-t-xl bottom-0 '}>a</div>
      ) : null}
    </>
  );
};

export default MobileComents;

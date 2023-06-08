import React from 'react';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiReply } from 'react-icons/hi';
import { BsArrowReturnRight } from 'react-icons/bs';
import defaultImage from '../../../../../public/images/default_user.png';

export default function Comment() {
  return (
    <div className="w-full h-full flex max-sm:hidden flex-col items-center py-2 px-2 mt-3 border border-gray-200 dark:border-zinc-800">
      <div className="w-full h-full flex  items-center gap-2  ">
        <div className="w-full h-full max-w-[40px]">
          <Image
            src={defaultImage}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <div className="w-full h-full flex flex-col gap-2 pb-1">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-medium">
              John Doe
              <span className="pl-2 text-sm text-gray-500">@jhondo</span>
            </h1>
            <span className="text-sm text-gray-500">10:43 PM</span>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>

          <p className="text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis natus debitis ex unde, modi magni iusto labore perspiciatis
            fuga tenetur vel totam harum eum quisquam, officia esse earum ullam consequuntur.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-2 w-full h-full px-4 py-3">
        <div className="flex flex-col justify-center items-start gap-2">
          <div className="flex items-center gap-2 w-full">
            <Image
              src={defaultImage}
              alt="profile"
              width={30}
              height={30}
              className="rounded-full"
            />
            <h1 className="text-sm">Charlotte</h1>
            <h1 className="text-sm text-gray-500">@charlotted</h1>
            <span className="text-sm text-gray-500">10:55 PM</span>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
          <div className="w-full flex gap-2 items-center">
            <BsArrowReturnRight />
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Optio autem commodi,
              neque nobis laborum ea sunt magni, eius alias aspernatur dolores a
              at id eveniet voluptatibus...
            </p>
          </div>

        </div>

        <div />
      </div>

      <span className="text-sm text-gray-600 w-full h-full text-center py-1 bg-gray-200 dark:bg-zinc-900 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-800 cursor-pointer" role="button">Show 23 replies</span>

      <div className="flex items-center justify-between w-full h-full px-4 pt-2">
        <div className="flex items-center gap-1">
          <AiOutlineHeart className="cursor-pointer" />
          <span className="text-sm">31</span>
        </div>
        <button type="button" className="bg-gray-200 text-sm hover:text-fieldGreen py-1 px-4 rounded-xl flex gap-1 items-center">
          Reply
          <HiReply />

        </button>
      </div>
    </div>
  );
}

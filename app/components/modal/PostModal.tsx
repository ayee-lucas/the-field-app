import React from 'react';
import Image from 'next/image';
import defaultImage from '../../../public/images/default_user.png';

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostModal = ({ setOpen }: Props) => (
  <div
    className="fixed inset-0 bg-black/40 text-black z-[100] flex pt-5 justify-center items-center"
    onClick={() => setOpen(false)}
    aria-hidden
  >
    <div className="absolute bg-white p-5 max-w-5xl top-4 bottom-2 rounded-xl">
      <div className="flex items-center gap-2 my-3">
        <Image
          src={defaultImage}
          alt="user"
          className="rounded-full border border-black"
          width={35}
          height={35}
        />
        <h1>
          Alan Lopez
        </h1>
      </div>
      <h1 className="text-2xl font-semibold">LEBRON JAMES JA MORANT</h1>
      <p className="text-justify mt-2">
        The more I think about this streak, the more I believe it's the most
        unbeatable of all records. LBJ is on an open streak of 1,151 consecutive
        double digit Regular Season games (the streak doesn't include Playoffs
        matches). That's 14 full 82-game seasons. To put include Playoffs
        matches). That's 14 full 82-game seasons. To put include Playoffs
        matches). That's 14 full 82-game seasons. To put include Playoffs
        matches). That's 14 full 82-game seasons. To put include Playoffs
        matches). That's 14 full 82-game seasons. To put include Playoffs
        matches). That's 14 full 82-game seasons. To put include Playoffs
        matches). That's 14 full 82-game seasons. To put include Playoffs
        matches). That's 14 full 82-game seasons. To put thing...
      </p>
      <div className="relative w-full h-[400px] max-h-[400] mt-5">
        <Image
          src="https://images.unsplash.com/photo-1533923156502-be31530547c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          fill
          alt="post"
          className="absolute w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

export default PostModal;

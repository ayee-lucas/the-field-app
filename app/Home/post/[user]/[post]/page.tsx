import Image from 'next/image';
import { BsFillBookmarkDashFill } from 'react-icons/bs';
import defaultImage from '../../../../../public/images/default_user.png';
import PostFooterActions from '../../components/PostFooterActions';
import AddComment from '../../components/AddComment';

export default function Post() {
  return (
    <div
      className="w-full h-full flex flex-col text-black pt-5 justify-center items-center px-4"
      aria-hidden
    >
      <div className=" bg-white py-2">
        <div className="flex items-center justify-between w-full gap-2 my-3">
          <div className="flex items-center gap-2">
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

          <BsFillBookmarkDashFill className="text-gray-500" size={20} />

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
            className="absolute inset-0 object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 w-full text-sm pl-2 pb-3 text-gray-500">
        <span>🕐</span>
        <span>7:27 PM</span>
        <span>May 14, 2022</span>
      </div>
      <PostFooterActions />
      <AddComment />

    </div>
  );
}

import React from "react";
import { ubuntu, quicksand } from "@/app/fonts";
import { AiOutlineHeart, AiFillHeart, AiOutlineStar } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { MdModeComment } from "react-icons/md";
import { RiSendPlaneLine } from "react-icons/ri";
import Image from "next/image";

const PostCard = () => {
  return (
    <div
      className={` ${ubuntu.variable} ${quicksand.variable} w-full min-h-[200px] my-2 max-h-[200px]: bg-zinc-50 p-2
      rounded-lg border border-gray-400 flex flex-col justify-center items-center 
      `}
    >
      <div className="flex justify-start w-full items-center gap-3 mt-5 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-quicksand font-bold text-gray-800">
            LeBron James double digit streak record is so unbeatable, young
            stars like Trae Young, Luka Doncic and Ja Morant, all under the age
            of 25, already have no chance of reaching it.
          </h1>
          <p className="text-[17px] w-full font-ubuntu font-light text-gray-600 text-justify pr-3">
            The more I think about this streak, the more I believe it's the most
            unbeatable of all records. LBJ is on an open streak of 1,151
            consecutive double digit Regular Season games (the streak doesn't
            include Playoffs matches). That's 14 full 82-game seasons. To put
            thing...
          </p>
        </div>

        <div className="relative  w-full max-w-[400px] h-[200px]">
          <Image
            src={
              "https://images.unsplash.com/photo-1533923156502-be31530547c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            }
            fill
            alt="post"
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-between w-full items-center gap-3 text-xl text-gray-600">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <AiOutlineHeart className="cursor-pointer" />
            <span className="text-sm">31</span>
          </div>

          <div className="flex items-center gap-1">
            <BiRepost className="cursor-pointer" />
            <span className="text-sm">2</span>
          </div>

          <div className="flex items-center gap-1">
            <AiOutlineStar className="cursor-pointer" />
            <span className="text-sm">3</span>
          </div>

          <div className="flex items-center gap-1">
            <FaRegComment className="cursor-pointer" size={16} />
            <span className="text-sm">3 </span>
          </div>
        </div>
        <div className="flex items-center gap-3  cursor-pointer text-sm bg-gray-300 px-5 py-1 mt-2 rounded-full">
          <RiSendPlaneLine />
          <span className="text-gray-800">Send</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

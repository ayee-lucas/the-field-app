import React from "react";
import { ubuntu, quicksand } from "@/app/fonts";
import Image from "next/image";

const PostCard = () => {
  return (
    <div
      className={` ${ubuntu.variable} ${quicksand.variable} w-full min-h-[200px] my-2 max-h-[200px]: bg-zinc-50 p-5
      rounded-lg border border-gray-400
      `}
    >
      <h1 className="text-xl font-quicksand font-bold text-gray-800">
        LeBron James double digit streak record is so unbeatable, young stars
        like Trae Young, Luka Doncic and Ja Morant, all under the age of 25,
        already have no chance of reaching it.
      </h1>
      <div className="flex justify-start w-full items-center gap-3 mt-5 ">
        <p className="text-[17px] w-full font-ubuntu font-light text-gray-600 text-justify pr-3">
          The more I think about this streak, the more I believe it's the most
          unbeatable of all records. LBJ is on an open streak of 1,151
          consecutive double digit Regular Season games (the streak doesn't
          include Playoffs matches). That's 14 full 82-game seasons. To put
          things in perspective, all time legends like Michael Jordan,Magic
          Johnson, Larry Bird, Isiah Thomas, Wilt Chamberlain, and Bill Russell,
          didn't even play that many RS games in their entire career. To provide
          further context, young stars like Doncic, Young and Morant, already
          wasted their chance of beating this record. Even If we assume these 3
          players will play 70 RS games per season until they are 40, and score
          at least 10 points in each of these games, nobody will beat the
          record.
        </p>
        <div className="relative  w-full max-w-[400px] h-[200px]">
          <Image
            src={
              "https://images.unsplash.com/photo-1533923156502-be31530547c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            }
            fill
            alt="post"
            className="absolute w-full h-full object-cover rounded-lg outline outline-[2px] outline-gray-500 outline-offset-2"
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;

import React from "react";

const NavProfile = () => {
  return (
    <nav className="w-full h-full mt-2">
      <ul className=" flex justify-start text-black items-center bg-slate-100 px-7 py-6 gap-4">
        <li className="font-bold ">Feed</li>

        <li className="font-bold ">Posts</li>

        <li className="font-bold ">Comments</li>

        <li className="font-bold ">Followers</li>

        <li className="font-bold ">Following</li>
      </ul>
    </nav>
  );
};

export default NavProfile;

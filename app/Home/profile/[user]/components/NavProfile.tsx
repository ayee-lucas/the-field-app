import React from "react";

const NavProfile = () => {
  return (
    <nav
      className="w-full relative h-full mt-2
    after:content-[''] after:w-full after:h-1 after:bg-fieldGreen after:absolute after:bottom-0 after:left-0
    "
    >
      <ul className=" flex justify-start text-black items-center bg-gray-100 px-7 py-6 gap-4 font-medium">
        <li>Recent 🕑</li>

        <li>Posts 📈</li>

        <li>Comments 📢</li>

        <li>Likes ❤️</li>
      </ul>
    </nav>
  );
};

export default NavProfile;

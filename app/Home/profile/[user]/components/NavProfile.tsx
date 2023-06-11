import React from 'react';

function NavProfile() {
  return (
    <nav
      className="w-full relative h-full mt-2
    after:content-[''] after:w-full after:h-1 after:bg-fieldGreen after:absolute after:bottom-0 after:left-0 cursor-pointer
    "
    >
      <ul className=" flex justify-start text-black items-center bg-gray-100 dark:bg-black dark:text-white max-sm:text-[13px]
      px-7 max-sm:px-2 py-6 gap-4 font-medium overflow-x-auto"
      >
        <li className="max-sm:hidden">Recent 🕑</li>

        <li className="max-sm:hidden">Posts 📈</li>

        <li className="max-sm:hidden">Starred ⭐️</li>

        <li className="max-sm:hidden">Comments 📢</li>

        <li className="max-sm:hidden">Likes ❤️</li>

        <li className="flex items-center justify-center gap-3 border border-white rounded-xl p-2">
          <span>
            Recent
          </span>
          <span>
            🕑
          </span>
        </li>
        <li className="flex items-center justify-center gap-3">
          <span>
            Posts
          </span>
          <span>
            📈
          </span>
        </li>
        <li className="flex items-center justify-center gap-3">
          <span>
            Starred
          </span>
          <span>
            ⭐️
          </span>
        </li>
        <li className="flex items-center justify-center gap-3">
          <span>
            Comments
          </span>
          <span>
            📢
          </span>
        </li>
        <li className="flex items-center justify-center gap-3">
          <span>
            Likes
          </span>
          <span>
            ❤️
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default NavProfile;

import React from 'react';

const NavbarAccount = () => (
  <div
    className={'w-full dark:bg-zinc-900  after:content-[\'\'] after:bg-gray-400 after:h-[1px] after:w-full after:absolute after:left-0'}
  >
    <div className="w-full min-h-[40px] bg-gray-50 after:content-[''] after:bg-fieldGreen after:h-[4px] after:w-full after:absolute after:left-0">
      <h1 className="text-xl font-roboto p-4 font-medium">
        ACCOUNT
        {' '}
        <span className="text-fieldGreen">SETTINGS</span>
      </h1>
    </div>
    <nav className="w-full p-3 pt-6 bg-gray-50">
      <ul className="w-full flex gap-2">
        <li className="underline underline-offset-[7px] px-5">USER</li>

        <li className="px-5">PROFILE</li>
        <li className="px-5">SETTINGS</li>
      </ul>
    </nav>
  </div>
);

export default NavbarAccount;

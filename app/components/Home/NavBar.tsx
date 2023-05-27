import React from "react";
import Link from "next/link";
import UserMenu from "./UserMenu";

export const NavBar = () => {
  return (
    <div className="fixed w-full">
      <nav className="bg-white border-gray-200 dark:bg-black">
      <div className="min-h-[60px] flex flex-wrap items-center justify-between mx-auto p-2 px-6">

        <div className="sm:hidden">
        <UserMenu/>
        </div>

        <div className="flex">
          <Link href="/Home" className="flex items-center">
            <div className="flex img-toggle mr-3" />
            
            <span className="self-center text-2xl pl-3 font-semibold whitespace-nowrap dark:text-white max-sm:hidden">
              THE <span className="text-fieldGreen">FIELD</span>
            </span>
          </Link>
        </div>

        <div
          className="flex items-center justify-between w-auto max-sm:hidden"
          id="mobile-menu-2"
        >
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg block w-96 max-md:w-auto max-h-7 pl-10 p-2.5  dark:bg-black dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
              />
            </div>
            <button
              type="submit"
              className="max-h-7 p-2.5 -ml-1 text-sm font-medium text-white bg-fieldGreen rounded-r-lg border border-[#37a33f] dark:border-gray-500 hover:bg-[#37a33f] dark:hover:border-[#37a33f] focus:outline-none dark:bg-black dark:hover:bg-[#37a33f]"
            >
              <svg
                className="w-3 h-3 -mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </form>
        </div>

        {/* Boton de Busqueda para la vista movil */}

        <div>
        <button
              type="submit"
              className="sm:hidden p-2.5  text-white bg-fieldGreen rounded-r-lg hover:bg-[#37a33f] dark:hover:border-[#37a33f] focus:outline-none dark:bg-black dark:hover:bg-[#37a33f]"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
        </div>

        <div className="max-sm:hidden">
          <UserMenu/>
        </div>
        
      </div>
    </nav>
    </div>
  );
};

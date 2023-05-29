import Link from 'next/link';
import React from 'react'
import { AiOutlineHome, AiOutlineBell, AiOutlineComment } from 'react-icons/ai';

export const NavDown = () => {
  return (
    <div className='fixed bottom-0 w-full h-[50px] text-lg'>
        <div className="border-t border-gray-200 dark:border-gray-800 flex justify-evenly text-center h-full px-3 py-4 bg-gray-50 dark:bg-black dark:text-white md:hidden">
            <Link href="#">
                <AiOutlineHome/>
            </Link>
            <Link href="#">
                <AiOutlineComment/>
            </Link>
            <Link href="#">
                <AiOutlineBell/>
            </Link>
            <Link href="#">
                <AiOutlineHome/>
            </Link>
        </div>
    </div>
  )
}

export default NavDown;
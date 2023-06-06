import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { RxCross2 } from 'react-icons/rx';
import defaultImage from '../../../../public/images/default_user.png';

interface Props {
  isOpen: boolean;
  setOpen: () => void;
}

const ModalPost: FC<Props> = ({ isOpen, setOpen }) => {
  const [openClass, setOpenClass] = useState<string>('hidden');

  useEffect(() => {
    if (isOpen) {
      setOpenClass('block opacity-0 bottom-[-100%]');
      setTimeout(() => {
        setOpenClass('bottom-0 opacity-100');
      }, 300);
    } else {
      setOpenClass('hidden');
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed transition-all left-0 right-0 top-0 ${openClass} bg-black/50 z-[60]`}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="bg-white p-10 rounded-md w-[90%] md:w-[50%] flex flex-col items-start justify-start">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Image
                src={defaultImage}
                alt="default_user"
                width={30}
                height={30}
                className="rounded-full mb-2"
              />
              <h1>Alan Lopez</h1>
              <h1 className="text-sm text-gray-600">@alopez</h1>
            </div>
            <RxCross2 onClick={setOpen} role="button" className="text-gray-600 text-2xl cursor-pointer" />
          </div>

          <form action="" className="w-full">
            <input type="text" placeholder="What's on your mind?" className="w-full p-2 my-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:border-gray-400" />
          </form>
          <ul className="w-full border border-gray-300 px-2 rounded-lg">
            <li className="w-full border-b border-gray-300 py-2">
              Photo
            </li>
            <li className="w-full  border-gray-300 py-2">
              Attachment
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ModalPost;

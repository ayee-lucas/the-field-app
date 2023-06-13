'use client';

import {
  FC, useEffect, useState, useTransition, useRef,
} from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { RxCross2 } from 'react-icons/rx';
import { BsArrowLeft } from 'react-icons/bs';
import { montserrat } from '@/app/fonts';
import { IUser } from '@/app/models/User';
import defaultImage from '../../../../public/images/default_user.png';
import TextArea from './TextArea';
import { createPost } from '../actions/Actions';

interface Props {
  isOpen: boolean;
  setOpen: () => void;
}

async function fetchUserById(id: any) {
  const res = await fetch(`/api/User/user/${id}`, {
    method: 'GET',
    next: { revalidate: 100 },
  });

  const user = await res.json();

  return user;
}

const ModalPost: FC<Props> = ({ isOpen, setOpen }) => {
  const { data: session } = useSession();
  const [openClass, setOpenClass] = useState<string>('hidden');
  const [userData, setUserData] = useState<IUser>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [postText, setPostText] = useState<string>('');
  const textArea = useRef<HTMLTextAreaElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();

  const id = session?.user?.id.toString();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await fetchUserById(session?.user?.id);
        setUserData(user);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [isOpen]);

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

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();
    startTransition(() => {
      createPost(postText, id);
      if (textArea.current) {
        textArea.current.value = '';
      }
    });
    setLoading(false);
    setOpen();
  };

  if (loading) {
    <div className="fixed inset-0 bg-white">loading</div>;
  }

  console.log({ POST_TEXT: postText });

  return (
    <div
      className={`fixed transition-all left-0 right-0 top-0 ${openClass} bg-black/50 backdrop-blur-sm z-[60] ${montserrat.variable}`}
    >
      <div className="w-full h-full flex items-center justify-center">
        {/** Overlay */}
        <div className="bg-white p-10 rounded-md w-[90%] md:w-[50%] flex flex-col items-start justify-start max-sm:hidden">
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
        {/** Mobile Overlay */}
        <div className="sm:hidden absolute bg-white dark:bg-zinc-800 w-full h-full bottom-0 top-24 flex flex-col">
          <div className="flex relative items-center w-full justify-between p-2 dark:text-white
          after:content-[''] after:h-[1px] after:bg-fieldGreen after:absolute after:inset-x-0 after:bottom-0
          "
          >
            <div className="flex items-center gap-2">
              <BsArrowLeft size={25} onClick={setOpen} className="cursor-pointer" />
              <span className="font-montserrat text-sm">CREATE A POST</span>
            </div>
            <button
              type="button"
              disabled={postText.length === 0 || postText === ''}
              // eslint-disable-next-line max-len
              onClick={(e) => handleSubmit(e)}
              className="text-[13px] dark:bg-white bg-black dark:text-black py-1 px-4 rounded-lg disabled:bg-zinc-800"
            >
              POST

            </button>
          </div>
          {error ? (
            <div>Something went wrong</div>) : (
              <div className="flex flex-col w-full h-full">
                <div className="flex items-center gap-3 p-3">
                  <Image
                    src={defaultImage}
                    alt="default_user"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  {userData?.name}
                  <span className="text-sm text-gray-400">{`@${userData?.username}`}</span>
                </div>
                <TextArea setText={setPostText} textAreaRef={textArea} />
              </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default ModalPost;

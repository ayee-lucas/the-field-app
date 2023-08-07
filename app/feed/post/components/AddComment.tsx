'use client';

import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { HiReply } from 'react-icons/hi';
import { BsEmojiSmile } from 'react-icons/bs';
// eslint-disable-next-line import/no-extraneous-dependencies
import EmojiPicker from 'emoji-picker-react';
import { RiPencilFill } from 'react-icons/ri';
import defaultImage from '../../../../public/images/default_user.png';
import AlertPost from './AlertPost';

const AddComment = ({ postAuthor }: { postAuthor: string }) => {
  const [comment, setComment] = useState(false);
  const [discard, setDiscard] = useState(false);
  const [emojis, setEmojis] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function adjustTextAreaHeight() {
    if (textareaRef.current) {
      const currentCount = textareaRef.current.value.length;
      if ((currentCount) <= 300) {
        setCharCount(currentCount);
        textareaRef.current.style.height = 'auto'; // Reset the height to auto to calculate the actual content height
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set the height to match the content
      } else {
        textareaRef.current.value = textareaRef.current.value.substring(0, 300);
      }
    }
  }

  const handleEmojis = () => {
    setEmojis(!emojis);
  };

  return (

    <form
      className="w-full max-sm:hidden h-auto flex flex-col justify-center items-center border-t-4 max-sm:border-t-2 border-b rounded-lg border-fieldGreen dark:border-fieldGreen/75 mt-3 border-x border-x-gray-300 dark:border-x-zinc-800"
      aria-hidden
      onFocus={() => setComment(true)}
    >
      <h1 className="text-black text-lg pt-2 pl-4 text-start w-full font-semibold dark:text-white max-sm:text-sm tracking-[1px]">
        <span className="text-fieldGreen">R</span>
        EPLY
      </h1>

      <div className={`w-full max-w-[98%] transition-all h-auto flex flex-col gap-3 justify-center items-center border-t max-sm:border-t-0 mt-3 py-2 px-2 ${
        comment ? 'border-fieldGreen' : ' border-gray-300 dark:border-zinc-800'
      } `}
      >
        <div className="flex gap-2 items-center w-full h-auto">
          <Image
            src={defaultImage}
            alt="user"
            width={35}
            height={35}
            className="rounded-full"
          />
          <div>
            <textarea
              name="text"
              id=""
              cols={30}
              rows={1}
              ref={textareaRef}
              onInput={adjustTextAreaHeight}
              placeholder="Write a reply..."
              className="w-full h-full focus:outline-none resize-none focus:placeholder:text-black bg-transparent dark:text-gray-200 px-1 break-words overflow-x-clip"
            />
            { comment ? (
              <span className={charCount <= 300 ? 'text-sm text-gray-400 w-full text-start' : 'text-sm text-red-500 w-full text-start'}>
                {charCount}
                /300
              </span>
            ) : null}

          </div>

        </div>
        {comment ? (

          <span className="text-sm text-gray-400 w-full text-start">
            Replying to @
            {postAuthor}
          </span>
        ) : null}

        { comment ? (
          <div className="w-full flex relative justify-between  items-center">

            <BsEmojiSmile className="cursor-pointer" size={18} onClick={handleEmojis} />

            {emojis ? (<div className="absolute w-full h-full mt-10 ml-5"><EmojiPicker /></div>) : null}

            <div className="flex items-center gap-2">

              <button
                type="button"
                className="bg-gray-200 text-black text-sm px-2 py-1 rounded-md flex items-center gap-2 border dark:border-zinc-500 dark:bg-transparent dark:text-zinc-300"
                onClick={() => setDiscard(true)}
              >
                Discard
                <RiPencilFill />
              </button>
              <button type="button" className="bg-fieldGreen text-white text-sm px-2 max-sm:px-5 max-sm:py-2 py-1 rounded-md flex items-center gap-2">
                <span className="max-sm:hidden">
                  Reply
                </span>
                <HiReply />
              </button>
            </div>

          </div>

        ) : null}
      </div>

      <AlertPost
        discard={discard}
        setDiscard={setDiscard}
        setComment={setComment}
        textareaRef={textareaRef}
        setCharCount={setCharCount}
      />

    </form>
  );
};

export default AddComment;

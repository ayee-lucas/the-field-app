'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { HiReply } from 'react-icons/hi';
import { BsEmojiSmile } from 'react-icons/bs';
// eslint-disable-next-line import/no-extraneous-dependencies
import EmojiPicker from 'emoji-picker-react';
import { RiPencilFill } from 'react-icons/ri';
import defaultImage from '../../../../public/images/default_user.png';
import AlertPost from './AlertPost';

const AddComment = () => {
  const [comment, setComment] = useState(false);
  const [discard, setDiscard] = useState(false);
  const [emojis, setEmojis] = useState(false);

  const handleEmojis = () => {
    setEmojis(!emojis);
  };

  return (

    <form
      className="w-full h-full flex flex-col justify-center items-center border-t-4 border-b rounded-lg border-fieldGreen mt-3 border-x border-x-gray-300"
      aria-hidden
      onFocus={() => setComment(true)}
    >
      <h1 className="text-black text-lg pt-2 pl-4 text-start w-full font-semibold">
        ADD
        {' '}
        <span className="text-fieldGreen">REPLY</span>
      </h1>

      <div className={`w-full max-w-[98%] transition-all h-full flex flex-col gap-3 justify-center items-center border-t  mt-3 py-2 px-2 ${
        comment ? 'border-fieldGreen' : ' border-gray-300 '
      } `}
      >
        <div className="flex gap-2 items-center w-full">
          <Image
            src={defaultImage}
            alt="user"
            width={35}
            height={35}
            className="rounded-full"
          />
          <input
            type="text"
            onBlur={() => setDiscard(true)}
            placeholder="Reply..."
            className="w-full h-full focus:outline-none focus:placeholder:text-black"
          />
          <p className="w-full h-full" />
        </div>
        {comment ? (

          <span className="text-sm text-gray-400 w-full text-start">Replying to @alopez</span>) : null}

        { comment ? (
          <div className="w-full flex relative justify-between  items-center">

            <BsEmojiSmile className="cursor-pointer" size={18} onClick={handleEmojis} />

            {emojis ? (<div className="absolute w-full h-full mt-10 ml-5"><EmojiPicker /></div>) : null}

            <div className="flex items-center gap-2">

              <button
                type="button"
                className="bg-gray-200 text-black text-sm px-2 py-1 rounded-md flex items-center gap-2"
                onClick={() => setDiscard(true)}
              >
                Discard
                <RiPencilFill />
              </button>
              <button type="button" className="bg-fieldGreen text-white text-sm px-2 py-1 rounded-md flex items-center gap-2">
                Reply
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
      />

    </form>
  );
};

export default AddComment;

'use client';

import { inter } from '@/app/fonts';
import { PenSquare, Upload } from 'lucide-react';
import { useContext } from 'react';
import { NEWPOST_CONTEXT_ERROR } from '@/app/config';
import { NewPostContext } from './NewPostHandler';

export default function NewPostButton() {
  const context = useContext(NewPostContext);

  if (!context) {
    throw new Error(NEWPOST_CONTEXT_ERROR);
  }

  const { loading } = context;

  if (loading) {
    return (
      <button
        type="button"
        className={`w-full py-5 px-3 border border-fieldGreen animate-pulse rounded-md flex items-center justify-between ${inter.variable}`}
      >
        <h1 className="font-inter font-semibold">Uploading...</h1>
        <span className="animate-bounce">.</span>
        <span className="animate-bounce delay-75">.</span>
        <span className="animate-bounce delay-100">.</span>
        <span className="animate-bounce delay-150">.</span>

        <Upload size={20} />
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`w-full py-5 px-3 border border-fieldGreen rounded-md flex items-center justify-between ${inter.variable}`}
    >
      <h1 className="font-inter font-semibold">
        What's on your <span className="text-fieldGreen">mind</span>
      </h1>
      <PenSquare size={20} />
    </button>
  );
}

'use client';

import { inter, quicksand } from '@/app/fonts';
import { PenSquare, Upload } from 'lucide-react';
import { useContext } from 'react';
import { NEWPOST_CONTEXT_ERROR } from '@/app/config';
import { NewPostContext } from './NewPostHandler';

export default function NewPostButton() {
  const context = useContext(NewPostContext);

  if (!context) {
    throw new Error(NEWPOST_CONTEXT_ERROR);
  }

  const { loading, setToggleEditor } = context;

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
      onClick={() => setToggleEditor(true)}
      className={`w-full py-5 px-3 border border-zinc-500 rounded-md flex items-center justify-between bg-zinc-950 ${quicksand.className}`}
    >
      <h1 className="font-quicksand text-lg font-semibold">
        <span className="text-fieldGreen"> What's </span> on your mind
      </h1>
      <PenSquare size={20} />
    </button>
  );
}

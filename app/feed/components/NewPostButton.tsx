'use client';

import { inter, quicksand } from '@/app/fonts';
import { PenSquare, Upload } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { NEWPOST_CONTEXT_ERROR } from '@/app/config';
import { Progress } from '@/components/ui/progress';
import { NewPostContext } from './NewPostHandler';
import 'animate.css';

export default function NewPostButton() {
  const context = useContext(NewPostContext);

  if (!context) {
    throw new Error(NEWPOST_CONTEXT_ERROR);
  }

  const { loading, setToggleEditor, progress } = context;

  const [animationClass, setAnimatonClass] = useState<string>(
    'animate__animated animate__fadeInDown'
  );

  useEffect(() => {
    if (progress === 100) {
      setAnimatonClass('animate__animated animate__fadeOutUp');
    }
  }, [progress]);

  return (
    <>
      {loading && (
        <div
          className={`fixed left-2 right-2 top-7 h-14 z-[999] bg-black/80 backdrop-blur-sm py-2 px-2 border border-fieldGreen rounded-md flex items-center gap-3 ${animationClass}  ${inter.variable}`}
        >
          <h1 className="font-inter font-semibold text-xs animate-pulse">
            Uploading
          </h1>

          <Progress className="animate-pulse" value={progress} />

          <Upload className="animate-pulse" size={20} />
        </div>
      )}
      <button
        type="button"
        disabled={loading}
        onClick={() => setToggleEditor(true)}
        className={`w-full py-5 px-3 border border-zinc-700 rounded-md flex items-center justify-between bg-zinc-950 ${quicksand.className}`}
      >
        <h1 className="font-quicksand text-lg font-semibold">
          <span className="text-fieldGreen"> What's </span> on your mind
        </h1>
        <PenSquare size={20} />
      </button>
    </>
  );
}

import { quicksand } from '@/app/fonts';
import { StickyNote } from 'lucide-react';

export default function NoPostsFound() {
  return (
    <div className="w-full h-full p-5 grid place-items-center text-zinc-500 text-2xl">
      <StickyNote />
      <h1 className={`${quicksand.className}`}>No Posts Found</h1>
    </div>
  );
}

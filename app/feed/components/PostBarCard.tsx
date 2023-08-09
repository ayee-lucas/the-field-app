import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  desc: string;
  img: string;
};

export default function PostBarCard({ title, desc, img }: Props) {
  return (
    <div className="flex flex-col text-white items-start relative justify-end gap-2 w-full min-h-[250px] max-h-[250px] border border-gray-700 dark:border-zinc-800 rounded-xl p-4 shadow-lg min-w-[200px] max-w-[200px]">
      <h1 className="text-lg font-montserrat font-medium z-[3]">{title}</h1>

      <p className="z-[3]">{desc}</p>

      <div className="absolute inset-0 bg-black/40  z-[2] rounded-lg" />

      <Image
        src={img}
        alt="example"
        fill
        className="object-cover z-[1] rounded-lg"
      />
    </div>
  );
}

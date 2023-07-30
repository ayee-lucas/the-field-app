'use client';

import CustomAvatar from '@/components/ui/custom-avatar';

type Props = {
  content: string;
  date: string;
  type: string;
  nextType: string;
  myImage: string;
};

export default function TextBubble({
  content,
  date,
  type,
  nextType,
  myImage,
}: Props) {
  const imageLink =
    'https://uploadthing.com/f/bb6d41f1-6b8f-4af8-874b-58f7dc28756b_WhatsApp%20Image%202023-07-06%20at%207.56.41%20PM.jpeg';

  if (type === 'sent') {
    return (
      <div className="flex w-full mt-2 space-x-3 justify-end">
        <div>
          <div className="bg-fieldGreen text-white p-3 rounded-l-lg rounded-br-lg max-sm:max-w-[14rem] max-md:max-w-[25rem] max-lg:max-w-[12rem] lg:max-w-[12rem] 2xl:max-w-[25rem]">
            <p className="text-sm">{content}</p>
          </div>
          <span
            className={`flex text-xs text-zinc-400 leading-none justify-end pt-1 ${
              nextType === 'sent' && 'hidden'
            }`}
          >
            {date}
          </span>
        </div>
        <div className={`h-10 w-10  ${nextType === 'sent' && 'dark:bg-black'}`}>
          <CustomAvatar size={nextType === 'sent' ? 15 : 10} imgUrl={myImage} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-full mt-2 space-x-3">
      <div
        className={`h-10 w-10  ${nextType === 'received' && 'dark:bg-black'}`}
      >
        <CustomAvatar
          size={nextType === 'received' ? 15 : 10}
          imgUrl={imageLink}
        />
      </div>
      <div>
        <div className="bg-zinc-300 dark:bg-zinc-700 p-3 rounded-r-lg rounded-bl-lg max-sm:max-w-[14rem] max-md:max-w-[25rem] max-lg:max-w-[12rem] lg:max-w-[12rem] 2xl:max-w-[25rem]">
          <p className="text-sm">{content}</p>
        </div>
        <span
          className={`text-xs text-zinc-400 leading-none ${
            nextType === 'received' && 'hidden'
          }`}
        >
          {date}
        </span>
      </div>
    </div>
  );
}

import Image from 'next/image';

import bg from '@/public/images/Background/login_bg.jpg';

export default function SideImage() {
  return (
    <div className="w-full relative h-full max-sm:hidden">
      <Image
        src={bg}
        className="absolute w-full h-full object-cover"
        alt="imagebg"
        fill
        placeholder="blur"
        priority
      />
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="absolute z-[2] flex flex-col items-start px-4 justify-center w-full h-full text-6xl text-white">
        <h1 className="">DISCOVERING</h1>
        <h1 className="text-fieldGreen py-3"> SPORTS </h1>
        <h1> TALENT </h1>
        <h3 className="text-xl my-4 mx-1">
          Together, we can make a difference
        </h3>
      </div>
    </div>
  );
}

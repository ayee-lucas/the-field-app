import { IoChatbubbleOutline } from 'react-icons/io5';

export default function Loading() {
  return (
    <div className="bg-white dark:bg-black grid place-content-center w-full min-h-screen">
      <div className="flex items-center justify-center gap-2 w-full">
        <h1 className="text-3xl lg:ml-20 font-bold text-gray-800 dark:text-white animate__animated animate__slideInUp animate__faster">
          CHATS
        </h1>
      </div>

      <div className="absolute bottom-1/3 left-1/2 -ml-5 w-2 h-2 animate-bounce">
        <IoChatbubbleOutline className="text-4xl text-black dark:text-white" />
      </div>
    </div>
  );
}

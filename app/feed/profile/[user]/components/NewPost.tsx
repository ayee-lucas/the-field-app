import { FC } from 'react';
import { AiFillEdit } from 'react-icons/ai';

interface Props {
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
}

const NewPost: FC<Props> = ({ onClick }) => (
  <div
    role="button"
    aria-hidden="true"
    onClick={onClick}
    className="w-full h-full max-h-[75px] my-2 select-none cursor-pointer bg-gray-50 border flex gap-2 items-center  border-gray-300 rounded-lg p-4
    dark:bg-black dark:border-zinc-800 dark:hover:bg-zinc-900

    "
  >
    <h1 className="text-xl text-black dark:text-white font-semibold">
      <span className="text-fieldGreen">What's</span> on your mind?
    </h1>
    <AiFillEdit className="text-black dark:text-white" size={20} />
  </div>
);

export default NewPost;

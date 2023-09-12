'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import ReactLoading from 'react-loading';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

type Props = {
  loading: boolean;
  error: boolean;
};

export default function PostingComponent({ loading, error }: Props) {
  return (
    <div
      className="w-full h-full max-h-[75px] my-2 select-none bg-gray-50 border flex  items-center justify-between  border-gray-300 rounded-lg p-4
    dark:bg-black dark:border-zinc-800 font-semibold
    "
    >
      {loading && !error && (
        <div className="w-full h-full flex items-center justify-between">
          Posting...
          <ReactLoading
            type="bubbles"
            color="#03b50f"
            height="20px"
            width="20px"
          />
        </div>
      )}

      {!loading && !error && (
        <div className="w-full h-full flex items-center justify-between">
          Posted
          <AiOutlineCheckCircle />
        </div>
      )}

      {error && !loading && (
        <div className="w-full h-full flex items-center justify-between">
          Try again later
          <RxCross2 />
        </div>
      )}
    </div>
  );
}

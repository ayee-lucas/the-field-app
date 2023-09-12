'use client';

import { FC, useState } from 'react';

interface Props {
  title: string;
  body: string;
}

const PostBody: FC<Props> = ({ title, body }) => {
  const bodyFormat = body.length > 200 ? `${body.substring(0, 200)}...` : body;
  const [showFullBody, setShowFullBody] = useState<boolean>(false);

  return (
    <>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-justify mt-2 text-gray-700 dark:text-zinc-400">
        {showFullBody ? body : bodyFormat}
      </p>
      <div className={body.length < 200 ? 'hidden' : ''}>
        {showFullBody ? (
          <button
            type="button"
            onClick={() => setShowFullBody(false)}
            className="dark:text-gray-200 text-gray-800"
          >
            Show less
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowFullBody(true)}
            className="dark:text-gray-200 text-gray-800"
          >
            Show more
          </button>
        )}
      </div>
    </>
  );
};

export default PostBody;

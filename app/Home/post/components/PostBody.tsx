'use client';

import { FC, useState } from 'react';

interface Props {
  title:string, body:string
}

const PostBody: FC<Props> = ({ title, body }) => {
  const bodyFormat = body.length > 250 ? `${body.substring(0, 250)}...` : body;
  const [showFullBody, setShowFullBody] = useState(false);

  return (
    <>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-justify mt-2 text-gray-700 dark:text-zinc-400">
        {showFullBody ? body : bodyFormat}
      </p>
      {showFullBody ? <button type="button" onClick={() => setShowFullBody(false)} className="text-gray-200">Show less</button> : <button type="button" onClick={() => setShowFullBody(true)} className="text-gray-200">Show more</button>}
    </>
  );
};

export default PostBody;

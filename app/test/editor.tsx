/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Dropzone from 'react-dropzone';
import { AiOutlineMinus } from 'react-icons/ai';
import { IoIosAdd } from 'react-icons/io';
import { TbRotateClockwise } from 'react-icons/tb';
import dynamic from 'next/dynamic';

const AvatarEditor = dynamic(() => import('react-avatar-editor'), {
  loading: () => <p>Loading...</p>,
});

export const Editor = () => {
  const [image, setImage] = useState<File | string>('');
  const [rotate, setRotate] = useState(0);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (zoom >= 2.4) return;

    setZoom(zoom + 0.2);
    console.log(zoom);
  };

  const handleZoomOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (zoom <= 1) return;

    setZoom(zoom - 0.2);
    console.log(zoom);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-20">
      <Dropzone
        onDrop={(dropped) => setImage(dropped[0])}
        noClick
        noKeyboard
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <AvatarEditor
              width={200}
              height={200}
              border={20}
              borderRadius={100}
              scale={zoom}
              rotate={rotate}
              image={image}
            />
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
      <div className="flex flex-row items-center justify-between py-2 w-full px-2">
        <Button onClick={() => setRotate(rotate + 90)}>
          <TbRotateClockwise />
        </Button>
        <Button onClick={(e) => handleZoomOut(e)}>
          <AiOutlineMinus />
        </Button>
        <Button onClick={(e) => handleZoomIn(e)}>
          <IoIosAdd />
        </Button>
      </div>

    </main>
  );
};

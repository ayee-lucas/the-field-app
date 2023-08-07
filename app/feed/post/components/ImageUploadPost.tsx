/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { useDropzone } from 'react-dropzone';
import type { FileWithPath } from 'react-dropzone';
import { useCallback, useContext } from 'react';
import { generateClientDropzoneAccept } from 'uploadthing/client';
import { Button } from '@/components/ui/button';
import { BsImages } from 'react-icons/bs';
import { ClientNewPostContext } from '../../components/ClientNewPost';

export function MultiUploader() {
  const context = useContext(ClientNewPostContext);

  if (!context) {
    throw new Error(
      'ClientNewPostContext must be used within <OuterLClientContext.Provider>'
    );
  }

  const { startUpload, dropImages, setDropImages } = context;

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setDropImages(acceptedFiles);
    },
    [setDropImages]
  );

  const fileTypes = ['image/*'];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  return (
    <div className="w-full flex items-center gap-3" {...getRootProps()}>
      <input {...getInputProps()} />
      {/* <div> */}
      {/*   {dropImages.length > 0 && ( */}
      {/*     <Button onClick={() => startUpload(dropImages)}> */}
      {/*       Upload {dropImages.length} files */}
      {/*     </Button> */}
      {/*   )} */}
      {/* </div> */}
      <BsImages />
      Add Photo
    </div>
  );
}

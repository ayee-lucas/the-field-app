/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { useCallback, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { generateClientDropzoneAccept } from 'uploadthing/client';
import { useUploadThing } from '../tools/uploadthing';

export default function MultiUploader() {
  const [file, setFile] = useState<File | null>(null);
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const fileTypes = ['image/*'];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  const { startUpload } = useUploadThing('imageUploader', {
    onClientUploadComplete: () => {
      alert('uploaded successfully!');
    },
    onUploadError: () => {
      alert('error occurred while uploading');
    },
  });

  return (
    <div className="min-h-screen w-full p-2">
      <div
        {...getRootProps()}
        className="w-full h-56 p-5 border border-gray-300"
      >
        <input {...getInputProps()} className="w-full h-full" />
        Drop file
      </div>
      {file && ( // change to single file
        <button type="button" onClick={() => startUpload([file])}>
          Upload file
        </button>
      )}
    </div>
  );
}

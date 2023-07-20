/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/jsx-props-no-spreading */

'use client';

import Image from 'next/image';
import defaultUser from '@/public/images/default_user.png';
import { useCallback, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { generateClientDropzoneAccept } from 'uploadthing/client';
import { useUploadThing } from '@/app/tools/uploadthing';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { PlusCircle } from 'lucide-react';
import ReactLoading from 'react-loading';
import { utapi } from 'uploadthing/server';
import { useRouter } from 'next/navigation';
import { Session } from '@/app/types/sessionType';
import { updatePicture } from '../action';

export default function ImageHandlerCient({ session }: { session: Session }) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFile(acceptedFiles[0]);
  }, []);
  const fileTypes = ['image/*'];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  const { toast } = useToast();

  const { startUpload, permittedFileInfo } = useUploadThing('imageUploader', {
    onClientUploadComplete: async (res?: { fileUrl: string; fileKey: string; }[] | undefined) => {
      if (!res) {
        toast({
          title: 'Image Upload Failed',
          description: 'No response',
          variant: 'destructive',

        });
        throw new Error('No response at ImageHandlerCLient');
      }
      if (!session?.user?.sub) {
        await utapi.deleteFiles(res[0].fileKey);
        toast({
          title: 'Image Upload Failed',
          description: 'Session not found',
          variant: 'destructive',
        });
        throw new Error('No session Found');
      }

      const updateRes = await updatePicture(session?.user?.sub, res[0].fileKey, res[0].fileUrl);

      if (updateRes.message !== 'success') {
        await utapi.deleteFiles(res[0].fileKey);
        toast({
          title: 'Image Upload Failed',
          description: 'Error saving user picture',
          variant: 'destructive',
        });
        throw new Error('Error saving user picture');
      }

      toast({
        title: 'Image Uploaded',
        description: 'Your image has been uploaded',
      });

      router.push('/Home');
      router.refresh();
    },

    onUploadError: () => toast({
      title: 'Image Upload Failed',
      description: 'Your image upload failed',
      variant: 'destructive',
    }),
  });

  return (
    <div
      className="flex flex-col items-center justify-center gap-2"
    >
      <div className="flex items-center gap-2 text-zinc-400 text-sm">
        <span>Max File Size:</span>
        <span>{permittedFileInfo?.config.image?.maxFileSize}</span>
      </div>

      <div
        {...getRootProps()}
        className="relative min-h-[200px] min-w-[200px] w-full h-full max-w-lg rounded-full border border-black dark:border-white overflow-hidden"
      >
        <input {...getInputProps()} className="w-full h-full" />
        <Image
          alt="image"
          src={file ? URL.createObjectURL(file) : defaultUser}
          className="object-cover"
          fill
        />

      </div>
      {file ? (
        <Button
          onClick={() => {
            setLoading(true);
            startUpload([file]);
          }}
          className="absolute bottom-32 flex gap-2"
        >
          Upload
          <PlusCircle size={20} />
        </Button>

      ) : (
        <span className="absolute bottom-32 text-zinc-400">Click or drop to upload an image</span>
      )}
      <Link href="/Home" className="absolute bottom-4 underline">I'll do it later</Link>
      {loading && (
      <div className="absolute grid place-items-center inset-0 bg-black/40 z-50">
        <ReactLoading type="bars" color="#fff" height={50} width={50} />
      </div>
      )}
    </div>

  );
}

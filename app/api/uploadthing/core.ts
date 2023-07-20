// eslint-disable-next-line import/no-extraneous-dependencies
import { getGoSession } from '@/app/tools/getGoServerSession';
import { cookies } from 'next/headers';
import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { utapi } from 'uploadthing/server';

const f = createUploadthing();
// FileRouter for your app, can contain multiple FileRoutes

export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      // This code runs on your server before upload
      const session = await getGoSession();

      // If you throw, the user will not be able to upload
      if (!session?.user?.sub) throw new Error('Unauthorized');

      const sessionCookie = cookies().get('session');

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: session?.user?.sub, cookie: sessionCookie?.value };
    })

    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload

      if (!metadata.cookie) {
        await utapi.deleteFiles(file.key);
        throw new Error('Failed to update picture fetchng request at core.ts');
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

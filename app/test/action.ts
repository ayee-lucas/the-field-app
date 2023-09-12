/* eslint-disable import/no-extraneous-dependencies */

'use server';

import { utapi } from 'uploadthing/server';

export const handleDelete = async (str: string) => {
  await utapi.deleteFiles(str);
};

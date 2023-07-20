/* eslint-disable import/no-extraneous-dependencies */

'use server';

import { utapi } from 'uploadthing/server';

export const handleDelete = async (str: string) => {
  const res = await utapi.deleteFiles(str);
  console.log(res);
};

'use server';

import dbConnect from '@/app/db/Connection';
import User from '@/app/models/User';

export async function getProfile(username: any) {
  dbConnect();

  const userFind = await User.findOne({ username });

  return JSON.stringify(userFind);
}

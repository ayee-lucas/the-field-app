'use server';

import prisma from '@/lib/prisma';
import { Profile } from '@prisma/client';

type GetProfileRes = {
  message: 'success';
  data: Profile;
};

type GetProfileResError = {
  message: string;
  error: string;
};

const serverError = 'Server Error Getting Profile';

export async function getProfile(
  profileId: string
): Promise<GetProfileRes | GetProfileResError> {
  try {
    const profile = await prisma.profile.findFirst({
      where: {
        id: profileId,
      },
    });

    if (!profile) {
      return {
        message: 'Error getting profile',
        error: serverError,
      };
    }

    return {
      message: 'success',
      data: profile,
    };
  } catch (err) {
    console.log(err);
    return {
      message: 'Something went wrong',
      error: serverError,
    };
  }
}

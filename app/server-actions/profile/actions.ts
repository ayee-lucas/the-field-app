'use server';

import { FETCH_ERROR, REQUIREMENT_NOTFOUND, SERVER_ERROR } from '@/app/config';
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

export async function getProfile(
  profileId: string
): Promise<GetProfileRes | GetProfileResError> {
  try {
    if (!profileId) {
      return {
        message: `${REQUIREMENT_NOTFOUND} [PROFILE ID]`,
        error: `${SERVER_ERROR} [GET PROFILE]`,
      };
    }

    const profile = await prisma.profile.findFirst({
      where: {
        id: profileId,
      },
    });

    if (!profile) {
      return {
        message: `${FETCH_ERROR} [GET PROFILE]`,
        error: `${SERVER_ERROR} [GET PROFILE]`,
      };
    }

    return {
      message: 'success',
      data: profile,
    };
  } catch (err) {
    console.log(err);
    return {
      message: FETCH_ERROR,
      error: SERVER_ERROR,
    };
  }
}

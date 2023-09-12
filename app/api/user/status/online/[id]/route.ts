import prisma from '@/lib/prisma';

const serverError = 'Server Error Updating User';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return new Response(
        JSON.stringify({
          message: 'Error getting id param',
          error: serverError,
        }),
        { status: 422 }
      );
    }

    const userToUpdate = await prisma.user.findFirst({
      where: {
        id: params.id,
      },
    });

    if (!userToUpdate) {
      return new Response(
        JSON.stringify({
          message: 'User not found',
          error: serverError,
        }),
        { status: 404 }
      );
    }

    const profileId = userToUpdate?.profile_id;

    if (!profileId) {
      return new Response(
        JSON.stringify({
          message: 'Profile Id not found',
          error: serverError,
        }),
        { status: 404 }
      );
    }

    const profileUpdated = await prisma.profile.update({
      where: {
        id: profileId,
      },
      data: {
        online: true,
      },
    });

    if (!profileUpdated) {
      return new Response(
        JSON.stringify({
          message: 'Profile  not found',
          error: serverError,
        }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: 'success', action: 'user online' }),
      {
        status: 200,
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ message: serverError, error: err }), {
      status: 500,
    });
  }
}

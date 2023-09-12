'use server';

type OnlineStatusRes = {
  message: 'success';
  action: 'user online';
};

type OfflineStatusRes = {
  message: 'success';
  action: 'user offline';
};

type StatusResError = {
  message: string;
  error: string;
};

const serverError = 'Server Error Updating User';

export async function userEntered(
  id: string
): Promise<OnlineStatusRes | StatusResError> {
  try {
    const res = await fetch(
      `${process.env.NEXT_URL}/api/user/status/online/${id}`,
      {
        method: 'PUT',
        cache: 'no-store',
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return {
        message: data.message,
        error: data.error,
      };
    }

    return {
      message: data.message,
      action: data.action,
    };
  } catch (err) {
    return {
      message: serverError,
      error: 'Something went wrong',
    };
  }
}

export async function userExit(
  id: string
): Promise<OfflineStatusRes | StatusResError> {
  try {
    const res = await fetch(
      `${process.env.NEXT_URL}/api/user/status/offline/${id}`,
      {
        method: 'PUT',
        cache: 'no-store',
      }
    );
    const data = await res.json();

    if (!res.ok) {
      return {
        message: data.message,
        error: data.error,
      };
    }

    return {
      message: data.message,
      action: 'user offline',
    };
  } catch (err) {
    return {
      message: serverError,
      error: 'Something went wrong',
    };
  }
}

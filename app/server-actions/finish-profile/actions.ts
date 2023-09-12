'use server';

import { cookies } from 'next/headers';
import { OrgType } from '@/app/types/OrgType';
import { AthleteType } from '@/app/types/Athlete';

const goUrl = process.env.GO_BACKEND as string;

type FinishUserRequest = {
  message?: string;
  error?: string;
};

type Values = {
  name: string;
  bio: string;
};

export async function finishUser(
  id: string,
  values: Values
): Promise<FinishUserRequest> {
  try {
    const sessionId = cookies().get('session');
    const res = await fetch(`${goUrl}/api/users/finish/${id}`, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionId?.value}`,
      },
      cache: 'no-store',
    });

    const json = await res.json();

    if (!res.ok) {
      return {
        message: json.message,
        error: json.error,
      };
    }

    return json;
  } catch (err) {
    return {
      message: 'Something went wrong',
      error: 'FetchError',
    };
  }
}

export type CountryResponse = {
  name?: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
      smo: {
        official: string;
        common: string;
      };
    };
  };
  flag?: string;
};

type CountryError = {
  error: string;
  message: 'Error fetching countries';
};

export async function getCountries(): Promise<
  CountryResponse[] | CountryError
> {
  try {
    const res = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,flag',
      {
        next: { revalidate: 1000 },
      }
    );

    if (!res.ok) {
      const errorRes = await res.json();
      return {
        error: errorRes,
        message: 'Error fetching countries',
      };
    }

    const data = await res.json();

    return data;
  } catch (err) {
    return {
      error: JSON.stringify(err),
      message: 'Error fetching countries',
    };
  }
}

type OrgRes = {
  result: {
    id: string;
    message: string;
    org: OrgType;
  };
};

type OrgResError = {
  message: string;
  error: string;
};

type BodyOrgReq = {
  country: string;
  email: string;
  city: string;
  website?: string;
  sport: string[];
  sponsor?: string[];
};

export async function finishOrg(
  values: BodyOrgReq,
  id: string
): Promise<OrgRes | OrgResError> {
  try {
    const sessionId = cookies().get('session');

    const res = await fetch(`${goUrl}/api/users/request/org/${id}`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionId?.value}`,
      },
      cache: 'no-store',
    });

    const json = await res.json();

    if (!res.ok) {
      return {
        error: json.error,
        message: json.message,
      };
    }

    return json;
  } catch (err) {
    return {
      error: 'Fetch Error',
      message: 'Something went wrong',
    };
  }
}

type AthlRes = {
  result: {
    id: string;
    messsage: string;
    athlete: AthleteType;
  };
};

type AthlResError = {
  message: string;
  error: string;
};

type BodyAthlReq = {
  nationality: string;
  gender: string;
  sport: string;
  sponsors?: string[];
  current_team?: string;
  height: number;
  weight: number;
  achievements?: string;
  contact: string;
};

export async function finishAthl(
  values: BodyAthlReq,
  id: string
): Promise<AthlRes | AthlResError> {
  try {
    const sessionId = cookies().get('session');

    const res = await fetch(`${goUrl}/api/users/request/athl/${id}`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionId?.value}`,
      },
      cache: 'no-store',
    });

    const json = await res.json();

    if (!res.ok) {
      return {
        error: json.error,
        message: json.message,
      };
    }

    return json;
  } catch (err) {
    return {
      error: 'Fetch Error',
      message: 'Something went wrong',
    };
  }
}

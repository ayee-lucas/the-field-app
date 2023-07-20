export type Session = {
  status: 'unauthenticated' | 'authenticated',
  error?: string,
  user?: {
    id: string;
    sub: string;
    username: string;
    email: string;
    role: string;
    Image: string;
    picture: {
      pictureKey: string,
      pictureURL: string,
    };
    expireOn: number;
    createdAt: string;
  }
};

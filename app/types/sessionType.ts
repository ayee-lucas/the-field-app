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
    Picture: string;
    expireOn: number;
    createdAt: string;
  }
};

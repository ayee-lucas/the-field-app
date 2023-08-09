import { Post, User, Like } from '@prisma/client';

export type ExtendedPost = Post & {
  Author?: User;
  Like?: Like[];
};

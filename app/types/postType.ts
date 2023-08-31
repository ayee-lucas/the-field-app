import { Post } from '@prisma/client';

export type ExtendedPost = Post & {
  Author: {
    username: string;
    picture: { pictureKey: string; pictureURL: string };
    profile_id: string;
    Profile: { name: string };
  };
  Like: {
    id: string;
    user_id: string;
    post_id: string;
    created_at: Date;
    updated_at: Date;
  }[];
};

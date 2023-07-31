export type UserType = {
  _id: string;
  name: string;
  email: string;
  password: string;
  username: string;
  finished: boolean;
  role: 'user' | 'admin';
  online: boolean;
  picture: {
    pictureKey: string;
    pictureURL: string;
  };
  bio: string;
  followers: string[];
  posts: string[];
  likes: string[];
  createdAt: Date;
  updatedAt: Date;
};

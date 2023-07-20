export type PostType = {
  _id: string;
  author: {
    _id: string;
    username: string;
    name: string;
    picture: {
      pictureKey: string;
      pictureURL: string
    }
  }
  content: {
    text: string;
    media: string[];
  }
  repost: string[];
  starred: string[];
  createdAt: Date;
  comments: string[];
  likes: [{
    _id: string;
    username: string;
  }]
};

import {
  Document, Schema, model, models,
} from 'mongoose';
import { IUser } from './User';
import { IComment } from './Comment';

// Interface for Post document
export interface IPost extends Document {
  author: IUser;
  content: {
    text: string;
    media: string[];
  };
  createdAt: Date;
  comments: IComment['_id'][];
  likes: IUser['_id'][];
}

// Mongoose schema for User
const PostSchema = new Schema<IPost>(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Author is required.'],
    },
    content: {
      text: {
        type: String,
        required: [true, 'Text is required.'],
      },
      media: [
        {
          type: String,
        },
      ],
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  },
);

// No mas de 10 items
PostSchema.path('content.media').validate((media: string[]) => media.length <= 10, 'Media cannot exceed 10 items.');

// Create and export the Post model
const Post = models.Post || model<IPost>('Post', PostSchema);

export default Post;

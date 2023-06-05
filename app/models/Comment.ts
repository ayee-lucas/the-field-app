import { Document, Schema, model, Model } from 'mongoose';
import { IUser } from './User';
import { IPost } from './Post';

export interface IComment extends Document {
  _id?: string;
  author: IUser;
  post: IPost;
  content: string;
  createdAt: Date;
}

// Mongoose schema for Comment
const commentSchema = new Schema<IComment>(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Author is required.'],
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: [true, 'Post is required.'],
    },
    content: {
      type: String,
      required: [true, 'Content is required.'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
);

// Create and export the Comment model
const Comment: Model<IComment> = model<IComment>('Comment', commentSchema);

export default Comment;

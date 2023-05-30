import {
  Document, Schema, model, models,
} from 'mongoose';
import { IUser } from './User';
import { IPost } from './Post';

// Interface for Comment document
export interface IComment extends Document {
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
  },
  {
    timestamps: true, versionKey: false,
  },
);

// Create and export the Comment model
const Comment = models.Comment || model<IComment>('Comment', commentSchema);

export default Comment;

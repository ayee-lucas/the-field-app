import {
  Document, Schema, model, models,
} from 'mongoose';
import { IPost } from './Post';

// Interface for User document
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  role: String;
  online: boolean;
  profilePicture?: string;
  likes?: IPost['_id'][];
  bio?: string;
  followers: IUser['_id'][];
  posts: IPost['_id'][];
}

// Mongoose schema for User
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    online: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      required: true,
      default: 'user',
    },
    profilePicture: {
      type: String,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },

    ],
    bio: {
      type: String,
      default: 'No bio yet',
    },
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// Create and export the User model
const User = models.User || model<IUser>('User', userSchema);

export default User;

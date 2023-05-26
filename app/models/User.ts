import { Document, Schema, model, models } from "mongoose";
import { IPost } from "./Post";

// Interface for User document
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  role: String;
  profilePicture?: string;
  bio: string;
  followers: IUser["_id"][];
  posts: IPost["_id"][];
}

// Mongoose schema for User
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
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
    role: {
      type: String,
      required: true,
      default: "user"
    },
    profilePicture: {
      type: String,
    },
    bio: {
      type: String,
      required: true,
    },
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
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
  }
);

// Create and export the User model
const User = models.User || model<IUser>("User", userSchema);

export default User;

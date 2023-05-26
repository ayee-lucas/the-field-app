import { Document, Schema, model, models } from "mongoose";

// Interface for User document
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose schema for User
const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true, // Remove leading/trailing whitespaces
      minlength: 3, // Minimum length of 3 characters
      maxlength: 20, // Maximum length of 20 characters
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true, // Convert email to lowercase
      match: /^\S+@\S+\.\S+$/, // Simple email format validation using regex
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Minimum length of 6 characters
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, versionKey: false }
);

// Create and export the User model
const User = models.User || model<IUser>("User", UserSchema);

export default User;

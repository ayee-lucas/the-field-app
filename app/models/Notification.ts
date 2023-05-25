import { Document, Schema, model, models } from "mongoose";
import { IUser } from "./User";

// Interface for User document
export interface INotification extends Document {
  recipient: IUser;
  sender: IUser;
  type: string;
  updatedAt: Date;
}

// Mongoose schema for User
const UserSchema = new Schema<INotification>(
  {
    recipient: {
      type: Object,
      required: true,
    },
    sender: {
      type: String,
      required: true,
      unique: true,
      trim: true, // Remove leading/trailing whitespaces
      minlength: 3, // Minimum length of 3 characters
      maxlength: 20, // Maximum length of 20 characters
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
import { Document, Schema, model, models } from "mongoose";
import { IUser } from "./User";

// Interface for Notification document
export interface INotification extends Document {
  recipient: IUser;
  sender: IUser;
  type: string;
  createdAt: Date;
}

// Mongoose schema for Notification
const NotificationSchema = new Schema<INotification>(
  {
    recipient: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Notification recipient is required."],
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Notification sender is required."],
    },
    type: {
      type: String,
      required: [true, "Notification type is required."],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
);

// Create and export the Notification model
const Notification = models.Notification || model<INotification>("Notification", NotificationSchema);

export default Notification;

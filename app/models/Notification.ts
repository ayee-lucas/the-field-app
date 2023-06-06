import {
  Document, Schema, model, models,
} from 'mongoose';
import { IUser } from './User';

// Interface for Notification document
export interface INotification extends Document {
  recipient: IUser['_id'];
  sender: IUser['_id'];
  type: string;
  createdAt: Date;
}

// Mongoose schema for Notification
const NotificationSchema = new Schema<INotification>({
  recipient: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Notification recipient is required.'],
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Notification sender is required.'],
  },
  type: {
    type: String,
    required: [true, 'Notification type is required.'],
    maxlength: [25, 'Notification type must not exceed 25 characters.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Register the User model if it's not already registered
const User = models.User || model<IUser>('User');

// Create and export the Notification model
const Notification = models.Notification || model<INotification>('Notification', NotificationSchema);

export default Notification;

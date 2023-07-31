import { Document, Schema, model, models } from 'mongoose';
import { IUser } from './User';

// Interface for Message document
export interface IMessage extends Document {
  content: string;
  date: Date;
  sender: IUser;
}

// Mongoose schema for Message
const messageSchema = new Schema<IMessage>(
  {
    content: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Create and export the Message model
const Message = models.Message || model<IMessage>('Message', messageSchema);

export default Message;

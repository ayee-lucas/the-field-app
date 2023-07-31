import { Document, Schema, model, models } from 'mongoose';

// Interface for Message document
export interface IMessage extends Document {
  content: string;
  date: Date;
  username: string;
}

// Mongoose schema for Message
const messageSchema = new Schema<IMessage>(
  {
    content: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
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

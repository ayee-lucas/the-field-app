import { Document, Schema, model, models } from 'mongoose';
import { IMessage } from './Messages';

// Interface for Chat document
export interface IChat extends Document {
  username: string;
  name: string;
  online: boolean;
  messages: IMessage['_id'];
}

// Mongoose schema for Chat
const chatSchema = new Schema<IChat>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
    },
    online: {
      type: Boolean,
      default: false,
    },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message',
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Create and export the Chat model
const Chat = models.Chat || model<IChat>('Chat', chatSchema);

export default Chat;

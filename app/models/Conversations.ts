import { Document, Schema, model, models } from 'mongoose';
import { IChat } from './Chats';

// Interface for Chat document
export interface IConversation extends Document {
  chats: IChat['_id'];
}

// Mongoose schema for Chat
const conversationSchema = new Schema<IConversation>(
  {
    chats: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Chat',
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Create and export the Chat model
const Conversation =
  models.Conversation ||
  model<IConversation>('Conversation', conversationSchema);

export default Conversation;

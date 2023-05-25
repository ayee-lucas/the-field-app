import { Document, Schema, model, models } from "mongoose";
import { IUser } from "./User";

// Interface for Post document
export interface IPost extends Document {
  author: Schema.Types.ObjectId;
  content: {
    text: string;
    media: string[];
  };
  createdAt: Date;
  comments: Schema.Types.ObjectId[];
  likes: IUser[];
}

// Mongoose schema for User
const PostSchema = new Schema<IPost>(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author is required."],
    },
    content: {
      text: {
        type: String,
        required: [true, "Text is required."],
      },
      media: [
        {
          type: String,
        },
      ],
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// No exceda los 500 caracteres
PostSchema.path("content.text").validate(function (text: string) {
  return text.length <= 500;
}, "Text cannot exceed 500 characters.");

// No mas de 10 items
PostSchema.path("content.media").validate(function (media: string[]) {
  return media.length <= 10;
}, "Media cannot exceed 10 items.");

// Create and export the Post model
const Post = models.Post || model<IPost>("Post", PostSchema);

export default Post;

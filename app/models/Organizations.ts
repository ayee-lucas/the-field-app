import { Document, Schema, model, models } from "mongoose";

// Interface for Notification document
export interface INotification extends Document {
  name: string;
  description?: string;
  location?: string;
  website?: string;
  contact?: string;
  email?: string;
  type: string; // Removed optional flag, as it is required
  affiliatedTeams?: string[];
  sponsorships?: string[];
  events?: string[];
  createdAt?: Date;
}

// Mongoose schema for Notification
const NotificationSchema = new Schema<INotification>({
  name: {
    type: String,
    required: [true, "Organizations name is required."],
    maxlength: [50, "Name must not exceed 50 characters."],
  },
  description: {
    type: String,
    required: [true, "Organizations description is required."],
    maxlength: [250, "Description must not exceed 250 characters."],
  },
  location: {
    type: String,
    required: [true, "Organizations location is required."],
    maxlength: [100, "Location must not exceed 100 characters."],
  },
  website: {
    type: String,
    required: [true, "Organizations website is required."],
    maxlength: [100, "Website URL must not exceed 100 characters."],
  },
  contact: {
    type: String,
    required: [true, "Organizations contact is required."],
    maxlength: [50, "Contact information must not exceed 50 characters."],
  },
  email: {
    type: String,
    required: [true, "Organizations email is required."],
    maxlength: [50, "Email address must not exceed 50 characters."],
  },
  type: {
    type: String,
    required: [true, "Organizations type is required."],
    maxlength: [25, "Organizations type must not exceed 25 characters."],
  },
  affiliatedTeams: {
    type: [String],
    default: [],
  },
  sponsorships: {
    type: [String],
    default: [],
  },
  events: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the Notification model
const Notification =
  models.Notification ||
  model<INotification>("Notification", NotificationSchema);

export default Notification;

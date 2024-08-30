import { Schema, model, Document, Types } from 'mongoose';
import { IProject } from './project.models';
 // Import the Project interface

// Define the User interface
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  projects: Types.ObjectId[] | IProject[];
}

// Define the User schema
const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],
});

// Create and export the User model
export const User = model<IUser>('User', userSchema);

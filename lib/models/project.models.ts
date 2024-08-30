import { Schema, model, Document, Types } from 'mongoose';
import { IUser } from './user.models';
 // Import the User interface

// Define the Project interface
export interface IProject extends Document {
  name: string;
  userId: Types.ObjectId | IUser;
}

// Define the Project schema
const projectSchema = new Schema<IProject>({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

// Create and export the Project model
export const Project = model<IProject>('Project', projectSchema);

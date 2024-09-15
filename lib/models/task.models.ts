import { Schema, model, models } from 'mongoose';

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignee: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['TODO', 'IN_PROGRESS', 'completed'], default: 'TODO' },
  dueDate: { type: Date,default:new Date() },
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Task = models.Task || model('Task', TaskSchema);

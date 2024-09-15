import { Schema, model, models } from 'mongoose';

// Define the KanbanBoard schema
const KanbanBoardSchema = new Schema({
  name: { type: String, required: true }, // Board name
  userId: { type: String, required: true }, // User ID associated with this board
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }], // List of tasks referencing the Task model
  createdAt: { type: Date, default: Date.now }, // Board creation date
  updatedAt: { type: Date, default: Date.now }, // Board update date
});

// Export the KanbanBoard model
export const KanbanBoard = models.KanbanBoard || model('KanbanBoard', KanbanBoardSchema);

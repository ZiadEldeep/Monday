import { z } from 'zod';

export const taskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  dueDate: z.string().optional(),
  assignee: z.string().min(1, 'Assignee is required'),
});

export type TaskSchema = z.infer<typeof taskSchema>;

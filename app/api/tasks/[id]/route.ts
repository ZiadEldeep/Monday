// app/api/tasks/[id]/route.ts

import { Task } from '@/lib/models/task.models';
import { connectDB } from '@/mongoose';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  await connectDB(); // Connect to the database
  const { id } = params; // Extract task ID from parameters
  const { title, description, status, dueDate } = await req.json(); // Parse request body

  try {
    // Find and update the task by its ID
    const task = await Task.findByIdAndUpdate(
      id,
      {
        title,
        description,
        status,
        dueDate,
      },
      { new: true, runValidators: true } // Return the updated task and validate
    );

    // If no task found, return 404
    if (!task) {
      return NextResponse.json(
        { success: false, message: 'Task not found' },
        { status: 404 }
      );
    }

    // Return the updated task with success status
    return NextResponse.json({ success: true, task }, { status: 200 });
  } catch (error: any) {
    // Return a 500 error with error message
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

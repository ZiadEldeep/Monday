// app/api/tasks/[id]/route.ts

import { Task } from '@/lib/models/task.models';
import { connectDB } from '@/mongoose';
import { NextResponse } from 'next/server';


export async function PATCH(req: Request, { params }: any) {
  await connectDB();
  const { id } = params;
  const { title, description, status, dueDate } = await req.json();

  try {
    const task = await Task.findByIdAndUpdate(id, {
      title,
      description,
      status,
      dueDate,
    }, { new: true });

    if (!task) {
      return NextResponse.json({ success: false, message: 'Task not found' });
    }

    return NextResponse.json({ success: true, task });
  } catch (error:any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

// app/api/tasks/route.ts

import { Task } from '@/lib/models/task.models';
import { connectDB } from '@/mongoose';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
  await connectDB();
  const { title, description, assignee, status, dueDate, projectId } = await req.json();

  try {
    const newTask = new Task({
      title,
      description,
      assignee,
      status,
      dueDate,
      projectId,
    });
    await newTask.save();
    return NextResponse.json({ success: true, task: newTask });
  } catch (error:any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

"use server"
import { revalidatePath } from "next/cache";
import { getUserIdFromCookies } from "./auth"; 

export async function createNewBoard(formData: FormData) {
  const userId = getUserIdFromCookies();
  const name = formData.get("boardname") as string;

  if (!userId) throw new Error("User not authenticated");

  const response = await fetch('/api/boards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, userId }),
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || 'Error creating/updating board');
  }

  revalidatePath("/");
}

export async function createTask(formData: FormData) {
  const userId = getUserIdFromCookies();
  const title = formData.get("task") as string;
  const boardId = formData.get("boardId") as string;
  const assignee = formData.get("assignee") as string;
  const dueDate = formData.get("dueDate") as string;

  if (!title.trim()) {
    return;
  }

  const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: name,
      description: 'Some description',
      assignee,
      status: 'To Do',
      dueDate,
      projectId: boardId,
      userId,  // Include userId in the request
    }),
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || 'Error creating task');
  }

  revalidatePath("/");
}

export async function editTask(formData: FormData) {
  const userId = getUserIdFromCookies();
  const newTask = formData.get("newTask") as string;
  const taskId = formData.get("taskId") as string;
  const dueDate = formData.get("dueDate") as string;

  if (!newTask.trim()) {
    return;
  }

  const response = await fetch(`/api/tasks/${taskId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: newTask,
      description: 'Updated description',
      status: 'In Progress',
      dueDate,
      userId,  // Include userId in the request
    }),
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || 'Error updating task');
  }

  revalidatePath("/");
}

export async function deleteTask(formData: FormData) {
  const userId = getUserIdFromCookies();
  const taskId = formData.get("taskId") as string;

  const response = await fetch(`/api/tasks/${taskId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,  // Include userId in the request
    }),
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || 'Error deleting task');
  }

  revalidatePath("/");
}

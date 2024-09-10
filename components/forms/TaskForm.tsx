import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface TaskFormInputs {
  title: string;
  description: string;
  dueDate: string;
}

export default function TaskForm() {
  const { register, handleSubmit, reset } = useForm<TaskFormInputs>();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: TaskFormInputs) => {
    try {
      const response = await axios.post('/api/tasks', data);
      if (response.data.success) {
        reset();
        // You can add more logic to update UI or navigate
      }
    } catch (err) {
      setError('Failed to create task');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title', { required: true })} placeholder="Task Title" />
      <textarea {...register('description', { required: true })} placeholder="Task Description" />
      <input type="date" {...register('dueDate')} placeholder="Due Date" />
      {error && <p>{error}</p>}
      <button type="submit">Create Task</button>
    </form>
  );
}

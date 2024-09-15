import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { TaskSchema, taskSchema } from '@/lib/validation/tasks';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskSchema>({
    resolver: zodResolver(taskSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: TaskSchema) => {
    try {
      setLoading(true);
      toast.info('Creating task...', { autoClose: 1000 });

      const response = await axios.post('/api/tasks', data);

      if (response.data.success) {
        reset();
        toast.success('Task created successfully!', { autoClose: 3000 });
        // Add more logic to update UI or navigate if needed
      } else {
        toast.error('Failed to create task.');
      }
    } catch (err) {
      toast.error('Failed to create task.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('title')} placeholder="Task Title" />
        {errors.title && <p>{errors.title.message}</p>}

        <textarea {...register('description')} placeholder="Task Description" />
        {errors.description && <p>{errors.description.message}</p>}

        <input type="date" {...register('dueDate')} />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Create Task'}
        </button>
      </form>
    </>
  );
};

export default TaskForm;

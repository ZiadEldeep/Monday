export type Task = {
    _id: string;
    title: string;
    description: string;
    dueDate?: string;
    status: 'To Do' | 'In Progress' | 'Completed';
  };
  
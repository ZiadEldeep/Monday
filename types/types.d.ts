export interface Task {
  _id: string;
  status: string;
  title: string;
  description: string,
  dueDate: Date,
  userId:string,
}

export interface BoardTypes {
  tasks: Task[];
  _id: string;
  name: string
}
// types/types.ts

export interface ColumnTypes {
  id: string;      // Unique identifier for the column
  title: string;   // The title of the column (e.g., "Todo", "In Progress", "Completed")
}

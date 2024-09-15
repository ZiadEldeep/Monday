import { cookies } from 'next/headers';
import { KanbanBoard } from '@/lib/models/kanbanBoard.model'; // Assuming KanbanBoard is the Mongoose model
import { connectDB } from '@/mongoose'; // Import your MongoDB connection utility

// Function to retrieve userId from cookies and get board ID using Mongoose
export const getBoardIdForUser = async () => {
  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value; // Assuming the userId is stored in the 'userId' cookie

  if (!userId) {
    throw new Error("User not authenticated");
  }

  // Connect to the MongoDB database
  await connectDB();

  // Fetch the user's Kanban board using Mongoose
  const board = await KanbanBoard.findOne({ userId: userId });

  // Return the board ID if found, otherwise return null
  return board ? board._id : null;
};

// lib/slices/taskSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    id: string;
    title: string;
}

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        // Add more reducers as needed
    },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;

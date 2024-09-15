// Board.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DropResult, DragDropContext } from "@hello-pangea/dnd";
import { useRouter } from "next/navigation";
import { Task, BoardTypes } from "@/types/types";
import { SyncLoader } from "react-spinners";
import { FaPlus } from "react-icons/fa";
import { createTask } from "@/lib/actions/boardActions";
import Modal from "../ui/Modal";
import Column from "./Column";

const Board: React.FC<{ board: BoardTypes | null }> = ({ board }) => {
  const [tasks, setTask] = useState<Task[] | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [isCreate, setIsCreate] = useState(false);

  useEffect(() => {
    if (board) {
      setTask(board.tasks);
      setLoading(false);
    } else {
      // router.push("/onboarding");
    }
  }, [board]);

  const openModal = () => {
    setIsCreate(true);
  };

  const closeModal = () => {
    setIsCreate(false);
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const draggedTask = tasks!.find(
      (task) => task._id === draggableId
    );

    let updatedStatus: string;

    switch (destination.droppableId) {
      case "todo":
        updatedStatus = "TODO";
        break;
      case "inProgress":
        updatedStatus = "IN_PROGRESS";
        break;
      case "completed":
        updatedStatus = "completed";
        break;
      default:
        updatedStatus = draggedTask!.status;
    }

    try {
      const updatedTask =  axios.patch(`/api/tasks/${draggableId}`, {
        status: updatedStatus,
      });
      
    } catch (error) {
      console.log(error);
    }

    const updatedTask = tasks!.map((task) => {
      if (task._id === draggableId) {
        return {
          ...task,
          status: updatedStatus,
        };
      }
      return task;
    });

    setTask(updatedTask);
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <SyncLoader color="#fff" />
      </div>
    );
  }
  const removeColumn = (columnId: string) => {
        console.log(`Removing column with id: ${columnId}`);
        // Implement your remove column logic here, e.g., update state, API call, etc.
    };
  return (
    <div className="dark:bg-gray-900 py-10 relative h-screen">
      <h1 className="font-bold text-center mb-10 text-3xl">
        {board!.name}
      </h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid md:grid-cols-3 max-md:items-center w-[90%] max-w-[1500px] mx-auto md:gap-5 gap-10">
          <button
            className="bg-gray-700 rounded-full hover:bg-gray-600 text-white font-bold p-4 absolute right-10 bottom-10"
            onClick={openModal}
          >
            <FaPlus />
          </button>
          {isCreate && (
            <Modal
              closeModal={closeModal}
              title="Create New Task"
              isCreate={isCreate}
              action={createTask}
              value={board!._id}
            />
          )}
          <Column
            title="Todo"
            tasks={tasks!.filter(
              (task) => task.status === "TODO"
            )}
            droppableId="todo"
            boardId={board!._id}
            removeColumn={removeColumn}
            />
          <Column
            title="In Progress"
            tasks={tasks!.filter(
              (task) => task.status === "IN_PROGRESS"
            )}
            boardId={board!._id}
            removeColumn={removeColumn}
            droppableId="inProgress"
            />
          <Column
            title="Completed"
            removeColumn={removeColumn}
            tasks={tasks!.filter(
              (task) => task.status === "completed"
            )}
            boardId={board!._id}
            droppableId="completed"
          />
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;

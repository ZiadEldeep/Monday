import { Droppable, Draggable } from "@hello-pangea/dnd";
import { LuDot } from "react-icons/lu";
import { useState } from "react";
import Modal from "../ui/Modal";
import { deleteTask, editTask, createTask } from "@/lib/actions/boardActions"; 
import { Task } from "@/types/types";
import { Tooltip } from "antd"; 
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons'; 
import TaskDialog from "./TaskDialog";

interface ColumnProps {
  title: string;
  tasks: Task[];
  droppableId: string;
  removeColumn: (columnId: string) => void;
  boardId: string;
}

const Column: React.FC<ColumnProps> = ({
  title,
  tasks,
  droppableId,
  removeColumn,
  boardId, 
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState(""); 
  const [newTaskAssignee, setNewTaskAssignee] = useState(""); 
  const [newTaskDueDate, setNewTaskDueDate] = useState("");
  
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const openDeleteModal = (taskId: string) => {
    setIsDelete(true);
    setTaskId(taskId);
  };

  const closeDeleteModal = () => {
    setIsDelete(false);
    setTaskId(null);
  };

  const openEditModal = (taskId: string) => {
    setIsEdit(true);
    setTaskId(taskId);
  };

  const closeEditModal = () => {
    setIsEdit(false);
    setTaskId(null);
  };

  const openAddModal = () => {
    setIsAdd(true);
  };

  const closeAddModal = () => {
    setIsAdd(false);
    setNewTaskTitle(""); // Clear the input field
    setNewTaskAssignee(""); // Clear assignee
    setNewTaskDueDate(""); // Clear due date
  };

  const confirmRemoveColumn = () => {
    removeColumn(droppableId); // Call remove function
    setIsRemove(false);
  };

  const handleAddTask = async () => {
    const formData = new FormData();
    formData.append("task", newTaskTitle);
    formData.append("boardId", boardId);
    formData.append("assignee", newTaskAssignee);
    formData.append("dueDate", newTaskDueDate); 
    await createTask(formData);
    closeAddModal();
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task); // Set the selected task
    setIsTaskDialogOpen(true); // Open the task details modal
  };

  const closeTaskDialog = () => {
    setIsTaskDialogOpen(false);
    setSelectedTask(null);
  };

  const getTaskColor = (status: string) => {
    switch (status) {
      case "TODO":
        return "border-blue-500 text-blue-500 hover:bg-blue-100";
        case "completed":
          return "border-green-500 text-green-500 hover:bg-green-100";
          case "IN_PROGRESS":
            return "border-yellow-500 text-yellow-500 hover:bg-yellow-100";
            default:
              return "border-gray-500 text-gray-500 hover:bg-gray-100";
            }
          };
          
          const getHeaderColor = (type: string) => {
            switch (type) {
              case "todo":

                return "bg-blue-500"; 
                case "completed":

                  return "bg-green-500"; 
                  case "inProgress":

        return "bg-yellow-500"; 
      default:
        return "bg-gray-700"; 
    }
  };
  const getHeaderColor2 = (type: string) => {
    switch (type) {
      case "todo":
        return "border-blue-500 text-blue-500 hover:bg-blue-100";

        case "completed":
          return "border-green-500 text-green-500 hover:bg-green-100";
         
          case "inProgress":
return "border-yellow-500 text-yellow-500 hover:bg-yellow-100";

default:
return "bg-gray-700"; 
}
};
  return (
    <div className="flex-1">
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className=" h-[50vh] overflow-auto bg-[#f6f7fb] rounded-lg "
          >
            {/* Start header */}
            <div 
              className={`flex text-white gap-1 justify-between p-4 items-center mb-4 dark:text-white ${getHeaderColor(droppableId)}`}
              onMouseEnter={() => setHoverIndex(-1)} // Set hover index when mouse enters header
              onMouseLeave={() => setHoverIndex(null)} // Reset hover index when mouse leaves header
            >
              <div className="flex">
                <h2 className="text-sm font-semibold uppercase">{title}</h2>
                <LuDot />
              </div>
              <div className="flex gap-6">
                {hoverIndex === -1 && ( // Show icon only when header is hovered
                  <Tooltip title="Add Task">
                    <button
                      className="ml-2 text-xs text-white"
                      onClick={openAddModal}
                    >
                      <PlusCircleOutlined />
                    </button>
                  </Tooltip>
                )}
              </div>
            </div>
            {/* End header */}
            <div className="p-4">

            {tasks.map((task, index) => (
              <Draggable key={task._id} draggableId={task._id} index={index}>
                {(provided) => (
                  <div
                  className={`border-2 bg-white ${getTaskColor(task.status)} rounded-lg p-3 mb-3 flex flex-col justify-between cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-lg`}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={() => handleTaskClick(task)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">{task.title}</span>
                      {hoverIndex === index && (
                        <div className="flex gap-5">
                          <Tooltip title="Edit Task">
                            <span
                              className="text-xs mt-1 cursor-pointer"
                              onClick={(e) => { e.stopPropagation(); openEditModal(task._id); }}
                              >
                              <EditOutlined />
                            </span>
                          </Tooltip>
                          <Tooltip title="Delete Task">
                            <span
                              className="text-xs mt-1 cursor-pointer"
                              onClick={(e) => { e.stopPropagation(); openDeleteModal(task._id); }}
                              >
                              <DeleteOutlined />
                            </span>
                          </Tooltip>
                        </div>
                      )}
                    </div>

                    <p className="text-sm mt-1">
                      {task.description.length > 50
                        ? `${task.description.substring(0, 50)}...`
                        : task.description}
                    </p>

                    <p className="text-xs text-gray-400 mt-2">
                      Due Date: {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        </div>
        )}
      </Droppable>

{/* Task Details Modal */}
{isTaskDialogOpen && selectedTask && (
  <TaskDialog
  taskData={{
    setIsModalOpen: setIsTaskDialogOpen,
    taskName: selectedTask.title,
    taskOwner: selectedTask.userId,
    taskStatus: selectedTask.status,
    dueDate: selectedTask.dueDate,
  }}
  />
)}

{isEdit && (
  <Modal
  closeModal={closeEditModal}
  isEdit={isEdit}
  value={taskId!}
  action={editTask}
  title="Edit Task"
  color={{ bgColor: getHeaderColor2(droppableId), textColor: "" }}
  />
)}
{isDelete && (
  <Modal
  closeModal={closeDeleteModal}
  title="Are you sure you want to delete this task?"
  value={taskId!}
  action={deleteTask}
    color={{ bgColor: getHeaderColor2(droppableId), textColor: "" }}
  />
)}

{isRemove && (
  <Modal
  closeModal={() => setIsRemove(false)}
  title="Are you sure you want to remove this column?"
  value={droppableId}
  action={async () => { confirmRemoveColumn(); }}
  color={{ bgColor: getHeaderColor2(droppableId), textColor: "" }}
  />
)}
{isAdd && (
  <Modal
  closeModal={closeAddModal}
  isCreate
  title="Add New Task"
  action={handleAddTask}
  isEdit={false}
  value="" 
  color={{ bgColor: getHeaderColor2(droppableId), textColor: "" }}
  />
)}
</div>
);
};

export default Column;

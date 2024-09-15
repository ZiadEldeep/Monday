import Input from "../ui/Input"; // Assuming you have an Input component
import Button from "../ui/Button2"; // Assuming you have a Button component
import toast from "react-hot-toast";
import React, { useState } from "react";

interface ModalProps {
  isCreate?: boolean;
  isDelete?: boolean;
  isEdit?: boolean;
  value: string;
  action: (formData: FormData) => Promise<void>;
  title: string;
  closeModal: () => void;
  confirmAction?: () => void;
  color?: { bgColor?: string; textColor?: string }; // New color prop
}

const Modal: React.FC<ModalProps> = ({
  closeModal,
  title,
  action,
  value,
  isCreate,
  isEdit,
  isDelete,
  color = { bgColor: "bg-gray-900", textColor: "text-white" }, // Default colors
}) => {
  const [loading, setLoading] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState(""); // Added description
  const [newTaskAssignee, setNewTaskAssignee] = useState("");
  const [newTaskDueDate, setNewTaskDueDate] = useState("");

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    if (isCreate) {
      formData.append("title", newTaskTitle); // Changed to "title"
      formData.append("description", newTaskDescription); // Added description
      formData.append("assignee", newTaskAssignee);
      formData.append("dueDate", newTaskDueDate);
      formData.append("projectId", value); // Assuming value is the projectId
    } else if (isEdit) {
      formData.append("taskId", value); // Assuming value is the taskId for editing
      formData.append("title", newTaskTitle);
      formData.append("description", newTaskDescription); // Include description for editing
      // Add other fields as needed for editing
    }

    try {
      await action(formData);
      if (isCreate) {
        toast.success("New Task Created");
      } else if (isEdit) {
        toast.success("Task Has Been Updated");
      } else if (isDelete) {
        toast.success("Task has been deleted");
      }
      closeModal();
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50"
      onClick={closeModal}
    >
      <div
        className={`${color.bgColor} border-2 bg-white rounded-lg p-6 ${color.textColor}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="flex justify-center">
          <form onSubmit={submitHandler}>
          {isCreate && (
              <>
                <input
                  type="text"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="w-full p-2 border text-black rounded mb-2"
                  placeholder="Enter task title"
                  required
                />
                <textarea
                  value={newTaskDescription}
                  onChange={(e) => setNewTaskDescription(e.target.value)}
                  className="w-full p-2 border text-black rounded mb-2"
                  placeholder="Enter task description"
                  required
                />
                <input
                  type="text"
                  value={newTaskAssignee}
                  onChange={(e) => setNewTaskAssignee(e.target.value)}
                  className="w-full p-2 border text-black rounded mb-2"
                  placeholder="Enter assignee"
                  required
                />
                <input
                  type="date"
                  value={newTaskDueDate}
                  onChange={(e) => setNewTaskDueDate(e.target.value)}
                  className="w-full p-2 border text-black rounded mb-2"
                  required
                />
                <input type="hidden" value={value} name="projectId" />
              </>
            )}
            <div className="mt-5 flex gap-5">
              <Button
                confirmButton
                text={loading ? "Processing..." : "Confirm"}
                type="submit"
                disabled={loading}
              />
              <Button text="Cancel" onClick={closeModal} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

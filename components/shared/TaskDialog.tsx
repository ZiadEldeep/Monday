// components/TaskDialog.tsx
import { Modal, Tooltip, Button, Input, Select, DatePicker, message } from 'antd';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FlagOutlined } from '@ant-design/icons';

// List of inappropriate words for validation
const inappropriateWords = ['spam', 'abuse', 'harassment'];

const validateInput = (input: string) => {
  for (let word of inappropriateWords) {
    if (input.toLowerCase().includes(word)) {
      return false;
    }
  }
  return true;
};

interface TaskDialogProps {
  taskData: {
    taskName?: string;
    taskOwner?: string;
    taskStatus?: string;
    dueDate?: Date;
    setIsModalOpen:(is:boolean)=>void;
  };
}

const TaskDialog = ({ taskData }: TaskDialogProps) => {

  const [taskName, setTaskName] = useState(taskData?.taskName || 'Default Task Name');
  const [taskOwner, setTaskOwner] = useState(taskData?.taskOwner || 'user1');
  const [taskStatus, setTaskStatus] = useState(taskData?.taskStatus || 'todo');
  const [dueDate, setDueDate] = useState<Date|null>(taskData?.dueDate || null);

  
  const handleOk = () => {
    if (!validateInput(taskName)) {
      message.error('Task name contains inappropriate content.');
      return;
    }

    // After validation, send task data
    const taskParams = {
      taskName,
      taskOwner,
      taskStatus,
      dueDate,
    };

    console.log('Task Data:', taskParams); // You can send this to the backend or use it in params

    message.success('Task created successfully!');
    taskData.setIsModalOpen(false);
  };

  const handleCancel = () => {
    taskData.setIsModalOpen(false);
  };

  const handleReport = () => {
    message.info('The task has been flagged for review.');
  };



  return (
    <>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <Modal
          title="New Task"
          open={true}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="report" type="dashed" danger onClick={handleReport}>
              <FlagOutlined /> Report Task
            </Button>,
            <Button key="cancel" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
              Submit
            </Button>,
          ]}
        >
          <div>
            <Tooltip title="Enter task name. Avoid inappropriate language." placement="top">
              <Input
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </Tooltip>
          </div>

          <div style={{ marginTop: 16 }}>
            <Tooltip title="Assign Owner" placement="top">
              <Select
                placeholder="Owner"
                style={{ width: '100%' }}
                value={taskOwner}
                onChange={(value) => setTaskOwner(value)}
              >
                <Select.Option value="user1">User 1</Select.Option>
                <Select.Option value="user2">User 2</Select.Option>
              </Select>
            </Tooltip>
          </div>

          <div style={{ marginTop: 16 }}>
            <Tooltip title="Set Task Status" placement="top">
              <Select
                placeholder="Status"
                style={{ width: '100%' }}
                value={taskStatus}
                onChange={(value) => setTaskStatus(value)}
              >
                <Select.Option value="todo">To-Do</Select.Option>
                <Select.Option value="in-progress">In Progress</Select.Option>
                <Select.Option value="completed">Completed</Select.Option>
              </Select>
            </Tooltip>
          </div>

          <div style={{ marginTop: 16 }}>
            <Tooltip title="Select Due Date" placement="top">
              {/* <DatePicker
                style={{ width: '100%' }}
                value={dueDate ? dueDate : null}
                onChange={(date, dateString) => setDueDate(date)}
              /> */}
            </Tooltip>
          </div>
        </Modal>
      </motion.div>
    </>
  );
};

export default TaskDialog;

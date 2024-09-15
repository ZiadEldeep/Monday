import React, { useState } from 'react';
import { Table, Tooltip, Input, Form, DatePicker } from 'antd';
import { motion } from 'framer-motion';
import type { Key } from 'antd/es/table/interface';

interface Task {
  key: string;
  task: string;
  owner: string;
  status: string;
  dueDate: string;
  priority: string;
  notes: string;
  budget: string;
  files: string;
  timeline: string;
  lastUpdated: string;
}

const data: Task[] = [
  {
    key: '1',
    task: 'New Task',
    owner: 'User A',
    status: 'Working on it',
    dueDate: '10 Sep',
    priority: 'Low',
    notes: 'Action items',
    budget: '$500',
    files: 'File1.txt',
    timeline: '1 week',
    lastUpdated: '09 Sep',
  },
  {
    key: '2',
    task: 'Meeting Prep',
    owner: 'User B',
    status: 'Completed',
    dueDate: '08 Sep',
    priority: 'High',
    notes: 'Meeting notes',
    budget: '$200',
    files: 'MeetingNotes.docx',
    timeline: '3 days',
    lastUpdated: '07 Sep',
  },
];

const TaskTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [editCells, setEditCells] = useState<{ [key: string]: string | null }>({});
  const [form] = Form.useForm();

  const columns = [
    {
      title: 'Task',
      dataIndex: 'task',
      key: 'task',
      fixed: 'left' as const,
      render: (_: any, record: Task) => renderCell(record.key, 'task', record.task),
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
      render: (_: any, record: Task) => renderCell(record.key, 'owner', record.owner),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_: any, record: Task) => renderCell(record.key, 'status', record.status),
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      render: (_: any, record: Task) => renderCell(record.key, 'dueDate', record.dueDate),
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (_: any, record: Task) => renderCell(record.key, 'priority', record.priority),
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
      key: 'notes',
      render: (_: any, record: Task) => renderCell(record.key, 'notes', record.notes),
    },
    {
      title: 'Budget',
      dataIndex: 'budget',
      key: 'budget',
      render: (_: any, record: Task) => renderCell(record.key, 'budget', record.budget),
    },
    {
      title: 'Files',
      dataIndex: 'files',
      key: 'files',
      render: (_: any, record: Task) => renderCell(record.key, 'files', record.files),
    },
    {
      title: 'Timeline',
      dataIndex: 'timeline',
      key: 'timeline',
      render: (_: any, record: Task) => renderCell(record.key, 'timeline', record.timeline),
    },
    {
      title: 'Last Updated',
      dataIndex: 'lastUpdated',
      key: 'lastUpdated',
      render: (_: any, record: Task) => renderCell(record.key, 'lastUpdated', record.lastUpdated),
    },
  ];

  const renderCell = (key: string, dataIndex: string, value: string) => {
    const isEditing = editCells[key] === dataIndex;

    const handleClick = () => {
      setEditCells(prev => ({ ...prev, [key]: isEditing ? null : dataIndex }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | any>) => {
      const newValue = e.target.value;
      // Save the new value logic here, e.g., update your data source
      setEditCells(prev => ({ ...prev, [key]: null })); // Exit edit mode
    };
  
    return (
      <div onClick={handleClick}>
        {isEditing ? (
          <Input defaultValue={value} onBlur={handleBlur} autoFocus />
        ) : (
          <Tooltip title={value}>
            <span>{value}</span>
          </Tooltip>
        )}
      </div>
    );
  };
  return (
    <motion.div>
      <Form form={form}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          rowKey="key"
          rowSelection={{
            selectedRowKeys,
            onChange: (selectedRowKeys: Key[]) => setSelectedRowKeys(selectedRowKeys as string[]),
          }}
        />
      </Form>
    </motion.div>
  );
};

export default TaskTable;

"use client";
import React from 'react';
import { Tooltip, Button, Dropdown, Menu } from 'antd';
import { motion } from 'framer-motion';
import { BellOutlined, UserOutlined, AppstoreOutlined,SearchOutlined ,UserAddOutlined , QuestionCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import {toast} from 'react-toastify';

const AppHeader: React.FC = () => {
  const router = useRouter();

  // Function to handle logout
  const handleLogout = async () => {
    const loadingToastId = toast.loading("Logging out...");

    try {
      const res = await fetch("/api/logout", {
        method: "POST",
      });

      if (res.ok) {
        toast.update(loadingToastId, {
          render: "Logout successful!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        router.push("/login"); // Redirect to the login page
      } else {
        throw new Error("Failed to log out. Please try again.");
      }
    } catch (error: any) {
      toast.update(loadingToastId, {
        render: error.message || "Failed to log out. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  // Menu for dropdown
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex sticky left-0 top-0 z-[1000]  justify-between items-center bg-[#f6f7fb] p-4">
      <div className="flex items-center">
        <span className="font-bold">monday</span> work management
      </div>
      <div className="flex items-center">
        <Tooltip title="Notifications">
          <motion.div whileHover={{ scale: 1.1 }} className="mx-2">
            <BellOutlined className="text-xl" />
          </motion.div>
        </Tooltip>
        <Tooltip title="invite members">
          <motion.div whileHover={{ scale: 1.1 }} className="mx-2">
            <UserAddOutlined className="text-xl" />
          </motion.div>
        </Tooltip>
        <Tooltip title="Search">
          <motion.div whileHover={{ scale: 1.1 }} className="mx-2">
            <SearchOutlined  className="text-xl" />
          </motion.div>
        </Tooltip>
        <Tooltip title="Help">
          <motion.div whileHover={{ scale: 1.1 }} className="mx-2">
            <QuestionCircleOutlined className="text-xl" />
          </motion.div>
        </Tooltip>
        <Tooltip title="Apps">
          <motion.div whileHover={{ scale: 1.1 }} className="mx-2">
            <AppstoreOutlined className="text-xl" />
          </motion.div>
        </Tooltip>
        <Tooltip title="Profile">
          <Dropdown overlay={menu} trigger={['click']}>
            <motion.div whileHover={{ scale: 1.1 }} className="mx-2 cursor-pointer">
              <UserOutlined className="text-xl" />
            </motion.div>
          </Dropdown>
        </Tooltip>
      </div>
    </div>
  );
};

export default AppHeader;

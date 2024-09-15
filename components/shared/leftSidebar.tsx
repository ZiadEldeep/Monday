"use client"
import React from 'react';
import { Menu, Tooltip } from 'antd';
import { motion } from 'framer-motion';
import { HomeOutlined, StarOutlined, AppstoreOutlined } from '@ant-design/icons';

const LeftSidebar: React.FC = () => {
  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      style={{ width: 250 }}
      className="sticky left-0 top-0 pt-16 z-20  h-screen  "
    >
      <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item key="1">
          <Tooltip title="Home" placement="right">
            <HomeOutlined />
            <span>Home</span>
          </Tooltip>
        </Menu.Item>
        <Menu.Item key="2">
          <Tooltip title="My Work" placement="right">
            <AppstoreOutlined />
            <span>My Work</span>
          </Tooltip>
        </Menu.Item>
        <Menu.Item key="3">
          <Tooltip title="Favorites" placement="right">
            <StarOutlined />
            <span>Favorites</span>
          </Tooltip>
        </Menu.Item>
      </Menu>
    </motion.div>
  );
};


export default LeftSidebar;
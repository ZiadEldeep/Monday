'use client';

import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { HomeOutlined, SolutionOutlined, AppstoreAddOutlined, InfoCircleOutlined, CaretDownOutlined, ProjectOutlined, CustomerServiceOutlined, CodeOutlined, LaptopOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Header className="flex items-center justify-between bg-white">
      <div className="logo">
        <Image
          alt="Logo"
          src="/images/monday-logo.png"
          className="h-8"
           width={100}
           height={32}
        />
      </div>
      <Menu mode="horizontal" theme="light" className="flex-grow">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.SubMenu 
          key="products" 
          title={
            <span>
              <AppstoreAddOutlined />
              Products <CaretDownOutlined />
            </span>
          } 
          className="group"
        >
          <div className="grid grid-cols-2 gap-4 p-4 bg-white shadow-lg rounded-md">
            <Menu.Item key="work-management" className="hover:bg-gray-100 transition duration-200">
              <Link href="/work-management" className=" p-2 flex items-center">
                <ProjectOutlined className="mr-2" />
                monday work management
              </Link>
              <p className="text-xs text-gray-500">For projects & tasks</p>
            </Menu.Item>
            <Menu.Item key="crm" className="hover:bg-gray-100 transition duration-200">
              <Link href="/crm" className=" p-2 flex items-center">
                <CustomerServiceOutlined className="mr-2" />
                monday CRM
              </Link>
              <p className="text-xs text-gray-500">For customer-facing teams</p>
            </Menu.Item>
            <Menu.Item key="dev" className="hover:bg-gray-100 transition duration-200">
              <Link href="/dev" className=" p-2 flex items-center">
                <CodeOutlined className="mr-2" />
                monday dev
              </Link>
              <p className="text-xs text-gray-500">For product & dev teams</p>
            </Menu.Item>
            <Menu.Item key="service" className="hover:bg-gray-100 transition duration-200">
              <Link href="/w/service" className=" p-2 flex items-center">
                <LaptopOutlined className="mr-2" />
                monday service
              </Link>
              <p className="text-xs text-gray-500">For IT & support</p>
            </Menu.Item>
          </div>
        </Menu.SubMenu>
        <Menu.Item key="solutions" icon={<SolutionOutlined />}>
          <Link href="/solutions">Solutions</Link>
        </Menu.Item>
        <Menu.Item key="resources" icon={<InfoCircleOutlined />}>
          <Link href="/resources">Resources</Link>
        </Menu.Item>
      </Menu>
      <div>
        <Button type="link" href="/pricing">Pricing</Button>
        <Button type="link" href="/login">Log in</Button>
        <Button type="primary" href="/contact-us" className="ml-2">
          Contact Sales
        </Button>
        <Button type="primary" href="/register" className="ml-2">
          Get Started
        </Button>
      </div>
    </Header>
  );
};

export default Navbar;

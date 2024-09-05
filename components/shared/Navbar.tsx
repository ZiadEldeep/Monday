'use client';
import { CaretRightOutlined } from "@ant-design/icons";
import React from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  HomeOutlined,
  SolutionOutlined,
  AppstoreAddOutlined,
  InfoCircleOutlined,
  CaretDownOutlined,
  ProjectOutlined,
  CustomerServiceOutlined,
  CodeOutlined,
  LaptopOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';

const { Header } = Layout;

const products = [
  {
    key: 'work-management',
    href: '/work-management',
    icon: <ProjectOutlined />,
    title: 'monday work management',
    description: 'For projects & tasks',
  },
  {
    key: 'crm',
    href: '/crm',
    icon: <CustomerServiceOutlined />,
    title: 'monday CRM',
    description: 'For customer-facing teams',
  },
  {
    key: 'dev',
    href: '/dev',
    icon: <CodeOutlined />,
    title: 'monday dev',
    description: 'For product & dev teams',
  },
  {
    key: 'service',
    href: '/w/service',
    icon: <LaptopOutlined />,
    title: 'monday service',
    description: 'For IT & support',
  },
];

const ProductSubMenu: React.FC = () => (
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
      {products.map((product) => (
        <Menu.Item key={product.key} className="hover:bg-gray-100 transition duration-200">
          <Link href={product.href} className="p-2 flex hover:text-custom-500 items-center">
            {product.icon}
            {product.title}
          </Link>
          <p className="text-xs text-gray-500">{product.description}</p>
        </Menu.Item>
      ))}
    </div>
  </Menu.SubMenu>
);

const Navbar: React.FC = () => {
  return (
    <Header className="flex items-center justify-between leading-10 bg-white">
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
          <Link href="/" className={"hover:text-custom-500"}>Home</Link>
        </Menu.Item>
        <ProductSubMenu />
        <Menu.Item key="solutions" icon={<SolutionOutlined />}>
          <Link href="/solutions" className={"hover:text-custom-500"}>Solutions</Link>
        </Menu.Item>
        <Menu.Item key="resources" icon={<InfoCircleOutlined />}>
          <Link href="/resources" className={"hover:text-custom-500"}>Resources</Link>
        </Menu.Item>
      </Menu>
      <div className="">

      <div className="flex gap-3 items-center h-auto">
        <Link  href="/pricing" className={"hover:text-custom-500"}>Pricing</Link>
        <Link  href="/login" className={"hover:text-custom-500"}>Log in</Link>
        <Link  href="/contact-us" className="flex h-auto  bg-custom-500/90  hover:bg-custom-500 hover:text-white text-white px-4  rounded-xl  hover:scale-105">
          Contact Sales
        </Link>
        <Link
                  href={"/register"}
                    className=" flex pr-3 hover:gap-2 hover:pr-1   ladda-button signup-button hover:text-white bg-custom-500/90 hover:bg-custom-500 text-white px-4 rounded-xl transition duration-200 ease-in-out transform hover:scale-105"
                    >
                    Get Started
                    <CaretRightOutlined />
                  </Link>
      </div>
      </div>
    </Header>
  );
};

export default Navbar;

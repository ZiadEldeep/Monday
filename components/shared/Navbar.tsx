'use client';

import React, { useMemo, useCallback } from 'react';
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

interface Product {
  key: string;
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const products: Product[] = [
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

const ProductSubMenu: React.FC = React.memo(() => {
  const renderMenuItems = useCallback(
    () =>
      products.map((product) => (
        <Menu.Item key={product.key} className="hover:bg-gray-100 transition duration-200">
          <Link href={product.href} className="p-2 flex items-center">
            {product.icon}
            {product.title}
          </Link>
          <p className="text-xs text-gray-500">{product.description}</p>
        </Menu.Item>
      )),
    []
  );

  return (
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
        {renderMenuItems()}
      </div>
    </Menu.SubMenu>
  );
});

const Navbar: React.FC = () => {
  const menuItems = useMemo(
    () => (
      <>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link href="/">Home</Link>
        </Menu.Item>
        <ProductSubMenu />
        <Menu.Item key="solutions" icon={<SolutionOutlined />}>
          <Link href="/solutions">Solutions</Link>
        </Menu.Item>
        <Menu.Item key="resources" icon={<InfoCircleOutlined />}>
          <Link href="/resources">Resources</Link>
        </Menu.Item>
      </>
    ),
    []
  );

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
        {menuItems}
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

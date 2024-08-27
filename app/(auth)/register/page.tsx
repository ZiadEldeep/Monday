'use client';

import { Form, Input, Button, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const { Title } = Typography;

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async (values: { name: string; email: string; password: string }) => {
    setError(null);
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      router.push('/login');
    } else {
      const data = await res.json();
      setError(data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Title level={2} className="mb-4">Register</Title>
      {error && <p className="text-red-500">{error}</p>}
      <Form onFinish={handleRegister} layout="vertical">
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

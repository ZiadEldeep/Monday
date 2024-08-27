'use client';

import { Form, Input, Button, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const { Title } = Typography;

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (values: { email: string; password: string }) => {
    setError(null);

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      router.push('/dashboard');
    } else {
      const data = await res.json();
      setError(data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Title level={2} className="mb-4">Login</Title>
      {error && <p className="text-red-500">{error}</p>}
      <Form onFinish={handleLogin} layout="vertical">
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

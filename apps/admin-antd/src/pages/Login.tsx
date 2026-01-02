import { Button, Card, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const onFinish = () => {
    navigate("/needs");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Card title="Admin Login" style={{ width: 320 }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Username" name="username" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign in
          </Button>
        </Form>
      </Card>
    </div>
  );
}

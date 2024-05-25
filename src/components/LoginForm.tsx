import { Button, Form, Input } from "antd";

export function LoginForm() {
  return (
    <Form layout="vertical" onFinish={(values) => console.info(values)}>
      <Form.Item name="username" label="Username">
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Password">
        <Input.Password />
      </Form.Item>

      <Button htmlType="submit" type="primary">
        Log in
      </Button>
    </Form>
  );
}

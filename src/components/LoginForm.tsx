import { Button, Form, Input } from 'antd'

export function LoginForm() {
  return (
    <Form>
      <Form.Item name="username">
        <Input />
      </Form.Item>

      <Form.Item name="password">
        <Input.Password />
      </Form.Item>

      <Button htmlType='submit' type='primary'>
        Log in
      </Button>
    </Form>
  )
}
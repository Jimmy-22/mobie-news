import { Button, NavBar, Form, Input } from 'antd-mobile'
import styles from './index.module.scss'

const Login = () => {
  return (
    <div className={styles.root}>
      <NavBar></NavBar>
      <div className="login-form">
        <h2 className="title">账号登录</h2>

        <Form>
          <Form.Item className="login-item">
            <Input placeholder="请输入手机号"></Input>
          </Form.Item>
          <Form.Item
            className="login-item"
            extra={<span className="code-extra">发送验证码</span>}
          >
            <Input placeholder="请输入验证码"></Input>
          </Form.Item>
          <Form.Item noStyle>
            <Button
              block
              type="submit"
              color="primary"
              className="login-submit"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login

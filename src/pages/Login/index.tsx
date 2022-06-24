import { Button, NavBar, Form, Input } from 'antd-mobile'
import styles from './index.module.scss'

type LoginForm = {
  mobie: string
  code: string
}

const Login = () => {
  const onFinish = (values: LoginForm) => {
    console.log(values)
  }

  return (
    <div className={styles.root}>
      <NavBar></NavBar>
      <div className="login-form">
        <h2 className="title">账号登录</h2>

        <Form onFinish={onFinish} validateTrigger={['onBlur']}>
          <Form.Item
            className="login-item"
            name="mobile"
            validateTrigger="onBlur"
            rules={[
              { required: true, message: '请输入手机号' },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号格式错误'
              }
            ]}
          >
            <Input placeholder="请输入手机号"></Input>
          </Form.Item>
          <Form.Item
            name="code"
            rules={[{ required: true, message: '请输入验证码' }]}
            validateTrigger="onBlur"
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

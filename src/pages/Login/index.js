import styles from './index.module.scss'
import {
	Layout,
	Row,
	Col,
	Image,
	Card,
	Form,
	Input,
	Checkbox,
	Button,
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useState } from 'react'

const { Header, Footer, Content } = Layout

// 验证
const rules = {
	username: [
		{
			required: true,
			message: '请输入账号!',
		},
	],
	password: [
		{
			required: true,
			message: '请输入密码!',
		},
	],
}

const Login = (props) => {
	const [formData] = useState({
		remember: true,
		username: 'admin',
		password: 123456,
	})

	// 登录
	const toSubmit = (values) => {
		let isBool = true
		for (const [, value] of Object.entries(values)) {
			if (!value) {
				isBool = false
			}
		}
		if (isBool) {
			props.history.replace('/home')
		}
	}

	return (
		<Layout className='layout-wrap'>
			<Header className='header-wrap'>Header</Header>
			<Content className={styles['container']}>
				<Row
					className={styles['row-wrap']}
					gutter={16}
					justify='center'
					align='middle'>
					<Col span={10}>
						<Image
							preview={false}
							src={require('../../assets/image/logo.png').default}
						/>
					</Col>
					<Col span={10}>
						<Card title='登陆' style={{ width: 400 }}>
							<Form size='large' initialValues={formData} onFinish={toSubmit}>
								<Form.Item name='username' rules={rules.username}>
									<Input
										prefix={<UserOutlined className='site-form-item-icon' />}
										placeholder='请输入账号'
									/>
								</Form.Item>
								<Form.Item name='password' rules={rules.password}>
									<Input.Password
										prefix={<LockOutlined className='site-form-item-icon' />}
										placeholder='请输入密码'
									/>
								</Form.Item>
								<Form.Item>
									<div className={styles['online-between']}>
										<Form.Item name='remember' valuePropName='checked' noStyle>
											<Checkbox>记住密码</Checkbox>
										</Form.Item>
										<Button type='text' size='small'>
											找回密码
										</Button>
									</div>
								</Form.Item>
								<Form.Item>
									<Button type='primary' htmlType='submit' block>
										登录
									</Button>
								</Form.Item>
							</Form>
						</Card>
					</Col>
				</Row>
			</Content>
			<Footer className='footer-wrap'>Footer</Footer>
		</Layout>
	)
}

export default Login

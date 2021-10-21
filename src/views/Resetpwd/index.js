import styles from './index.module.scss'
import { Layout, Button, Steps, Form, Input } from 'antd'
import { CloseCircleFilled } from '@ant-design/icons'
import { useEffect, useState } from 'react'

const { Step } = Steps

const { Header, Footer, Content } = Layout

// 步骤内容
const StepList = ['验证手机号', '填写新密码', '重置成功']

const rules = {
	mobile: [{ required: true, min: 11, message: '请输入手机号' }],
	check: [{ required: true, message: '为了您的账户安全，请进行安全校验' }],
}

const Resetpwd = (props) => {
	const [id] = useState(props.match.params.id)
	const [isType, setType] = useState(false)
	const [current, setCurrent] = useState(0)
	const [formData] = useState({
		mobile: null,
	})

	// 返回上一页
	const backHome = () => {
		props.history.goBack()
	}
	// 提交
	const onSubmit = (e) => {
		setCurrent(1)
	}
	// 判断状态
	useEffect(() => {
		setType(id === 'forget')
	}, [id])

	return (
		<Layout className='layout-wrap'>
			<Header className='header-wrap'>
				<div>Header</div>
				<CloseCircleFilled className={styles['icon']} onClick={backHome} />
			</Header>
			<Content className='content-wrap'>
				<div className={styles['container']}>
					{isType && (
						<div className={styles['forget-btn']}>
							<Button type='text' href='/'>
								已有账号？快速登陆&gt;&gt;
							</Button>
						</div>
					)}
					<Steps labelPlacement='vertical' current={current}>
						{StepList.map((item, index) => (
							<Step title={item} key={index} />
						))}
					</Steps>

					<Form
						size='large'
						onFinish={onSubmit}
						className={styles['form-wrap']}
						initialValues={formData}>
						<Form.Item name='mobile' rules={rules.mobile}>
							<Input placeholder='请输入手机号' allowClear />
						</Form.Item>
						<Form.Item>
							<Button type='primary' block htmlType='submit'>
								下一步
							</Button>
						</Form.Item>
					</Form>
				</div>
			</Content>
			<Footer className='footer-wrap'>Footer</Footer>
		</Layout>
	)
}

export default Resetpwd

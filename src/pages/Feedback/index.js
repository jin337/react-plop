import styles from './index.module.scss'
import { useState } from 'react'
import {
	Layout,
	Form,
	Input,
	Button,
	Radio,
	Upload,
	message,
	Image,
	Space,
} from 'antd'
import {
	LoadingOutlined,
	PlusOutlined,
	CloseCircleOutlined,
} from '@ant-design/icons'

const { Header, Footer, Content } = Layout
const { TextArea } = Input

// 验证
const rules = {
	name1: [
		{
			required: true,
			message: '请输入',
		},
	],
	name2: [
		{
			required: true,
			message: '请输入',
		},
	],
	name3: [
		{
			required: true,
			message: '请输入',
		},
	],
}

// 转base64
const getBase64 = (img, callback) => {
	const reader = new FileReader()
	reader.addEventListener('load', () => callback(reader.result))
	reader.readAsDataURL(img)
}

const Feedback = (props) => {
	const [formData] = useState({
		name1: 1,
		name2: null,
		name3: null,
	})
	const [loading, setLoading] = useState(false)
	const [imgUrl, setImgUrl] = useState(null)

	const [form] = Form.useForm()

	// 重置
	const onReset = () => {
		setImgUrl(null)
		form.resetFields()
	}

	// 上传之前
	const beforeUpload = (file) => {
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
		if (!isJpgOrPng) {
			message.error('You can only upload JPG/PNG file!')
		}
		const isLt2M = file.size / 1024 / 1024 < 2
		if (!isLt2M) {
			message.error('Image must smaller than 2MB!')
		}
		return isJpgOrPng && isLt2M
	}
	// 上传监控
	const handleChange = (info) => {
		if (info.file.status === 'uploading') {
			setLoading(true)
			return
		}
		if (info.file.status === 'done') {
			getBase64(info.file.originFileObj, (url) => {
				setLoading(false)
				setImgUrl(url)
			})
		}
	}

	const backHome = () => {
		props.history.replace('/home')
	}

	return (
		<Layout className='layout-wrap'>
			<Header className='header-wrap'>
				<div>Header</div>
				<CloseCircleOutlined className={styles['icon']} onClick={backHome} />
			</Header>
			<Content className='content-wrap'>
				<Form
					className={styles['form-wrap']}
					size='large'
					form={form}
					initialValues={formData}>
					<Form.Item label='类别' name='name1' rules={rules.name1}>
						<Radio.Group>
							<Radio value={1}>A</Radio>
							<Radio value={2}>B</Radio>
							<Radio value={3}>C</Radio>
							<Radio value={4}>D</Radio>
						</Radio.Group>
					</Form.Item>
					<Form.Item label='说明' name='name2' rules={rules.name2}>
						<TextArea rows={3} />
					</Form.Item>
					<Form.Item
						label='图片'
						name='name3'
						rules={rules.name3}
						valuePropName='name3'>
						<Upload
							listType='picture-card'
							showUploadList={false}
							action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
							beforeUpload={beforeUpload}
							onChange={handleChange}>
							{imgUrl ? (
								<Image preview={false} src={imgUrl} />
							) : (
								<div>{loading ? <LoadingOutlined /> : <PlusOutlined />}</div>
							)}
						</Upload>
					</Form.Item>
					<Form.Item
						wrapperCol={{
							offset: 1,
						}}>
						<Space>
							<Button type='primary' htmlType='submit'>
								提交
							</Button>
							<Button htmlType='button' onClick={onReset}>
								重置
							</Button>
						</Space>
					</Form.Item>
				</Form>
			</Content>
			<Footer className='footer-wrap'>Footer</Footer>
		</Layout>
	)
}

export default Feedback

import styles from './index.module.scss'
import React, { useState } from 'react'
import { Layout, Menu, Avatar, Tag, Divider, Space } from 'antd'
import { Route, Link } from 'react-router-dom'

import * as Icons from '@ant-design/icons'
import {
	CloseCircleFilled,
	UserOutlined,
	SettingOutlined,
} from '@ant-design/icons'

// 路由引入
import Edit from '../../pages/User/Edit'
import Resetpwd from '../../pages/User/Resetpwd'
import Feedback from '../../pages/User/Feedback'

const { Header, Content, Sider } = Layout

// 导航列表
const menuList = [
	{
		key: 'edit',
		title: '个人资料',
		icon: 'IdcardFilled',
		path: '/user/edit',
	},
	{
		key: 'resetpwd',
		title: '修改密码',
		icon: 'EditFilled',
		path: '/user/resetpwd',
	},
	{
		key: 'feedback',
		title: '意见反馈',
		icon: 'MailFilled',
		path: '/user/feedback',
	},
]

// 嵌套页面
const Pages = () => {
	return (
		<>
			<Route path='/user/edit' component={Edit} />
			<Route path='/user/resetpwd' component={Resetpwd} />
			<Route path='/user/feedback' component={Feedback} />
		</>
	)
}

// 导航模板
const menuItem = (data) => {
	return data.map((item) => {
		return (
			<Menu.Item
				key={item.key}
				icon={item.icon && React.createElement(Icons[item.icon])}>
				<Link to={item.path}>{item.title}</Link>
			</Menu.Item>
		)
	})
}

const User = (props) => {
	const [current, setCurrent] = useState(props.match.params.id)

	// 返回首页
	const backHome = () => {
		props.history.replace('/home/index')
	}
	// 导航选择
	const handleItem = (e) => {
		setCurrent(e.key)
	}

	return (
		<Layout className='layout-wrap'>
			<Header className='header-wrap'>
				<div>Header</div>
				<CloseCircleFilled className={styles['icon']} onClick={backHome} />
			</Header>
			<Layout className={styles['content-layout']}>
				<Sider className={styles['content-sider']}>
					<div className={styles['user-wrap']}>
						<Avatar
							size={64}
							src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
						/>
						<Tag icon={<UserOutlined />} color='blue'>
							Admin
						</Tag>
					</div>
					<Divider orientation='left'>
						<Space>
							<SettingOutlined />
							<span>个人管理</span>
						</Space>
					</Divider>
					<Menu
						mode='inline'
						className={styles['menu-wrap']}
						selectedKeys={[current]}
						onClick={handleItem}>
						{menuItem(menuList)}
					</Menu>
				</Sider>
				<Content className={styles['content-wrap']}>
					<Pages />
				</Content>
			</Layout>
		</Layout>
	)
}

export default User

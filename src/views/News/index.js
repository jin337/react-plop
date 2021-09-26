import styles from './index.module.scss'
import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import { Layout, Menu, Avatar, Tag, Divider, Space } from 'antd'
import * as Icons from '@ant-design/icons'
import {
	CloseCircleFilled,
	UserOutlined,
	BellOutlined,
} from '@ant-design/icons'

// 路由引入
import Unread from '../../pages/News/Unread'
import Read from '../../pages/News/Read'

const { Header, Content, Sider } = Layout

// 导航列表
const menuList = [
	{
		key: 'unread',
		title: '未读消息',
		icon: 'AlertFilled',
		path: '/news/unread',
	},
	{
		key: 'read',
		title: '已读消息',
		icon: 'BulbFilled',
		path: '/news/read',
	},
]

// 嵌套页面
const Pages = () => {
	return (
		<>
			<Route path='/news/unread' component={Unread} />
			<Route path='/news/read' component={Read} />
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

const System = (props) => {
	const [current, setCurrent] = useState(props.match.params.id)

	// 返回
	const backHome = () => {
		props.history.replace('/home')
	}

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
							<BellOutlined />
							<span>消息管理</span>
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

export default System

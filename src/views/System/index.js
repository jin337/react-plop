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
import Role from '../../pages/System/Role'
import Staff from '../../pages/System/Staff'
import Mechanism from '../../pages/System/Mechanism'
import Building from '../../pages/System/Building'
import Dictionaries from '../../pages/System/Dictionaries'

const { Header, Content, Sider } = Layout

// 导航列表
const menuList = [
	{
		key: 'role',
		title: '角色管理',
		icon: 'IdcardFilled',
		path: '/system/role',
	},
	{
		key: 'staff',
		title: '员工管理',
		icon: 'ScheduleFilled',
		path: '/system/staff',
	},
	{
		key: 'mechanism',
		title: '机构管理',
		icon: 'LayoutFilled',
		path: '/system/mechanism',
	},
	{
		key: 'building',
		title: '大楼管理',
		icon: 'DatabaseFilled',
		path: '/system/building',
	},
	{
		key: 'dictionaries',
		title: '字典管理',
		icon: 'ReadFilled',
		path: '/system/dictionaries',
	},
]

// 嵌套页面
const Pages = () => {
	return (
		<>
			<Route path='/system/role' component={Role} />
			<Route path='/system/staff' component={Staff} />
			<Route path='/system/mechanism' component={Mechanism} />
			<Route path='/system/building' component={Building} />
			<Route path='/system/dictionaries' component={Dictionaries} />
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
							<span>设置管理</span>
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

import styles from './index.module.scss'
import React from 'react'
import { Layout, Menu, Avatar, Tag, Divider, Space } from 'antd'
import * as Icons from '@ant-design/icons'
import {
	CloseCircleFilled,
	UserOutlined,
	SettingOutlined,
} from '@ant-design/icons'
const { Header, Content, Sider } = Layout
const { SubMenu } = Menu

// 导航列表
const menuList = [
	{
		title: '角色管理',
		icon: 'IdcardFilled',
	},
	{
		title: '员工管理',
		icon: 'ScheduleFilled',
	},
	{
		title: '机构管理',
		icon: 'LayoutFilled',
	},
	{
		title: '大楼管理',
		icon: 'DatabaseFilled',
	},
	{
		title: '字典管理',
		icon: 'ReadFilled',
	},
]

// 导航模板
const menuItem = (data) => {
	return data.map((item) => {
		if (!item.children) {
			return (
				<Menu.Item
					key={item.title}
					icon={item.icon && React.createElement(Icons[item.icon])}>
					{item.title}
				</Menu.Item>
			)
		} else {
			return (
				<SubMenu
					key={item.title}
					title={item.title}
					icon={item.icon && React.createElement(Icons[item.icon])}>
					{menuItem(item.children)}
				</SubMenu>
			)
		}
	})
}

const System = (props) => {
	const backHome = () => {
		props.history.replace('/home')
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
					<Menu mode='inline' className={styles['menu-wrap']}>
						{menuItem(menuList)}
					</Menu>
				</Sider>
				<Content className={styles['content-wrap']}>
					<div>content</div>
				</Content>
			</Layout>
		</Layout>
	)
}

export default System

import styles from './index.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import {
	Layout,
	Menu,
	Space,
	Tooltip,
	Row,
	Col,
	Dropdown,
	Badge,
	Avatar,
	Divider,
} from 'antd'

import * as Icons from '@ant-design/icons'
import {
	MailOutlined,
	BellOutlined,
	SettingOutlined,
	UserOutlined,
} from '@ant-design/icons'

const { Header, Content, Sider } = Layout
const { SubMenu } = Menu

// 导航列表
const menuList = [
	{
		title: '首页',
		icon: 'HomeOutlined',
	},
	{
		title: '商品',
		icon: 'AppstoreOutlined',
		children: [
			{
				title: '品类管理',
				icon: 'BarsOutlined',
			},
			{
				title: '商品管理',
				icon: 'ToolOutlined',
			},
		],
	},
	{
		title: '用户管理',
		icon: 'UserOutlined',
	},
	{
		title: '角色管理',
		icon: 'SafetyCertificateOutlined',
	},
	{
		title: '图形图表',
		icon: 'AreaChartOutlined',
		children: [
			{
				title: '柱形图',
				icon: 'BarChartOutlined',
			},
			{
				title: '折线图',
				icon: 'LineChartOutlined',
			},
			{
				title: '饼图',
				icon: 'PieChartOutlined',
			},
		],
	},
]
// 消息列表
const newList = [
	{
		key: 1,
		title: '未读消息',
		icon: 'BulbOutlined',
		path: '',
	},
	{
		key: 2,
		title: '已读消息',
		icon: 'BarsOutlined',
		path: '',
	},
]
// 设置列表
const settingList = [
	{
		title: '角色管理',
		icon: 'UserOutlined',
		dec: '这里是角色管理',
	},
	{
		title: '商品管理',
		icon: 'SkinOutlined',
		dec: '这里是商品管理',
	},
	{
		title: '用户管理',
		icon: 'TeamOutlined',
		dec: '这里是用户管理',
	},
]
// 个人中心列表
const userList = [
	{
		key: 1,
		title: '基础资料',
		path: '/',
	},
	{
		key: 2,
		title: '修改密码',
		path: '/',
	},
	{
		key: 3,
		title: '退出登录',
		path: '/',
	},
]
// 单行下拉导航模板
const menu = (data) => {
	return (
		<Menu>
			{data.map((item) => {
				return (
					<Menu.Item
						key={item.key}
						icon={item.icon && React.createElement(Icons[item.icon])}>
						<Link to={item.path}>
							{item.title}
							{item.dec && <div className={styles['dec']}>{item.dec}</div>}
						</Link>
					</Menu.Item>
				)
			})}
		</Menu>
	)
}
// 多行下拉导航模板
const MenuGroup = (data) => {
	return (
		<Menu>
			<Menu.ItemGroup title='设置'>
				{data.map((item) => {
					return (
						<Menu.Item
							className={styles['menu-item-wrap']}
							key={item.title}
							icon={item.icon && React.createElement(Icons[item.icon])}>
							{item.title}
							{item.dec && <div className={styles['dec']}>{item.dec}</div>}
						</Menu.Item>
					)
				})}
			</Menu.ItemGroup>
		</Menu>
	)
}
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

const Home = () => {
	return (
		<Layout className='layout-wrap'>
			<Sider>
				<div className={styles['logo']} />
				<Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
					{menuItem(menuList)}
				</Menu>
			</Sider>
			<Layout>
				<Header className={styles['site-layout-sub-header-background']}>
					<Row>
						<Col span={12} offset={12}>
							<Space size={40} className={styles['space-wrap']}>
								<Tooltip title='意见反馈'>
									<Link to='/feedback'>
										<MailOutlined style={{ fontSize: '20px' }} />
									</Link>
								</Tooltip>
								<Dropdown overlay={menu(newList)} placement='bottomCenter'>
									<Badge count={5}>
										<BellOutlined style={{ fontSize: '20px' }} />
									</Badge>
								</Dropdown>
								<Dropdown
									overlay={MenuGroup(settingList)}
									placement='bottomCenter'>
									<SettingOutlined style={{ fontSize: '20px' }} />
								</Dropdown>
								<Divider type='vertical' />
								<Dropdown overlay={menu(userList)} placement='bottomRight'>
									<div>
										<Avatar icon={<UserOutlined />} />
										<span className={styles['user-name']}>user</span>
									</div>
								</Dropdown>
							</Space>
						</Col>
					</Row>
				</Header>
				<Content className='content-wrap'>
					<div>content</div>
				</Content>
			</Layout>
		</Layout>
	)
}

export default Home

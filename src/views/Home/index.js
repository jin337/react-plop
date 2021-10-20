import styles from './index.module.scss'
import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'
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
	Image,
} from 'antd'

import * as Icons from '@ant-design/icons'
import {
	MailOutlined,
	BellOutlined,
	SettingOutlined,
	UserOutlined,
} from '@ant-design/icons'

// 路由引入
import Index from '../../pages/Home/Index'
import Reception from '../../pages/Home/Reception'
import Elderly from '../../pages/Home/Elderly'
import Scheduling from '../../pages/Home/Scheduling'
import Hospitalized from '../../pages/Home/Hospitalized'
import LeaveHospital from '../../pages/Home/LeaveHospital'
import Contract from '../../pages/Home/Contract'

const { Header, Content, Sider } = Layout

// 导航列表
const menuList = [
	{
		key: 'index',
		title: '系统首页',
		icon: 'HomeOutlined',
		path: '/home/index',
	},
	{
		key: 'reception',
		title: '接待管理',
		icon: 'CrownFilled',
		path: '/home/reception',
	},
	{
		key: 'elderly',
		title: '老人档案',
		icon: 'UserOutlined',
		path: '/home/elderly',
	},
	{
		key: 'scheduling',
		title: '排班管理',
		icon: 'CarryOutFilled',
		path: '/home/scheduling',
	},
	{
		key: 'hospitalized',
		title: '入院管理',
		icon: 'FolderAddFilled',
		path: '/home/hospitalized',
	},
	{
		key: 'leave-hospital',
		title: '出院管理',
		icon: 'FolderOpenFilled',
		path: '/home/leave-hospital',
	},
	{
		key: 'contract',
		title: '合同管理',
		icon: 'ProfileFilled',
		path: '/home/contract',
	},
]
// 消息列表
const newsList = [
	{
		key: 1,
		title: '未读消息',
		icon: 'BulbOutlined',
		path: '/news/unread',
	},
	{
		key: 2,
		title: '已读消息',
		icon: 'BarsOutlined',
		path: '/news/read',
	},
]
// 设置列表
const systemList = [
	{
		key: 'role',
		title: '角色管理',
		icon: 'IdcardFilled',
		path: '/system/role',
		dec: '这里是角色管理',
	},
	{
		key: 'staff',
		title: '员工管理',
		icon: 'ScheduleFilled',
		path: '/system/staff',
		dec: '这里是员工管理',
	},
	{
		key: 'mechanism',
		title: '机构管理',
		icon: 'LayoutFilled',
		path: '/system/mechanism',
		dec: '这里是机构管理',
	},
	{
		key: 'building',
		title: '大楼管理',
		icon: 'DatabaseFilled',
		path: '/system/building',
		dec: '这里是大楼管理',
	},
	{
		key: 'dictionaries',
		title: '字典管理',
		icon: 'ReadFilled',
		path: '/system/dictionaries',
		dec: '这里是字典管理',
	},
]
// 个人中心列表
const userList = [
	{
		key: 1,
		title: '个人资料',
		path: '/user/edit',
	},
	{
		key: 2,
		title: '修改密码',
		path: '/user/resetpwd',
	},
	{
		key: 3,
		title: '退出登录',
		path: '/',
	},
]
// 单行下拉导航模板
const menuItem = (data) => {
	return (
		<Menu>
			{data.map((item) => {
				return (
					<Menu.Item
						key={item.key}
						icon={item.icon && React.createElement(Icons[item.icon])}>
						<Link to={item.path}>{item.title}</Link>
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
							<Link to={item.path}>
								{item.title}
								{item.dec && <div className={styles['dec']}>{item.dec}</div>}
							</Link>
						</Menu.Item>
					)
				})}
			</Menu.ItemGroup>
		</Menu>
	)
}

// 嵌套页面
const Pages = () => {
	return (
		<>
			<Route path='/home/index' component={Index} />
			<Route path='/home/reception' component={Reception} />
			<Route path='/home/elderly' component={Elderly} />
			<Route path='/home/scheduling' component={Scheduling} />
			<Route path='/home/hospitalized' component={Hospitalized} />
			<Route path='/home/leave-hospital' component={LeaveHospital} />
			<Route path='/home/contract' component={Contract} />
		</>
	)
}

const Home = (props) => {
	const [current, setCurrent] = useState(props.match.params.id)

	// 主导航选择
	const handleItem = (e) => {
		setCurrent(e.key)
	}

	return (
		<Layout className='layout-wrap'>
			<Sider>
				<div className={styles['logo']}>
					<Image
						className={styles['cover']}
						preview={false}
						src='https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
					/>
					<div className={styles['name']}>xxx管理系统</div>
				</div>
				<Menu
					theme='dark'
					mode='inline'
					className={styles['menu-wrap']}
					selectedKeys={[current]}
					onClick={handleItem}>
					{menuList.map((item) => {
						return (
							<Menu.Item
								key={item.key}
								icon={item.icon && React.createElement(Icons[item.icon])}>
								<Link to={item.path}>{item.title}</Link>
							</Menu.Item>
						)
					})}
				</Menu>
			</Sider>
			<Layout>
				<Header className='header-wrap'>
					<Row className={styles['row-wrap']}>
						<Col span={12} offset={12}>
							<Space size={40} className={styles['space-wrap']}>
								<Tooltip title='意见反馈'>
									<Link to='/user/feedback'>
										<MailOutlined style={{ fontSize: '20px' }} />
									</Link>
								</Tooltip>
								<Dropdown overlay={menuItem(newsList)} placement='bottomCenter'>
									<Badge count={5}>
										<BellOutlined style={{ fontSize: '20px' }} />
									</Badge>
								</Dropdown>
								<Dropdown
									overlay={MenuGroup(systemList)}
									placement='bottomCenter'>
									<SettingOutlined style={{ fontSize: '20px' }} />
								</Dropdown>
								<Divider type='vertical' />
								<Dropdown overlay={menuItem(userList)} placement='bottomRight'>
									<div className={styles['user-wrap']}>
										<Avatar icon={<UserOutlined />} />
										<span className={styles['user-name']}>user</span>
									</div>
								</Dropdown>
							</Space>
						</Col>
					</Row>
				</Header>
				<Content className='content-wrap'>
					<Pages />
				</Content>
			</Layout>
		</Layout>
	)
}

export default Home

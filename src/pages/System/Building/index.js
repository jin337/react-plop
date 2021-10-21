import styles from './index.module.scss'
import WrapTitle from '../../../components/WrapTitle'
import { useState } from 'react'

const titleData = [
	{
		label: '楼栋管理',
	},
	{
		label: '房型管理',
	},
	{
		label: '房间管理',
	},
	{
		label: '床位二维码',
	},
]

const Building = (props) => {
	const [activeKey, setActiveKey] = useState(0)
	const changeActive = (e) => {
		console.log(e)
	}

	return (
		<div className={styles['building-wrap']}>
			<WrapTitle
				data={titleData}
				activeKey={activeKey}
				onChange={changeActive}></WrapTitle>
		</div>
	)
}

export default Building

import styles from './index.module.scss'
import WrapTitle from '../../../components/WrapTitle'
import { useState } from 'react'

const titleData = [
	{
		label: '排班列表',
	},
	{
		label: '组别管理',
	},
]

const Scheduling = (props) => {
	const [activeKey, setActiveKey] = useState(0)
	const changeActive = (e) => {
		console.log(e)
	}

	return (
		<div className={styles['scheduling-wrap']}>
			<WrapTitle
				data={titleData}
				activeKey={activeKey}
				onChange={changeActive}></WrapTitle>
		</div>
	)
}

export default Scheduling

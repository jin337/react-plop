import styles from './index.module.scss'
import WrapTitle from '../../../components/WrapTitle'
import { useState } from 'react'

const titleData = [
	{
		label: '基础信息',
	},
	{
		label: '机构资质',
	},
	{
		label: '设施配置',
	},
	{
		label: '营运资质',
	},
	{
		label: '设备资产',
	},
]

const Mechanism = (props) => {
	const [activeKey, setActiveKey] = useState(0)
	const changeActive = (e) => {
		console.log(e)
	}

	return (
		<div className={styles['mechanism-wrap']}>
			<WrapTitle
				data={titleData}
				activeKey={activeKey}
				onChange={changeActive}></WrapTitle>
		</div>
	)
}

export default Mechanism

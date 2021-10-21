import styles from './index.module.scss'
import WrapTitle from '../../../components/WrapTitle'
import { useState } from 'react'

const titleData = [
	{
		label: '入院申请',
	},
	{
		label: '入院评估',
	},
	{
		label: '入院审核',
	},
]

const Hospitalized = (props) => {
	const [activeKey, setActiveKey] = useState(0)
	const changeActive = (e) => {
		console.log(e)
	}

	return (
		<div className={styles['hospitalized-wrap']}>
			<WrapTitle
				data={titleData}
				activeKey={activeKey}
				onChange={changeActive}></WrapTitle>
		</div>
	)
}

export default Hospitalized

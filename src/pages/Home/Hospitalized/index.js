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

	return (
		<div className={styles['hospitalized-wrap']}>
			<WrapTitle
				data={titleData}
				activeKey={activeKey}
				onChange={setActiveKey}></WrapTitle>
		</div>
	)
}

export default Hospitalized

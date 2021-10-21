import styles from './index.module.scss'
import WrapTitle from '../../../components/WrapTitle'

const titleData = [
	{
		label: '排版列表',
	},
	{
		label: '组别管理',
	},
]

const Scheduling = (props) => {
	return (
		<div className={styles['scheduling-wrap']}>
			<WrapTitle data={titleData}></WrapTitle>
		</div>
	)
}

export default Scheduling

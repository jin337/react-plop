import styles from './index.module.scss'
import WrapTitle from '../../../components/WrapTitle'

const LeaveHospital = (props) => {
	return (
		<div className={styles['leavehospital-wrap']}>
			<WrapTitle>出院列表</WrapTitle>
		</div>
	)
}

export default LeaveHospital

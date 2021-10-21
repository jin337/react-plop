import styles from './index.module.scss'
import WrapTitle from '../../../components/WrapTitle'

const Staff = (props) => {
	return (
		<div className={styles['staff-wrap']}>
			<WrapTitle>员工列表</WrapTitle>
		</div>
	)
}

export default Staff

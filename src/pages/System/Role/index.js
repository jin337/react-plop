import styles from './index.module.scss'
import WrapTitle from '../../../components/WrapTitle'

const Role = (props) => {
	return (
		<div className={styles['role-wrap']}>
			<WrapTitle>角色列表</WrapTitle>
		</div>
	)
}

export default Role

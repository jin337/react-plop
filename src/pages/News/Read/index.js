import styles from './index.module.scss'
import WrapTitle from '../../../components/WrapTitle'

const Read = (props) => {
	return (
		<div className={styles['read-wrap']}>
			<WrapTitle>已读消息列表</WrapTitle>
		</div>
	)
}

export default Read

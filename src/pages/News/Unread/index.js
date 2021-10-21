import styles from './index.module.scss'
import WrapTitle from '../../../components/WrapTitle'

const Unread = (props) => {
	return (
		<div className={styles['unread-wrap']}>
			<WrapTitle>未读消息列表</WrapTitle>
		</div>
	)
}

export default Unread

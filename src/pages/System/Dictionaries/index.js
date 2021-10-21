import styles from './index.module.scss'
import WrapTitle from '../../../components/WrapTitle'

const Dictionaries = (props) => {
	return (
		<div className={styles['dictionaries-wrap']}>
			<WrapTitle>字典项列表</WrapTitle>
		</div>
	)
}

export default Dictionaries

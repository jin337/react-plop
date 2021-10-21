import styles from './index.module.scss'
import WrapTitle from '../../../components/WrapTitle'

const Contract = (props) => {
	return (
		<div className={styles['contract-wrap']}>
			<WrapTitle>入住合同列表</WrapTitle>
		</div>
	)
}

export default Contract

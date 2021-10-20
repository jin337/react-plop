import styles from './index.module.scss'
import { Menu } from 'antd'
const { SubMenu } = Menu

const Hospitalized = (props) => {
	return (
		<div className={styles['hospitalized-wrap']}>
			<Menu mode='horizontal'>
				<Menu.Item key='mail'>Navigation One</Menu.Item>
				<Menu.Item key='mail1'>Navigation two</Menu.Item>
			</Menu>
		</div>
	)
}

export default Hospitalized

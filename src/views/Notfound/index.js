import styles from './index.module.scss'
import { Result, Button } from 'antd'

const Notfound = () => {
	return (
		<div className={styles['notfound-wrap']}>
			<Result
				status='404'
				title='404'
				subTitle='很抱歉，您访问的页面不存在。'
				extra={
					<Button type='primary' href='/'>
						返回首页
					</Button>
				}
			/>
		</div>
	)
}

export default Notfound

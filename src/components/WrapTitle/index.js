import { useState } from 'react'
import styles from './index.module.scss'

// 单条
const ShowLabel = (key) => <div className={styles['txt']}>{key}</div>

// 多条
const ShowList = (list, activeKey, onChange) => {
	const [select, setSelect] = useState(list[activeKey])
	// 选择
	const changeSelect = (item, index) => {
		setSelect(item)
		onChange(index)
	}

	return (
		<div className={styles['list']}>
			{list &&
				list.map((item, index) => (
					<div
						key={index}
						className={[
							`${styles['item']}`,
							`${select === item ? styles['active'] : ''}`,
						].join(' ')}
						onClick={() => changeSelect(item, index)}>
						{item.label}
					</div>
				))}
		</div>
	)
}

const WrapTitle = (props) => {
	const { data, children, activeKey, onChange } = props

	return (
		<div className={styles['wraptitle-wrap']}>
			{children
				? ShowLabel(children)
				: data && data.length && data.length > 1
				? ShowList(data, activeKey, onChange)
				: ShowLabel(data[0].label)}
		</div>
	)
}

export default WrapTitle

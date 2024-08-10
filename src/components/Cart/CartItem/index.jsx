import React from 'react'
import { useDispatch } from 'react-redux'

// slices
import { setItem, minusItem } from '../../../store/slices/cart'

// assets

import styles from '../Cart.module.scss'

export default function CartItem({count, id, price, title, img}) {
	const dispatch = useDispatch()
	const incrCount = () => {
		dispatch(setItem({id, price}))
	}
	const decrCount = () => {
		dispatch(minusItem({id, price}))
	}
	if (price * count > 0) {
		return (
		<li className={styles.item}>
		<img
			src={img}
			alt='rose'
		/>
		<div className={styles.info}>
			<h2 className={styles.title}>{title}</h2>
			<h2 className={styles.price}>${price * count}</h2>
		</div>
		<div className={styles.btn}>
			<button className={styles.increase} onClick={incrCount}>
				+
			</button>
			<span>{count}</span>
			<button className={styles.decrease} onClick={decrCount}>
				-
			</button>
		</div>
	</li>
	)
	} else {
		return null
	}
}

import React from 'react'

import { ToastContainer } from 'react-toastify'

import styles from './Home.module.scss'
import iconCart from '../../assets/img/shopping-cart.svg'


export default function Item(props) {
	const nowDate = `${(new Date(Date.now())).getDate() }/${(new Date(Date.now())).getMonth() + 1}/${(new Date(Date.now())).getFullYear()}`;
	
	
	return (
		<div className={styles.item}>
			<img src={props.img} alt='rose' />
			<div className={styles.info}>
				<h2 className={styles.title}>{props.title}</h2>
				<h2 className={styles.price}>{props.price}$</h2>
			</div>
			<button onClick={props.notify} className={styles.btn}>
				Add to cart
			</button>
			<ToastContainer
				position='bottom-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
				icon={iconCart}
				stacked
			/>
			<h3>Added on {nowDate}</h3>
		</div>
	)
}

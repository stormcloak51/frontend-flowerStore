import React from 'react'
import { useDispatch } from 'react-redux'

import { ToastContainer } from 'react-toastify'

import { setItem } from '../../store/slices/cart'
import styles from './Home.module.scss'
import iconCart from '../../assets/img/shopping-cart.svg'
import { Link } from 'react-router-dom'


export default function Item(props) {
	const dispatch = useDispatch();
	const nowDate = `${(new Date(Date.now())).getDate() }/${(new Date(Date.now())).getMonth() + 1}/${(new Date(Date.now())).getFullYear()}`;
	
	const handleAddingToCart = () => {
		props.notify();
		dispatch(setItem({
			id: props.data.id,
			title: props.data.title,
			img: props.data.img,
			price: props.data.price
		}))
	}
	
	return (
		<Link to={`/flower/${props.data.id}`}
		className={styles.item}>
			<img src={props.data.img} alt='rose' />
			<div className={styles.info}>
				<h2 className={styles.title}>{props.data.title}</h2>
				<h2 className={styles.price}>{props.data.price}$</h2>
			</div>
			<button onClick={handleAddingToCart} className={styles.btn}>
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
		</Link>
	)
}

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// components

import CartItem from './CartItem'

// selectors

import { selectCart } from '../../store/slices/cart'

// assets

import styles from './Cart.module.scss'

export default function Cart() {
	const {items, amount} = useSelector(selectCart)
	// const [itemCount, setItemCount] = React.useState(1);
	return (
		<div className={styles.cart}>
			{amount > 0 ? (
				<>
					<h1>
						Your items are listed below
					</h1>
					<ul className={styles.list}>
						{
							items.map(obj => {
								// console.log(obj)
								return <CartItem {...obj} key = {obj.id}/>
							})
						}
					</ul>
				</>
				
			) : (
				<h1>We didnt find anything in your cart</h1>
			)}
		</div>
	)
}

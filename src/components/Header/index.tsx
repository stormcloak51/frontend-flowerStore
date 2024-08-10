// import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styles from './Header.module.scss'

import { Search } from './Search'
import Cart from '../Cart'

import { Link, useLocation, useParams } from 'react-router-dom'
import { setItem, clearItems, selectCart } from '../../store/slices/cart'
import {fetchFlowerItem, item, statusAction} from '../../store/slices/flowerItem'

// assets

import { ShoppingBasket } from 'lucide-react';


function Header() {
	const {id} = useParams()
	const flowerItem: any = useSelector(item)
	const status = useSelector(statusAction)
	const dispatch = useDispatch()
	const { totalPrice, amount } = useSelector(selectCart)
	const location = useLocation().pathname

	const handleEraseCart = () => {
		if (window.confirm(`Are you sure? ${amount} flower(s) will be deleted`)) {
			dispatch(clearItems())
		}
	}
	// React.useEffect(() => {
		const handleAddItem = () => {
			dispatch(fetchFlowerItem(id))
			
			if (status === 'success') dispatch(setItem(flowerItem))
		}
		// handleAddItem()
	// })

	console.log(flowerItem)
	return (
		<div className={styles.abso}>
			<Link to={'/'} className={styles.logo}>
				<img src='https://i.pinimg.com/564x/dd/12/f9/dd12f9819c8b71507b2e8bce8dd0d014.jpg' alt='' />
				<span>stormcloak store</span>
			</Link>
			{location === '/' ? (
				<>
					<Search />
					<Link to={'/cart'} className={styles.cart}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='#000000'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-shopping-cart'>
							<circle cx='8' cy='21' r='1' />
							<circle cx='19' cy='21' r='1' />
							<path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
						</svg>
						<span className={styles.text}>Go to cart</span>
						<span className={styles.count}>{amount}</span>
					</Link>
				</>
			) : location === '/cart' ? (
				<>
					<div className={styles.clear}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='#000000'
							stroke-width='2.5'
							stroke-linecap='round'
							stroke-linejoin='round'
							className='lucide lucide-eraser'>
							<path d='m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21' />
							<path d='M22 21H7' />
							<path d='m5 11 9 9' />
						</svg>
						<span onClick={handleEraseCart}>Clear cart</span>
					</div>
					<div className={styles.price}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='#000000'
							stroke-width='2.5'
							stroke-linecap='round'
							stroke-linejoin='round'
							className='lucide lucide-wallet'>
							<path d='M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1' />
							<path d='M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4' />
						</svg>
						<span className={styles.text}>Total price: {totalPrice}$</span>
						<span className={styles.amount}>{amount}</span>
					</div>
				</>
			) : (
				<>
					<div className={styles.add}>
					<ShoppingBasket color="#000000" strokeWidth={2.5} />
						<span onClick={handleAddItem}>Add to cart</span>
					</div>
					<Link to={'/cart'} className={styles.cart}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='#000000'
							strokeWidth='2.5'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-shopping-cart'>
							<circle cx='8' cy='21' r='1' />
							<circle cx='19' cy='21' r='1' />
							<path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
						</svg>
						<span className={styles.text}>Go to cart</span>
						<span className={styles.count}>{amount}</span>
					</Link>
				</>
			)}
		</div>
	)
}

export default Header

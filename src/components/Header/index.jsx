import React from 'react'

import styles from './Header.module.scss'

import { Search } from './Search'
import Cart from '../Cart'

function Header() {

	return (
		<div className={styles.abso}>
			<div className={styles.logo}>
				<img src="https://i.pinimg.com/564x/dd/12/f9/dd12f9819c8b71507b2e8bce8dd0d014.jpg" alt="" />
				<span>stormcloak store</span>
			</div>
			<Search />
			<div className={styles.cart}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
				<span className={styles.text}>Go to cart</span>
				<span className={styles.count}>3</span>
			</div>
		</div>
	)
}

export default Header
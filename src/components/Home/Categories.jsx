import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId } from '../../store/slices/filter'

import styles from './Home.module.scss'
export default function Categories() {
	const currentCategoryId = useSelector(state => state.filter.categoryId)

	const dispatch = useDispatch();

	const categoryTypes = ['Flowers', 'Mono Bouquets', `Florist's Specials`, 'By the Piece', 'Dried Flowers', 'Flower Crates']

	const onClickChange = (id) => {
		dispatch(setCategoryId(id))
	}
	
	return (
		<div className={styles.categories}>
			{
				categoryTypes.map((item, index) => {
					return <div key={index} onClick={() => onClickChange(index)} className={`${styles.item} ${index === currentCategoryId ? styles['item-active'] : ''}`}>{item}</div>
				})
			}
		</div>
	)
}

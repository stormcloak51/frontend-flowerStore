import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import styles from './Search.module.scss'
import { setSearchValue } from '../../../store/slices/filter'
import { debounce } from 'lodash';

export function Search() {
	const searchValue = useSelector(state => state.filter.searchValue)
	const dispatch = useDispatch();
	const [value, setValue] = React.useState('');
	const [isOpened, setOpened] = React.useState(false)
	const searchRef = React.useRef()
	const openRef = React.useRef()

	const closeOpenSearch = value => {
		if (value) {
			searchRef.current.style.cssText = `
				width: 0;
				margin: 0;
				padding: 0;
				border: none
				transition: width 0.5s ease;
			`
			searchRef.current.children[0].style.cssText = `
				width: 0;
				margin: 0;
				padding: 0;
				border: none
				transition: width 0.5s ease;
			`
			openRef.current.classList.toggle(styles.active)

		} else {
			searchRef.current.style.cssText = `
				width: 400px;
				transition: all 0.5s ease;
		`
			searchRef.current.children[0].style.cssText = `
				width: 100%;
				border: 1px solid pink;
				padding: 0 0 0 7px;
				transition: all 0.5s ease;
				border-radius: 0 10px 10px 0;
			`
			openRef.current.classList.toggle(styles.active)
			
		}
		setOpened(!value)		
	}
	const sendSearchValue = React.useCallback(
		debounce((fixedVal) => {
			dispatch(setSearchValue(fixedVal));
		}, 350), [dispatch])

	const handleSearch = (e) => {
		const fixedVal = e.target.value;
		setValue(fixedVal)
		sendSearchValue(fixedVal)
	}

	return (
		<div
		
		className={styles.wrapper}>
			<div
				ref={openRef}
				className={styles.open_btn}
				onClick={() => {
					closeOpenSearch(isOpened)
				}}>
				<svg
					className={styles.open}
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
					class='lucide lucide-search'>
					<circle cx='11' cy='11' r='8' />
					<path d='m21 21-4.3-4.3' />
				</svg>
			</div>
			<div ref={searchRef} className={styles.search}>
				<input type='text' placeholder='Search for items...' value={value}
				onChange={handleSearch}/>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
					class='lucide lucide-x'>
					<path d='M18 6 6 18' />
					<path d='m6 6 12 12' />
				</svg>
			</div>
		</div>
	)
}

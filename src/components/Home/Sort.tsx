import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setSortId, sortBase } from '../../store/slices/filter'

import styles from './Home.module.scss'


export default function Sort() {
	const dispatch = useDispatch()
	const {currentSortId, sortTypes} = useSelector(sortBase)

	const popupRef = React.useRef<HTMLDivElement>(null)
	const sortRef = React.useRef<HTMLDivElement>(null)

	const openPopup = () => {
		popupRef.current?.classList.toggle(styles.popup_active)
	}
	const selectProp = (id: number) => {
		dispatch(setSortId(id))
		popupRef.current?.classList.remove(styles.popup_active)
	}
	const handleClickBody = (e: any) => {

		const path: HTMLElement[] = e.composedPath()
		
		if (sortRef.current && popupRef.current) {
			if (!path.includes(sortRef.current) && popupRef.current?.classList.contains(styles.popup_active)) {
				popupRef.current.classList.remove(styles.popup_active)
				console.log('body event')
			}
		}
	}
	React.useEffect(() => {
		document.body.addEventListener('click', handleClickBody)
		return () => {
			document.body.removeEventListener('click', handleClickBody)
		}
	}, [])
	return (
		<div ref={sortRef} className={styles.sort}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down-up"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>
			<span>
				Sort by <span onClick={openPopup}>{sortTypes[currentSortId]}</span>
			</span>
			<div ref={popupRef} className={`${styles.popup}`}>
				<h1>Sort property</h1>
				<ul className={styles.list}>
					{
						sortTypes.map((item: string, index: number) => {
							return <li 
							onClick={() => selectProp(index)}
							key={index} className={`${styles.item} ${index === currentSortId ? styles.item_active : ''}`}>{item}</li>
						})
					}
				</ul>
			</div>
		</div>
	)
}

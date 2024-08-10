import React from 'react'
import styles from './Home.module.scss'
import Categories from './Categories'
import Sort from './Sort'
import flower from '../../assets/img/flower.png'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import Item from './Item'
import { useSelector, useDispatch } from 'react-redux'
import MyLoader from './Skeleton'
import Pagination from './Pagination'
import { useNavigate, useLocation } from 'react-router-dom'
import qs from 'qs'
import { setFilters } from '../../store/slices/filter'
import {fetchFlowers} from '../../store/slices/flowers'

// assets

export default function Home() {
	// const [items, setItems] = React.useState([])
	const isParsed = React.useRef(false) // navigation
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const location = useLocation()
	const { categoryId, searchValue, sortId, page, sortTypes } = useSelector(state => state.filter)
	const {items, status} = useSelector(state => state.flowers)
	const notify = () =>
		toast('Successfully added', {
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					color='white'
					fill='none'
					stroke='#fff'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
					class='lucide lucide-shopping-cart'>
					<circle cx='8' cy='21' r='1' />
					<circle cx='19' cy='21' r='1' />
					<path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
				</svg>
			),
		})
	// React.useEffect(() => {
	// 	// if (!isParsed.current) {
	// 	const localParams = localStorage.getItem('qs')
	// 	const params = localParams
	// 		? qs.parse(localParams.substring(1))
	// 		: qs.parse(location.search.substring(1))

	// 	// const sortFil = sortTypes
	// 	// console.log(sortTypes)
	// 	// console.log(params.sortId)
	// 	dispatch(() => {
	// 		setFilters({
	// 			categoryId: Number(params.categoryId),
	// 			sortId: Number(params.sortId),
	// 			page: Number(params.page),
	// 		})
	// 	})
	// 	localStorage.setItem('categoryId', Number(params.categoryId))
	// 	localStorage.setItem('sortId', Number(params.sortId))
	// 	localStorage.setItem('page', Number(params.page))
	// 		// isParsed.current = true
	// 	// }
	// 	console.log('в парсе', params.categoryId)
	// 	const queryString = qs.stringify({
	// 		categoryId: params.categoryId,
	// 		sortId: params.sortId,
	// 		page: params.page,
	// 	})
	// 	console.log(queryString)
	// 	const qsParams = `${queryString === 'categoryId=0&sortId=0&page=1' ? '/' : `?${queryString}`}`

	// 	console.log('в лок', qsParams)

	// 	localStorage.setItem('qs', qsParams)

	// 	navigate(qsParams)

	// 	const fetchSort = `&sortBy=${sortTypes[sortId]}`
	// 	const fetchCategory = categoryId === 0 ? '' : `&category=${categoryId}`
	// 	const fetchSearch = searchValue ? `&title=*${searchValue}` : ''
	// 	const fetchPage = `&limit=6&page=${page}`
	// 	axios
	// 		.get(
	// 			'https://d93a8dadb8007a9e.mokky.dev/items?' +
	// 				fetchSort +
	// 				fetchCategory +
	// 				fetchSearch +
	// 				fetchPage,
	// 		)
	// 		.then(response => {
	// 			setItems(response.data.items)
	// 			setLoading(false)
	// 			isParsed.current = false
	// 		})
	// 		.catch(error => {
	// 			console.log(error)
	// 		})
	// 	// isParsed.current = false
	// }, [categoryId, searchValue, sortId, page])

	React.useEffect(() => {
		if (location.search) {
			const params = localStorage.getItem('path')
				? qs.parse(localStorage.getItem('path'))
				: qs.parse(location.search.substring(1))
			console.log(params)
			dispatch(
				setFilters({
					...params,
				}),
			)
			isParsed.current = true
		}
	}, [])
	React.useEffect(() => {
		console.log(isParsed.current)
		if (isParsed.current) {
			const qString = qs.stringify({
				categoryId: categoryId,
				sortId: sortId,
				title: `*${searchValue}`,
				page: page,
			})
			const qsParams = `${qString === 'ccategoryId=0&sortId=0&title=%2A&page=1' ? '/' : `?${qString}`}`
			localStorage.setItem('path', qString)
			navigate(qsParams)			
			getFlowers()
		} else {
			localStorage.setItem('path', '')
			navigate('/')
			getFlowers()
		}
		isParsed.current = true
	}, [categoryId, searchValue, sortId, page])

	const getFlowers = async () => {
				
		const fetchSort = `&sortBy=${sortTypes[sortId]}`
		const fetchCategory = categoryId === 0 ? '' : `&category=${categoryId}`
		const fetchSearch = searchValue ? `&title=*${searchValue}` : null
		const fetchPage = `&limit=6&page=${page}`
		
		dispatch(fetchFlowers())
		window.scrollTo(0, 0)
	}

	return (
		<div className={styles.root}>
			<div className={styles.filter}>
				<Categories />
				<Sort />
			</div>
			<div className={styles.container}>
				{status === 'loading'
					? new Array(12).fill(null).map((_, index) => <MyLoader key={index} />)
					: items.map((obj, index) => <Item notify={notify} key={index} data={obj} />)}
			</div>
			<Pagination />
		</div>
	)
}

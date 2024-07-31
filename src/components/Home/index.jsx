import React from 'react'
import styles from './Home.module.scss'
import Categories from './Categories'
import Sort from './Sort'
import flower from '../../assets/img/flower.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Item from './Item'
import { useSelector, useDispatch } from 'react-redux'
import MyLoader from './Skeleton'
import ContentLoader from "react-content-loader"

// assets


export default function Home() {
	const [items, setItems] = React.useState([])
	const [isLoading, setLoading] = React.useState(true);
	// const dispatch = useDispatch();
	const currentCategoryId = useSelector(state => state.filter.categoryId)
	const currentSortId = useSelector(state => state.filter.sortId)
	const sortTypes = useSelector(state => state.filter.sortTypes)
	const notify = () => toast("Successfully added", {
		icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color='white' fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>,
	});
	React.useEffect(() => {
		async function fetchData() {
			try {
				const fetchSort = `&sortBy=${sortTypes[currentSortId]}`
				const fetchCategory = currentCategoryId === 0 ? '' : `&category=${currentCategoryId}`
				const response = await axios.get('https://d93a8dadb8007a9e.mokky.dev/items?' + fetchSort + fetchCategory)
				setItems(response.data);
				setLoading(false)
			} catch (error) {
				console.log(error)
			}
			
		}
		setLoading(true)
		fetchData();
	}, [currentSortId, currentCategoryId, sortTypes])
	// console.log(items)
	return (
		<div className={styles.root}>
			<div className={styles.filter}>
				<Categories />
				<Sort />
			</div>
			<div className={styles.container}>
				{isLoading ? (
				new Array(12).fill(null).map((_, index) => (
            <MyLoader key={index} />
          ))
        ) : (
          items.map((obj, index) => (
            <Item notify={notify} key={index} {...obj} />
          ))
        )}
			</div>
		</div>
	)
}

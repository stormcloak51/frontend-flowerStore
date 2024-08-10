import React from 'react'

// assets

import styles from './FlowerItem.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Skeleton from './Skeleton'

export default function FlowerItem() {

	const navigate = useNavigate()
	const id = useParams().id
	const [flower, setFlower] = React.useState();

	React.useEffect(() => {
		async function fetchFlower() {
			try {
				const {data} = await axios.get('https://d93a8dadb8007a9e.mokky.dev/items/' + id)
				setFlower(data)
			} catch (error) {
				alert('Error with loading flower. Pls watch console!')
				console.log(error)
				navigate('/')
			}
		}
		fetchFlower()
	}, [])

	return (
		<div className={styles.container}>
			{
				!flower ? (
					<Skeleton className={styles.Skeleton}/>
				) : (
					<>
						<div className={styles.picture}>
							<img src={flower.img} alt={flower.title} />
						</div>
						<div className={styles.description}>
							<h1>{flower.title}</h1>
							<h1>{flower.price}$</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta ea facilis.</p>
						</div>
					</>
				)
			}
			
		</div>
	)
}

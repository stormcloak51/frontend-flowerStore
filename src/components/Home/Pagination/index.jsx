import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss'
import { setPage } from '../../../store/slices/filter';

export default function Pagination() {
  const page = useSelector(state => state.filter.page)

	const dispatch = useDispatch()
  // React.useEffect(() => {
  //   document.querySelectorAll('.pagination li').forEach((_, index) => {
  //     if (index + 1 === page) {
  //       _.classList.add('selected')
  //     }
  //   })
  // }, [page])
	return (
		<>
			<ReactPaginate
        breakLabel="..."
        nextLabel=">"
        forcePage={page - 1}
        onPageChange={(e) => dispatch(setPage(e.selected + 1))}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
				className={styles.pagination}
      />
		</>
	)
}

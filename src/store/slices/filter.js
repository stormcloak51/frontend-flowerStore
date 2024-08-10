import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	categoryId: 0,
	sortId: 0,
	searchValue: '',
	page: 1,
	// location: window.location.href,
	sortTypes: ['popularity', 'rating', 'price']
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload
		},
		setSortId(state, action) {
			state.sortId = action.payload
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
		setPage(state, action) {
			state.page = action.payload
		},
		setLocation(state, action) {
			state.location = action.payload
		},
		setFilters(state, action) {
			state.categoryId = Number(action.payload.categoryId)
			state.page = Number(action.payload.page)
			state.sortId = Number(action.payload.sortId)
		},
	},
})

export const { setCategoryId, setSortId, setSearchValue, setPage, setFilters } = filterSlice.actions

export default filterSlice.reducer

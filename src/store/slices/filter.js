import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	categoryId: 0,
	sortId: 0,
	searchValue: '',
	sortTypes: ['popularity', 'rating', 'price'],
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
		}
	}
})

export const { setCategoryId, setSortId, setSearchValue } = filterSlice.actions
export default filterSlice.reducer
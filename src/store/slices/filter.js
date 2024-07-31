import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	categoryId: 0,
	sortId: 0,
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
		}
	}
})

export const { setCategoryId, setSortId } = filterSlice.actions
export default filterSlice.reducer
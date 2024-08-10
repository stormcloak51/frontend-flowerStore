import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
	items: [],
	status: 'loading' // loading / success / error
}

export const fetchFlowers = createAsyncThunk(
  'flower/fetchFlowersData',
  async (params, thunkAPI) => {
		const {categoryId, page, sortId, searchValue, sortTypes} = thunkAPI.getState().filter
		const fetchSort = `&sortBy=${sortTypes[sortId]}`
		const fetchCategory = categoryId === 0 ? '' : `&category=${categoryId}`
		const fetchSearch = searchValue ? `&title=*${searchValue}` : ''
		const fetchPage = `&limit=6&page=${page}`
		
		const res = await axios
		.get(
			'https://d93a8dadb8007a9e.mokky.dev/items?' +
				fetchSort +
				fetchCategory +
				fetchSearch +
				fetchPage,
		)
		return res.data.items;
  },
)

const flowerSlice = createSlice({
	name: 'flower',
	initialState,
	// reducers: {
	// 	setItems(state, action) {
	// 		state.items = action.payload
	// 	},
	// },
	extraReducers: (builder) => {
		builder.addCase(fetchFlowers.pending, (state) => {
			state.items = []
			state.status = 'loading'
		})
		builder.addCase(fetchFlowers.fulfilled, (state, action) => {
			state.items = action.payload
			state.status = 'success'
		})
		builder.addCase(fetchFlowers.rejected, (state) => {
			state.items = []
			state.status = 'error'
		})
	}
	
})
// export const { setItems } = flowerSlice.actions

export default flowerSlice.reducer

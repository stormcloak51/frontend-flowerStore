// THIS SLICE WAS CREATED TO ADD FLOWER ITEM TO THE CART
// IN PAGES LIKE THIS /flower/:id

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
	item: {},
	status: 'loading'
}

export const fetchFlowerItem = createAsyncThunk(
  'flowerItem/fetchFlowerItemData',
  async (id) => {

		const res = await axios
		.get(
			'https://d93a8dadb8007a9e.mokky.dev/items/' +
				id
		)
		return res.data;
  },
)

const flowerItemSlice = createSlice({
	name: 'flowerItem',
	initialState,
	// reducers: {
	// 	setItems(state, action) {
	// 		state.items = action.payload
	// 	},
	// },
	extraReducers: (builder) => {
		
		builder.addCase(fetchFlowerItem.fulfilled, (state, action) => {
			state.item = action.payload
			state.status = 'success'
		})
		
	}
	
})
// export const { setItems } = flowerSlice.actions

export const item = (state) => state.flowerItem.item
export const statusAction = (state) => state.flowerItem.status

export default flowerItemSlice.reducer

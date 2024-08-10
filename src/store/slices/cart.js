import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalPrice: 0,
	items: [],
	amount: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setItem(state, action) {
			state.totalPrice += action.payload.price
			const findItem = state.items.find(obj => obj.id === action.payload.id)
			// console.log(findItem)
			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({ ...action.payload, count: 1 })
			}
			state.amount++
		},
		minusItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)
			if (findItem) {
				findItem.count--
				state.amount--
				state.totalPrice -= action.payload.price
			}
		},
		removeItem(state, action) {
			state.items = state.items.filter(obj => obj.id !== action.payload)
		},
		clearItems(state) {
			state.items = []
			state.totalPrice = 0
			state.amount = 0
		}
	},
})

export const selectCart = (state) => state.cart

export const { setItem, removeItem, clearItems, minusItem } = cartSlice.actions

export default cartSlice.reducer

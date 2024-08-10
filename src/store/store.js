import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filter'
import cart from './slices/cart'
import flowers from './slices/flowers'
import flowerItem from './slices/flowerItem'

export const store = configureStore({
  reducer: {
    filter,
    cart,
    flowers,
    flowerItem
  },
})
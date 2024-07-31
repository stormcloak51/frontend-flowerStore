import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filter'
console.log(filter)

export const store = configureStore({
  reducer: {filter},
})
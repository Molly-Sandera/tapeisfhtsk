import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../features/counterslice'
import {themeslice} from '../features/themeslice'

export default configureStore({
  reducer: {
      counter: counterSlice,
      theme: themeslice
  },
})
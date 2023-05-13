import { configureStore } from '@reduxjs/toolkit'
import preloaderReducer from '../features/preloader/preloaderSlice'

export default configureStore({
  reducer: {
    preloader: preloaderReducer
  },
})
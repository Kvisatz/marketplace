import { configureStore } from '@reduxjs/toolkit'
import preloaderReducer from '../features/preloader/preloaderSlice'
import fieldReducer from '../features/fields/fieldSlice'

export default configureStore({
  reducer: {
    preloader: preloaderReducer,
    inputFields: fieldReducer,
    
  },
})
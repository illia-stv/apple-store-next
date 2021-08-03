import { configureStore } from '@reduxjs/toolkit'
import Reducer from './reducers/reducer'

export default configureStore({
  reducer: {
    state: Reducer,
  },
})



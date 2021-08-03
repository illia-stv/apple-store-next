import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'state',
  initialState: {
    jwt: false,
    myCategories: [],
    cart: [],
    theme: 'light'
  },
  reducers: {
    setMyCategories: (state, action) => {
      state.myCategories = action.payload
    },
    setJwt: (state, action) => {
      state.jwt = action.payload
    },
    setCart: (state, action) => {
      state.cart = action.payload
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMyCategories, setJwt,setCart,setTheme } = counterSlice.actions

export default counterSlice.reducer
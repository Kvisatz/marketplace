import { createSlice } from '@reduxjs/toolkit'

export const fieldSlice = createSlice({
  name: 'field',
  initialState: {
    value: [],
  },
  reducers: {
    setFields: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
    deleteFields: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = [];
    },
    // decrement: state => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // }
  }
})

// Action creators are generated for each case reducer function
export const { setFields, deleteFields } = fieldSlice.actions

export default fieldSlice.reducer
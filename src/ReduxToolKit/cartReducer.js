// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { updateCart } = cartReducer.actions;

export default cartReducer.reducer;

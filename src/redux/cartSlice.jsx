import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  isPaymentView: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.cart.findIndex(item => item.productName === action.payload.productName);
      if (productIndex > -1) {
        state.cart[productIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productIndex = state.cart.findIndex(item => item.productName === action.payload.productName);
      if (productIndex > -1) {
        if (state.cart[productIndex].quantity > 1) {
          state.cart[productIndex].quantity -= 1;
        } else {
          state.cart.splice(productIndex, 1);
        }
      }
    },
    togglePaymentView: (state) => {
      state.isPaymentView = !state.isPaymentView;
    },
  },
});

export const { addToCart, removeFromCart, togglePaymentView } = cartSlice.actions;

export default cartSlice.reducer;

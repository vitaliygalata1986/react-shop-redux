import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
  isBasketShow: false,
  order: [],
  displayName: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    handleBasketShow(state) {
      state.isBasketShow = !state.isBasketShow;
    },
    handleAddToCart(state, action) {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === action.payload.id
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      state.order = newOrder;
      state.displayName = action.payload.displayName;
    },
    handleCloseAlert(state) {
      state.displayName = '';
    },
    handleDeleteItemFromCart(state, action) {
      state.order = state.order.filter(
        (orderItem) => orderItem.id !== action.payload
      );
    },
    handleDecQuantity(state, action) {
      state.order = state.order.map((orderItem) => {
        if (orderItem.id === action.payload) {
          const newQuantity = orderItem.quantity - 1;
          return {
            ...orderItem,
            quantity: newQuantity >= 0 ? newQuantity : 0,
          };
        } else {
          return orderItem;
        }
      });
    },
    handelIncQuantitey(state, action) {
      state.order = state.order.map((orderItem) => {
        if (orderItem.id === action.payload) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
    },
  },
});

export const {
  handleBasketShow,
  handleAddToCart,
  handleCloseAlert,
  handleDeleteItemFromCart,
  handleDecQuantity,
  handelIncQuantitey,
} = cartSlice.actions;

export const selectIsBasketShow = (state) => state.cart.isBasketShow;
export const selectDisplayName = (state) => state.cart.displayName;
export const selectOrder = (state) => state.cart.order;

export default cartSlice.reducer;

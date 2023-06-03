import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProducts: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'canifa/cartSlice',
  initialState: initialState,
  reducers: {
    addProduct(state, action) {
      const newProduct = action.payload;
      const existingItem = state.cartProducts?.find(
        (product) =>
          `${product.id}/${product.selectedColor}/${product.selectedSize}` ===
          `${newProduct.id}/${newProduct.selectedColor}/${newProduct.selectedSize}`,
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartProducts.push(newProduct);
      } else {
        existingItem.totalQuantity++;
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number(existingItem.price);
      }

      state.totalAmount = state.cartProducts
        ?.map((item) => item.totalPrice)
        .reduce((total, currentValue) => total + currentValue, 0);
    },
    deleteProduct(state, action) {
      const existingItem = state.cartProducts?.find(
        (product) =>
          `${product.id}/${product.selectedColor}/${product.selectedSize}` ===
          `${action.payload.id}/${action.payload.selectedColor}/${action.payload.selectedSize}`,
      );

      state.totalQuantity = state.totalQuantity - existingItem.totalQuantity;
      state.cartProducts = state.cartProducts?.filter(
        (item) =>
          `${item.id}/${item.selectedColor}/${item.selectedSize}` !==
          `${action.payload.id}/${action.payload.selectedColor}/${action.payload.selectedSize}`,
      );
      state.totalAmount = state.cartProducts
        .map((item) => item.totalPrice)
        .reduce((total, currentValue) => total + currentValue, 0);
    },
    decreaseProduct(state, action) {
      const existingItem = state.cartProducts?.find(
        (product) =>
          `${product.id}/${product.selectedColor}/${product.selectedSize}` ===
          `${action.payload.id}/${action.payload.selectedColor}/${action.payload.selectedSize}`,
      );
      state.totalQuantity--;
      if (existingItem.totalQuantity > 1) {
        existingItem.totalQuantity--;
        existingItem.totalPrice = Number(existingItem.totalPrice) - Number(action.payload.price);
      } else {
        state.cartProducts = state.cartProducts?.filter(
          (item) =>
            `${item.id}/${item.selectedColor}/${item.selectedSize}` !==
            `${action.payload.id}/${action.payload.selectedColor}/${action.payload.selectedSize}`,
        );
      }
      state.totalAmount = state.cartProducts
        ?.map((item) => item.totalPrice)
        .reduce((total, currentValue) => total + currentValue, 0);
    },
  },
});

const cartReducer = cartSlice.reducer;
export const { addProduct, deleteProduct, decreaseProduct } = cartSlice.actions;

export default cartReducer;

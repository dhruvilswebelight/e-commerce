// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const response = await fetch("");
//     const products = await response.json();
//     return products;
//   }
// );

// const productsSlice = createSlice({
//   name: "products",
//   initialState: {
//     entities: [
//       { id: 1, title: "mi smart watch", price: "800", status: "In stock" },
//       { id: 2, title: "speaker", price: "1500", status: "In stock" },
//       { id: 3, title: "i-pad", price: "30000", status: "In stock" },
//       { id: 4, title: "Samsung tv", price: "56000", status: "In stock" },
//     ],
//     // loading: false,
//   },
//   reducers: {
//     productAdded(state: any, action: any) {
//       state.entities.push(action.payload);
//     },
//     productUpdated(state: any, action: any) {
//       const { id, title, price, status } = action.payload;
//       const existingProduct = state.entities.find(
//         (product: any) => product.id === id
//       );
//       if (existingProduct) {
//         existingProduct.title = title;
//         existingProduct.price = price;
//         existingProduct.status = status;
//       }
//     },
//     productDeleted(state, action) {
//       const { id } = action.payload;
//       const existingProduct = state.entities.find(
//         (product: any) => product.id === id
//       );
//       if (existingProduct) {
//         state.entities = state.entities.filter(
//           (product: any) => product.id !== id
//         );
//       }
//     },
//   },

//   extraReducers: {
//     [fetchProducts.pending.toString()]: (state: any) => {
//       state = true;
//     },
//     [fetchProducts.fulfilled.toString()]: (state: any, action: any) => {
//       state = false;

//       state.entities = [...state.entities, ...action.payload];
//     },
//     [fetchProducts.rejected.toString()]: (state: any) => {
//       state = false;
//     },
//   },
// });

// export const { productAdded, productUpdated, productDeleted } =
//   productsSlice.actions;

// export default productsSlice.reducer;
import React from "react";
import { createSlice, } from "@reduxjs/toolkit";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  products: [
    { id: 1,  title: "mi smart watch", price: "800", status: "In stock" },
        { id: 2, title: "speaker", price: "1500", status: "In stock" },
       { id: 3, title: "i-pad", price: "30000", status: "In stock" },
     { id: 4, title: "Samsung tv", price: "56000", status: "In stock" },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    create: {
      reducer: (state: any, action: any) => {
        state.products.push(action.payload);
      },
      prepare: ({ title, price, status }: any) => ({
        payload: {
          id: uuidv4(),
          title,
          price,
          status,
        },
      }),
    },
    DeleteProduct: (state: any, { payload: index }: any) => {
      state.products.splice(index, 1);
    },
    EditProduct: (state: any, { payload }: any) => {
      const existingProduct = state.products.find(
        (product: any) => product.id === payload.id
      );
      if (existingProduct) {
        existingProduct.title = payload.title;
        existingProduct.price = payload.price;
        existingProduct.status = payload.status;
      }
    },
  },
});
export const selectedTodoSlice = createSlice({
  name: "selectedTodo",
  initialState: null,
  reducers: {
    select: (state: any, { payload }: any) => payload.id,
  },
});

export const {
  create: AddProduct,
  DeleteProduct,
  EditProduct,
} = productsSlice.actions;
export const { select: selectTodoActionCreator } = selectedTodoSlice.actions;

const reducer = {
  products: productsSlice.reducer,
  selectedTodo: selectedTodoSlice.reducer,
};

const middleware = [...getDefaultMiddleware(), logger];
export default configureStore({
  reducer,
  middleware,
});

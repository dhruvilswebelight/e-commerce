import { createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import ProductReducer from "./reducers/productReducer";
import { rootReducer } from "./reducers/combineReducers";

const store = createStore(rootReducer);
export default store;


import { combineReducers } from "redux";
import  ProductReducer  from "./productReducer";

export const rootReducer = combineReducers({
  product: ProductReducer
});
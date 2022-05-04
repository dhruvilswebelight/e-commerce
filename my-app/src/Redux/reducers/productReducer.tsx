import { type } from "os";
import {
    CREATE_PRODUCT,
    GET_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
  } from "../constent/Types";
  
  type Inputs = {
    id: number;
    title: string;
    price: string;
    status: string;
  };
//   let arr: {
//     id: number;
//     title: string;
//     price: string;
//     status: string;
// }[]
  const initialState = {
    products: [
      { id: 1, title: "mi smart watch", price: "800", status: "In stock" },
      { id: 2, title: "speaker", price: "1500", status: "In stock" },
      { id: 3, title: "i-pad", price: "30000", status: "In stock" },
      { id: 4, title: "Samsung tv", price: "56000", status: "In stock" }
    ],
    product: null
  };


   const ProductReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case CREATE_PRODUCT:
        return {
          ...state,
          products: [action.payload, ...state.products]
        };
      case GET_PRODUCT:
        let arr = state.products.filter(
          (product) => product.id == action.payload
        );
        // arr = arr.values();
        for (let val of arr) {
        //  arr = val;
        }
        return {
          ...state,
          product: arr
        };
      case UPDATE_PRODUCT:
        return {
          ...state,
          products: state.products.map((product) =>
          product.id == action.payload.id ? action.payload : product
          )
        };
      case DELETE_PRODUCT:
        return {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.payload
          )
        };
      default:
        return state;
    }
  };
  export default ProductReducer
  
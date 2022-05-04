import {
    CREATE_PRODUCT,
    GET_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
  } from "../constent/Types";
  
  export const addProduct = (product:any) => ({
    type: CREATE_PRODUCT,
    payload: product
  });
  
  export const getProduct = (id:any) => ({
    type: GET_PRODUCT,
    payload: id
  });
  
  export const updateProduct = (product:any) => ({
    type: UPDATE_PRODUCT,
    payload: product
  });
  export const deleteProduct = (id:any) => ({
    type: DELETE_PRODUCT,
    payload: id
  });
  
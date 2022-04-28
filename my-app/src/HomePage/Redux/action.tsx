

export const getProduct = () =>{
  return (dispatch:any) => {
    return dispatch({
      type: "GET_PRODUCT",
    });
  };
}

export const addProduct = (data:any)  => {
  return (dispatch:any) => {
    return dispatch({
      type: "ADD_PRODUCT",
      payload: data,
    });
  };
}

export const editProduct = (data:any) =>{
  return (dispatch:any) => {
    return dispatch({
      type: "EDIT_PRODUCT",
      payload: data,
    });
  };
}

export const deleteProduct = (productId:any) =>{
  return (dispatch:any) => {
    return dispatch({
      type: "DELETE_PRODUCT",
      payload: productId,
    });
  };
}

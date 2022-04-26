import { createSlice } from '@reduxjs/toolkit'
const initialstate = {
    products: [
      { id: 1, title: "mi smart watch", price: "800", status: "In stock" },
      { id: 2, title: "speaker", price: "1500", status: "In stock" },
      { id: 3, title: "i-pad", price: "30000", status: "In stock" },
      { id: 4, title: "Samsung tv", price: "56000", status: "In stock" },
    ],
  };

  export const ProductSlice = createSlice({
    name: 'product',
    initialstate,
      reducers: {

        getProduct:(state,action)=> {
        return {
            ...state,
          }},

          addProduct :(state,action)=>{
            return {
                ...state,
                products: state.products.concat(action.payload),
              };
        },

        editProduct:(state,action)=>{
            return {
                ...state,
                products: state.products.map((product) =>
                  product.id === action.payload.id
                    ? {
                        ...product,
                        title: action.payload.title,
                        price: action.payload.price,
                        status: action.payload.status,
                      }
                    : product
                ),
              };
        },

        deleteProduct:(state,action)=>{
            return {
                ...state,
                products: state.products.filter(
                  (product) => product.id !== action.payload
                ),
              };
        },


      },
  })

export const { getProduct, addProduct, editProduct, deleteProduct} = ProductSlice.actions
export default ProductSlice.reducer
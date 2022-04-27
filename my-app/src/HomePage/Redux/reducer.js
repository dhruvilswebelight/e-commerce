// const initialstate = {
//   products: [
//     { id: 1, title: "mi smart watch", price: "800", status: "In stock" },
//     { id: 2, title: "speaker", price: "1500", status: "In stock" },
//     { id: 3, title: "i-pad", price: "30000", status: "In stock" },
//     { id: 4, title: "Samsung tv", price: "56000", status: "In stock" },
//   ],
// };

// const Reducer = (state = initialstate, action) => {
//   switch (action.type) {
//     case "GET_PRODUCT":
//       return {
//         ...state,
//       };
//     case "ADD_PRODUCT":
//       return {
//         ...state,
//         products: state.products.concat(action.payload),
//       };
//     case "EDIT_PRODUCT":
//       return {
//         ...state,
//         products: state.products.map((product) =>
//           product.id === action.payload.id
//             ? {
//                 ...product,
//                 title: action.payload.title,
//                 price: action.payload.price,
//                 status: action.payload.status,
//               }
//             : product
//         ),
//       };
//     case "DELETE_PRODUCT":
//       return {
//         ...state,
//         products: state.products.filter(
//           (product) => product.id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export default Reducer;
                                    // redux-toolkit

const initialstate = {
  products: [
    { id: 1, title: "mi smart watch", price: "800", status: "In stock" },
    { id: 2, title: "speaker", price: "1500", status: "In stock" },
    { id: 3, title: "i-pad", price: "30000", status: "In stock" },
    { id: 4, title: "Samsung tv", price: "56000", status: "In stock" },
  ],
};

const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    case "EDIT_PRODUCT":
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
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default Reducer;

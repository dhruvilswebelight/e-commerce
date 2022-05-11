// import { productDeleted } from "./productsSlice";
// import { useDispatch, useSelector } from "react-redux";

// import { Link } from "react-router-dom";
// const ProductList = () => {
//   const dispatch = useDispatch();

//   const { entities } = useSelector((state: any) => state.products);
//   const handleDelete = (id: any) => {
//     dispatch(productDeleted({ id }));
//   };

//   return (
//     <div>
//       <div>
//         <h1 id="toolkit_header">Add Product Details</h1>
//       </div>
//       <div>
//         <Link to="/add-product">
//           <button className="toolkit_crud_add_product">Add product</button>
//         </Link>
//       </div>
//       <div className="toolkit_table">
//         <table className="u-full-width">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Title</th>
//               <th>Price</th>
//               <th>Status</th>
//               <th>Last Edited / Added</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {entities.length &&
//               entities.map(
//                 ({ id, title, price, status, edit }: any, i: any) => (
//                   <tr key={i}>
//                     <td>{id}</td>
//                     <td>{title}</td>
//                     <td>{price}</td>
//                     <td>{status}</td>
//                     <td>{edit}</td>
//                     <td>
//                       <button onClick={() => handleDelete(id)}>Delete</button>
//                       <Link to={`/edit-product/${id}`}>
//                         <button>Edit</button>
//                       </Link>
//                     </td>
//                   </tr>
//                 )
//               )}
//           </tbody>
//         </table>
//       </div>
//       <Link to="/Product_Detail-page">
//         <button id="toolkit_add_edit_back_button">back</button>
//       </Link>
//       <Link to="/moment-lodash-page">
//         <button id="toolkit_add_edit_back_button">Next</button>
//       </Link>
//     </div>
//   );
// };
// export default ProductList;

                                                              // Using Custom Hook wip

import { productDeleted } from "./productsSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
const ProductList = () => {
  const dispatch = useDispatch();

  const { entities } = useSelector((state: any) => state.products);
  const handleDelete = (id: any) => {
    dispatch(productDeleted({ id }));
  };

  return (
    <div>
      <div>
        <h1 id="toolkit_header">Add Product Details</h1>
      </div>
      <div>
        <Link to="/add-product">
          <button className="toolkit_crud_add_product">Add product</button>
        </Link>
      </div>
      <div className="toolkit_table">
        <table className="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Status</th>
              <th>Last Edited / Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entities.length &&
              entities.map(
                ({ id, title, price, status, edit }: any, i: any) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>{status}</td>
                    <td>{edit}</td>
                    <td>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                      <Link to={`/edit-product/${id}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
      <Link to="/Product_Detail-page">
        <button id="toolkit_add_edit_back_button">back</button>
      </Link>
      <Link to="/moment-lodash-page">
        <button id="toolkit_add_edit_back_button">Next</button>
      </Link>
    </div>
  );
};
export default ProductList;

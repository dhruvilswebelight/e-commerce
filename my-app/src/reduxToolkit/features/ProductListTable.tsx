import { productDeleted } from "./productsSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useState } from "react";
import { productUpdated } from "./productsSlice";

import { Link } from "react-router-dom";
const ProductList = () => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));
  // const handleEdit = (e: any) => setEdit(e.target.value);

  const { entities } = useSelector((state: any) => state.products);
  const handleDelete = (id: any) => {
    dispatch(productDeleted({ id }));
  };


  const handleMoment = () => {
    console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
  };
  
  // const handleClick = () => {
  //   if (edit) {
  //     dispatch(
  //       productUpdated({
  //       edit

  //       })
  //     );

  // }
  // };

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
              <th>Last Edited</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entities.length &&
              entities.map(
                ({ id, title, price, status }: any, i: any) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>{status}</td>
                    <td>{(moment().format("MMMM Do YYYY, h:mm:ss a"))}</td>
                    <td>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                      <Link to={`/edit-product/${id}`}>
                        {/* <button onClick={() => handleMoment(title)}>Edit</button> */}
                        <button
                          // onClick={()=> handleEdit(handleMoment)}
                          // onChange={handleEdit}
                        >
                          Edit
                        </button>
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

// import { useDispatch, useSelector } from "react-redux";
// import moment from "moment";

// import { useHistory } from "react-router-dom";
// import { useState } from "react";
// import { productAdded } from "./productsSlice";

// const AddProduct = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [status, setStatus] = useState("");
//   const [edit, setEdit] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));

//   const [error, setError] = useState(null);

//   const handleTitle = (e: any) => setTitle(e.target.value);
//   const handlePrice = (e: any) => setPrice(e.target.value);
//   const handleStatus = (e: any) => setStatus(e.target.value);
//   const handleEdit = (e: any) => setEdit(e.target.value);

//   const productsAmount = useSelector(
//     (state: any) => state.products.entities.length
//   );

//   const handleClick = () => {
//     if (title && price && status ) {
//       dispatch(
//         productAdded({
//           id: productsAmount + 1,
//           title,
//           price,
//           status,
//           edit:moment().format("MMMM Do YYYY, h:mm:ss a")
//         })
//       );

//       setError(null);
//       history.push("/Crud-Page");
//     } else {
//       alert("fill all the data");
//     }

//     setTitle("");
//     setPrice("");
//     setStatus("");
//     setEdit(moment().format("MMMM Do YYYY, h:mm:ss a"));
//   };

//   return (
//     <div>
//       <div>
//         <h1 id="toolkit_add_edit_product_header">Add product</h1>
//       </div>
//       <div className="toolkit_add_edit_product_detail">
//         <label htmlFor="titleInput" id="toolkit_add_edit_title">
//           Title
//         </label>
//         <input type="text" id="q" onChange={handleTitle} value={title} />
//         <label htmlFor="priceInput" id="toolkit_add_edit_price">
//           Price
//         </label>
//         <input type="text" id="q" onChange={handlePrice} value={price} />
//         <label htmlFor="statusInput" id="toolkit_add_edit_status">
//           Status
//         </label>
//         <input type="text" id="q" onChange={handleStatus} value={status} />
//         <label id="lastEdit">Last Added</label>
//         <label id="time" onChange={handleEdit}>
//           {moment().format("MMMM Do YYYY, h:mm:ss a")}
//         </label>
//         {error && error}
//         <button onClick={handleClick} id="toolkit_add_edit_product_button">
//           Add product
//         </button>
//       </div>
//     </div>
//   );
// };
// export default AddProduct;

                                                             // Using Custom Hook 

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { productAdded } from "./productsSlice";
import useCustom from "./useAddDelete";
import moment from "moment";

const AddProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    title,
    price,
    status,
    edit,
    productsAmount,
    handleTitle,
    handlePrice,
    handleStatus,
    handleEdit,
  } = useCustom();

  const handleClick = () => {
    if (title && price && status && edit) {
      dispatch(
        productAdded({
          id: productsAmount + 1,
          title,
          price,
          status,
          edit: moment().format("MMMM Do YYYY, h:mm:ss a"),
        })
      );

      history.push("/Crud-Page");
    } else {
      alert("fill all the data");
    }
  };

  return (
    <div>
      <div>
        <h1 id="toolkit_add_edit_product_header">Add product</h1>
      </div>
      <div className="toolkit_add_edit_product_detail">
        <label htmlFor="titleInput" id="toolkit_add_edit_title">
          Title
        </label>
        <input
          type="text"
          id="q"
          onChange={handleTitle}
          value={title}
          autoComplete="off"
        />
        <label htmlFor="priceInput" id="toolkit_add_edit_price">
          Price
        </label>
        <input
          type="text"
          id="q"
          onChange={handlePrice}
          value={price}
          autoComplete="off"
        />
        <label htmlFor="statusInput" id="toolkit_add_edit_status">
          Status
        </label>
        <input
          type="text"
          id="q"
          onChange={handleStatus}
          value={status}
          autoComplete="off"
        />
        <label id="lastEdit">Last Added</label>
        <label id="time" onChange={handleEdit}>
          {moment().format("MMMM Do YYYY, h:mm:ss a")}
        </label>
        <button onClick={handleClick} id="toolkit_add_edit_product_button">
          Add product
        </button>
      </div>
    </div>
  );
};
export default AddProduct;

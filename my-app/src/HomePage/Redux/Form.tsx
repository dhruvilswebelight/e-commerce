import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddProduct } from "./ProductSlice";

export default () => {
  const [title, SetTitle] = useState("");
  const [price, SetPrice] = useState("");
  const [status, SetStatus] = useState("");

  const dispatch = useDispatch();

  const AddProducts = () => {
    if (title && price && status) {
      dispatch(AddProduct({ title, price, status }));
    }
    SetTitle("");
    SetPrice("");
    SetStatus("");
  };
  return (
    <div className="Crud_form">
      <form onSubmit={(ev) => ev.preventDefault()}>
        <h6 id="product_detail">Product Details</h6>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          autoComplete="off"
          value={title}
          name="title"
          onChange={(e) => SetTitle(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          autoComplete="off"
          value={price}
          name="price"
          onChange={(e) => SetPrice(e.target.value)}
        />
         <label htmlFor="status">status</label>
           <input
          id="status"
          autoComplete="off"
          value={status}
          name="status"
          onChange={(e) => SetStatus(e.target.value)}
        />
        <input type="submit" id="Add_Product" value="Add product" onClick={AddProducts} />
      </form>
    </div>
  );
};

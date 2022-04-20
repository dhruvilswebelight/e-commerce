import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddProduct } from "../Redux/CounterSlice";
import { useHistory } from "react-router-dom";

export default () => {
  const [title, SetTitle] = useState("");
  const [price, SetPrice] = useState("");
  const [status, SetStatus] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const AddProducts = () => {
    if (title && price && status) {
      dispatch(AddProduct({ title, price, status }));
    }
    SetTitle("");
    SetPrice("");
    SetStatus("");
  };
  return (
    <div className="form_crud">
      <form onSubmit={(ev) => ev.preventDefault()}>
        <p id="title">Product Details</p>
        <label htmlFor="title" id="crud_label">Title</label>
        <input
          id="crud_input"
          autoComplete="off"
          value={title}
          name="title"
          onChange={(e) => SetTitle(e.target.value)}
        />
        <label htmlFor="price" id="crud_label">Price</label>
        <input
          id="crud_input"
          autoComplete="off"
          value={price}
          name="price"
          onChange={(e) => SetPrice(e.target.value)}
        />
        <label htmlFor="status" id="crud_label">status</label>
        <input
          id="crud_input"
          autoComplete="off"
          value={status}
          name="status"
          onChange={(e) => SetStatus(e.target.value)}
        />
        <input
          type="submit"
          id="add_product"
          value="Add product"
          onClick={AddProducts}
        />
        <button
          type="submit"
          id="back"
          onClick={() => history.push("./Product_Detail-Page")}
        >
          Back
        </button>
      </form>
    </div>
  );
};

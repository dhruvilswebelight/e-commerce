import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { useState } from "react";
import { productUpdated } from "./productsSlice";

const EditProduct = () => {
  const { pathname } = useLocation();
  const productId = parseInt(pathname.replace("/edit-product/", ""));

  const product = useSelector((state: any) =>
    state.products.entities.find((product: any) => product.id === productId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [status, setStatus] = useState(product.status);

  const [error, setError] = useState(null);

  const handleTitle = (e: any) => setTitle(e.target.value);
  const handlePrice = (e: any) => setPrice(e.target.value);
  const handleStatus = (e: any) => setStatus(e.target.value);

  const handleClick = () => {
    if (title && price && status) {
      dispatch(
        productUpdated({
          id: productId,
          title,
          price,
          status,
        })
      );

      setError(null);
      history.push("/Crud-Page");
    } else {
      alert("Fill in all fields");
    }
  };

  return (
    <div>
      <div>
        <h1 id="toolkit_add_edit_product_header">Edit product Details</h1>
      </div>
      <div className="toolkit_add_edit_product_detail">
        <label htmlFor="nameInput" id="toolkit_add_edit_title">
          Title
        </label>
        <input id="q" type="text" onChange={handleTitle} value={title} />
        <label htmlFor="priceInput" id="toolkit_add_edit_price">
          Price
        </label>
        <input id="q" type="text" onChange={handlePrice} value={price} />
        <label htmlFor="statusInput" id="toolkit_add_edit_status">
          Status
        </label>
        <input id="q" type="text" onChange={handleStatus} value={status} />
        {error && error}
        <button onClick={handleClick} id="toolkit_add_edit_product_button">
          Save product
        </button>
      </div>
    </div>
  );
};
export default EditProduct;

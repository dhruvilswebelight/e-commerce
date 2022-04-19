import React, { useState } from "react";

const AddDetailForm = (props: any) => {
  const initialFormState = {
    id: null,
    img: "",
    title: "",
    price: "",
    status: "",
  };
  const [product, setProduct] = useState(initialFormState);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if ( !product.title || !product.price || !product.status)
          return;
        props.addProduct(product);
        setProduct(initialFormState);
      }}
    >
      <label>title</label>
      <input
        className="text"
        type="text"
        name="title"
        autoComplete="off"
        value={product.title}
        onChange={handleInputChange}
      />
      <label>price</label>
      <input 
        className="text"
        type="text"
        name="price"
        autoComplete="off"
        value={product.price}
        onChange={handleInputChange}
      />
      <label>Status</label>
      <input
        className="text"
        type="text"
        name="status"
        autoComplete="off"
        value={product.status}
        onChange={handleInputChange}
      />

      <button >Add new detail</button>
    </form>
  );
};

export default AddDetailForm;

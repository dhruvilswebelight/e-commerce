import React, { useState, useEffect } from "react";

const EditDetailForm = (props: any) => {
  const [product, setProduct] = useState(props.currentProduct);

  useEffect(() => {
    setProduct(props.currentProduct);
  }, [props]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateProduct(product.id, product);
      }}
    >
      <label>Title</label>
      <input
        className="text"
        type="text"
        name="title"
        autoComplete="off"
        value={product.title}
        onChange={handleInputChange}
      />
      <label>Price</label>
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
      <button >Update Details</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditDetailForm;

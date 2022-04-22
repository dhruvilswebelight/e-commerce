import { useEffect } from "react";

export default ({
  handleUpdate,
  handleCancelUpdate,
  handleChange,
  product,
  setProduct,
  selectedTodo,
  props
}: any) => {
  useEffect(() => {
    setProduct({
      title: selectedTodo.title,
      price: selectedTodo.price,
      status: selectedTodo.status,
    });
  }, [selectedTodo.title, selectedTodo.price, selectedTodo.status, setProduct]);


  return (
    <div className="edit_crud">
      <form
      
      onSubmit={(e) => e.preventDefault()}
      
      >
        <p id="edit_title">Edit Product Details</p>
        <label htmlFor="title" id="crud_label">
          Title
        </label>
        <input
          id="crud_input"
          autoComplete="off"
          value={product.title}
          name="title"
          onChange={handleChange}
        />
        <label htmlFor="price" id="crud_label">
          Price
        </label>
        <input
          id="crud_input"
          autoComplete="off"
          value={product.price}
          name="price"
          onChange={handleChange}
        />
        <label htmlFor="status" id="crud_label">
          status
        </label>
        <input
          id="crud_input"
          autoComplete="off"
          value={product.status}
          name="status"
          onChange={handleChange}
        />

        <input
          type="submit"
          autoComplete="off"
          id="update_product"
          value="Update Product"
          onClick={handleUpdate}
        />
        <button type="submit" id="cancel_crud" onClick={handleCancelUpdate}>
          Cancel
        </button>
      </form>
    </div>
  );
};

import { useDispatch } from "react-redux";
import { DeleteProduct } from "./CounterSlice";

export default ({
  title,
  price,
  status,
  product,
  handleSelectTodo,
  handleEdit,
  setIsEditMode,
}: any) => {
  const dispatch = useDispatch();

  const EditHandle = (ProductId: any) => {
    setIsEditMode(true);
    handleEdit();
    console.log(title);
    handleSelectTodo(ProductId);
  };
  return (
   

    <div className="notes">
      <div>
        <h3>Detail of Product</h3>
        <p>{title}</p>
        <p>{price}</p>
        <p>{status}</p>
      </div>
      <div className="form__buttons">
        <button onClick={() => dispatch(DeleteProduct(product.id))}>
          Delete
        </button>
        <button onClick={() => EditHandle(product.id)}>Edit product</button>
      </div>
    </div>
  );
};

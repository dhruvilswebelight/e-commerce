import { useDispatch } from "react-redux";
import { DeleteProduct } from "./ProductSlice";

const Table =  ({
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
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {product.length > 0 ? (
          product.map((product: any) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.status}</td>

              <td>
                <button
                  className="button muted-button"
                  onClick={() => EditHandle(product.id)}
                >
                  Edit
                </button>
                <button
                  className="button muted-button"
                  onClick={() => dispatch(DeleteProduct(product.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
           ))
        ) : (
          <tr>
            <td colSpan={3}>No products</td>
          </tr>
        )} 
      </tbody>
    </table>
  );
};
export default Table
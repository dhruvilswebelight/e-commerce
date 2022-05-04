import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { deleteProduct } from "../actions/productAction";
import { useDispatch } from "react-redux";

const  Table = ()=> {
  const products = useSelector((state:any) => state.product.products);
  console.log(products);

  const dispatch = useDispatch();
  return (
    <div>
      
      <table >
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col">status</th>
            <th scope="col">edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product:any) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.status}</td>
              <td>
                <Link to={"/edit/" + product.id}>Edit</Link>
              </td>
              <td
              
                onClick={() => dispatch(deleteProduct(product.id))}
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table

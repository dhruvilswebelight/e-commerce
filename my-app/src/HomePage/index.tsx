import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
  BrowserRouter,
} from "react-router-dom";

import Product from "./Product";
import ProductDetail from "./productDetail";
import LoginPage from "../LoginPage";
// import Crud from "./Redux/Crud";
import AddProduct from "../reduxToolkit/features/AddProduct";
import EditProduct from "../reduxToolkit/features/EditProduct";
import ProductList from "../reduxToolkit/features/ProductListTable";

import "../reduxToolkit/features/location.css";
import "./Product.css";
import "../Header.css";
import "./AddDelete.css";
// import Navbar from "../Redux/Components/Navbar";
// import Nav from "../Redux/Components/Nav";
const Homepage = () => {
  return (
    <div className="App">
      <Route exact path="/">
        <LoginPage />
      </Route>

      <Route exact path="/Home">
        <Product />
      </Route>

      <Route path="/Product_Detail-Page">
        <ProductDetail />
      </Route>

      {/* <Route path="/Crud-Page">
        <Navbar />
      </Route> */}

      {/* <Route path="/Crud-Page"> 
      <Crud />
       </Route> */}

      <Route path="/Crud-Page">
        <ProductList />
      </Route>
      <Route path="/add-product">
        <AddProduct />
      </Route>
      <Route path="/edit-product">
        <EditProduct />
      </Route>
    </div>
  );
};
export default Homepage;

import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  BrowserRouter,
} from "react-router-dom";

import Product from "./Product";
import ProductDetail from "./productDetail";
import LoginPage from "../LoginPage";
// import Crud from "./AddDelete";
import "./Product.css";
import "../Header.css";
import "./AddDelete.css";
import Crud from "./Redux/Crud";
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

      <Route path="/Crud-Page">
        <Crud />
      </Route>
    </div>
  );
};
export default Homepage;

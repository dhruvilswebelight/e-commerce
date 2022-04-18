import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  BrowserRouter,
} from "react-router-dom";

import Header from "./Header";
import Product from "./Product";
import ProductDetail from "./productDetail";
import LoginPage from "../LoginPage";
import Crud from "./AddDelete";
import "./Product.css";
import "../Header.css";
import "./AddDelete.css"


const Homepage = () => {
  return (
    <div className="App">
    

      <Route exact path="/">
        <LoginPage />
      </Route>
      {/* <section className="header">
        <Header />
      </section> */}
    
      <section>
      
        <Route exact path="/Home">
          <Product />
        </Route>

        <Route path="/Product_Detail-Page">
          <ProductDetail />
        </Route>

        <Route path="/Crud-Page">
          <Crud />
        </Route>
       
      </section>
    </div>
  );
};
export default Homepage;

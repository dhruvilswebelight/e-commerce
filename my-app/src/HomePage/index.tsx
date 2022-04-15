import React from "react";
import Header from "./Header";
import "../Header.css";
import "./Product.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  BrowserRouter,
} from "react-router-dom";

import Product from "./Product";
import ProductDetail from "./Productdetail";

const Homepage = () => {
  return (
    <>
      <section className="header">
        <Header />
      </section>
      <section className="">
        <Route exact path={"/Home-Page"}>
          <Product />
        </Route>
        <Route path="/Product_Detail-Page/:img">
          <ProductDetail />
        </Route>
      </section>
    </>
  );
};
export default Homepage;

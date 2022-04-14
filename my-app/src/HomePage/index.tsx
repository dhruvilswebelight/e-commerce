import React from "react";
import Header from "./Header";
import "../Header.css";
import "./Product.css";

import Product from "./Product";
import Productdetail from "./Productdetail";

const Homepage = () => {
  return (
    <>
      <section className="header">
        <Header />
      </section>
      <section className="">
        <Product />
      </section>
      {/* <section className="">
        <Productdetail/>
      </section> */}
    </>
  );
};
export default Homepage;

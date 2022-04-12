import React from "react";
import Header from "./Header";
import '../Header.css';
import './Product.css';

import Product from "./Product";


const Homepage = () => {
    return (
        <div className="header">

        <Header/>
        <Product/>

        </div>
    )
}
export default Homepage
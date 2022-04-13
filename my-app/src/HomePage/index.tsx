import React from "react";
import Header from "./Header";
import '../Header.css';
import './Product.css';

import Product from "./Product";


const Homepage = () => {
    return (
        <>
        <section className="header">
            {/* <div className="header"> */}
                <Header/>
            {/* </div> */}

        </section>
        <section className="">
        <Product/>

        </section>


        </>
    )
}
export default Homepage
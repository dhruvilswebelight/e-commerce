import React from "react";
import "./Products.css"
import logo from '../71Swqqe7XAL._AC_SX466_.jpg'




const Products = ({title,image,price}:any) => {
    return (
        <div className="products">
            <div className="products__info">
                <p>{title}</p>
                
                <p className="product__price">
                <small>₹</small>

              <strong>{price}</strong>

                </p>
            </div>
            <div>
            <img src={image} alt="logo" id="watch"/>
            </div>

        </div>
    )
}
export default Products
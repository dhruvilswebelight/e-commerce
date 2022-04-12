import React from "react";
import Products from "./Products";

const Product = () => {
    
    return (
        <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="background"
        />

        <div className="home__row">
         <Products title='MI Smart Watch' price={500}  
         image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'/>
         <Products title='Speaker'price={1000}  
         image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'/>
         <Products title='I-Pad'price={7000}  
         image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'/>
         <Products title='Apple TV'price={20000} 
          image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'/>
         

        </div>
        <div className="home__row">
            
            </div>
          </div>
        </div>

        
    )
}
export default Product
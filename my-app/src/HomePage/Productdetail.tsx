import React from "react";
import { Link } from "react-router-dom";


const Productdetail = (title: any) => {

  let data = [
    {
      des: "MI Bluetooth Wireless Smart Watch Fitness Band for Boys, Girls, Men, Women & Kids | Sports Watch for All Smart Phones I Heart Rate and BP",
      img: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
      Status: "in stock",
      price: "800",
      product_delivery_date: "22 april,2020",
    },
    {
      des: "JBL Go 2, Wireless Portable Bluetooth Speaker with Mic, JBL Signature Sound, Vibrant Color Options with IPX7 Waterproof & AUX (Black)",
      img: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
      Status: "in stock",
      price: "1500",
      product_delivery_date: "25 april,2020",
    },
    {
      des: "2021 Apple 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Space Black (9th Generation)",
      img: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
      Status: "in stock",
      price: "30000",
      product_delivery_date: "28 april,2020",
    },
    {
      des: "Samsung 108 cm (43 inches) Crystal 4K Series Ultra HD Smart LED TV UA43AUE60AKLXL (Black) (2021 Model)",
      img: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
      Status: "in stock",
      price: "56000",
      product_delivery_date: "29 april,2020",
    },
  ];
  return (
    <>
      <div className="">
        {data.map((item: any) => {
          return (
            <div key={item.image}>
              <div className="">
                <div className="">
                  <p>{item.des}</p>
                </div>

                <div>
                  <img src={item.img} alt="logo" id="" />
                </div>
                <div className="">
                  <p>{item.Status}</p>
                </div>
                <div className="">
                  <p>{item.price}</p>
                </div>
                <div className="">
                  <p>{item.product_delivery_date}</p>
                </div>
              </div>
              )
            </div>
          );
        })}
      </div>
      <Link to="/">
        <button>back</button>
      </Link>
      <button>Choose Payment Options</button>
    
    </>
  );
};
export default Productdetail;

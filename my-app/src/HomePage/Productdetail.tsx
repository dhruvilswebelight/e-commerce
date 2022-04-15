import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductDetail = (i: any) => {
  let data = [
    {
      des: "MI Bluetooth Wireless Smart Watch Fitness Band for Boys, Girls, Men, Women & Kids | Sports Watch for All Smart Phones I Heart Rate and BP",
      img: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
      Status: "in stock",
      price: "800",
      product_delivery_date: "22 april,2020",
      id: "1",
    },
    {
      des: "JBL Go 2, Wireless Portable Bluetooth Speaker with Mic, JBL Signature Sound, Vibrant Color Options with IPX7 Waterproof & AUX (Black)",
      img: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
      Status: "in stock",
      price: "1500",
      product_delivery_date: "25 april,2020",
      id: "2",
    },
    {
      des: "2021 Apple 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Space Black (9th Generation)",
      img: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
      Status: "in stock",
      price: "30000",
      product_delivery_date: "28 april,2020",
      id: "3",
    },
    {
      des: "Samsung 108 cm (43 inches) Crystal 4K Series Ultra HD Smart LED TV UA43AUE60AKLXL (Black) (2021 Model)",
      img: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
      Status: "in stock",
      price: "56000",
      product_delivery_date: "29 april,2020",
      id: "4",
    },
  ];

  const foundData = data.filter(({ id }) => id === "4" );
  console.log(foundData);

  // const [title, setTitle] = useState("");
  // const [foundData, setFoundData] = useState(data);
  // const filter = (e: any) => {
  //   const keyword = e.target.value;

  //   if (id !== "") {
  //     const results = data.filter((data: any) => {
  //       return data.title.toLowerCase().startsWith(id.toLowerCase());
  //     });
  //     setFoundData(results);
  //   } else {
  //     setFoundData(data);
  //   }
  //   setTitle(id);
  //   console.log(foundData, "foundData");
  // };

  return (
    <>
      <div className="">
        {foundData.map((i: any) => {
          return (
            <div key={i.image}>
              <div className="">
                <div className="">
                  <p>{i.des}</p>
                </div>
                <div>
                  <img src={i.img} alt="logo" id="" />
                </div>
                <div className="">
                  <p>{i.Status}</p>
                </div>
                <div className="">
                  <p>{i.price}</p>
                </div>
                <div className="">
                  <p>{i.product_delivery_date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/Home-page">
        <button>back</button>
      </Link>
      <button>Click to pay</button>
    </>
  );
};
export default ProductDetail;

import React, { useState } from "react";
import logo from "../icons8-search.svg";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Header = () => {
  const history = useHistory();

  // let data = [

  //   {
  //     title: "mi smart watch",
  //     img: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
  //   },
  //   {
  //     title: "speaker",
  //     img: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
  //   },
  //   {
  //     title: "i-pad",
  //     img: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
  //   },
  //   {
  //     title: "apple tv",
  //     img: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
  //   },
  // ];

  // const [title, setTitle] = useState("");
  // const [foundData, setFoundData] = useState(data);
  // const filter = (e: any) => {

  //   const keyword = e.target.value;

  //   if (keyword !== "") {
  //     const results = data.filter((data: any) => {
  //       return data.title.toLowerCase().startsWith(keyword.toLowerCase());
  //     });
  //     setFoundData(results);
  //   } else {
  //     setFoundData(data);
  //   }
  //   setTitle(keyword);
  //   console.log(foundData, "foundData");

  // };

  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />

      <div className="header__search">
        {/* <input
          className="header__searchInput"
        
          type="text"
          onChange={filter}
          placeholder="search"
          value={title}
        /> */}
        <img src={logo} alt="logo" id="logo" />
      </div>
      <div className="header__nav_option">
        <span className="header__nav_option_line1">Hello Guest</span>
        <span className="header__nav_option_line2">Sign In</span>
      </div>

      <div className="header__nav_option">
        <span className="header__nav_option_line1">Returns</span>
        <span className="header__nav_option_line2">Orders</span>
      </div>
      <div className="header__nav_cart">
        <ShoppingCartIcon />
        <span className="header__nav_cart_count"></span>
      </div>

      <button
        type="submit"
        className="logout"
        onClick={() => history.push("/Login-Page")}
      >
        {" "}
        Logout{" "}
      </button>
    </div>
  );
};
export default Header;

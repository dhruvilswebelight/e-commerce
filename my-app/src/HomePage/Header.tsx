import React, { useState } from "react";
import logo from '../icons8-search.svg'
import { useHistory } from 'react-router-dom'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Header = () => {
  const history = useHistory()
  
  // const [img,setImg] = useState("");
  // const inputEvent = (e:any) =>{
  //   const data = e.target.value;
  //   console.log(data);
  //   setImg(data);
  // }
  // const handleChange = (e:any) => {
  //   setImg(e.target.value);
  // }
  let data = [
    // filter: "",

  {
    title: "mi smart watch",
    img: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
  },
  {
    title: "speaker",
    img: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
  },
  {
    title: "i-pad",
    img: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
  },
  {
    title: "apple tv",
    img: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
  },
];
const [title,setTitle] = useState('');
  const [foundImage,setFoundImage] = useState(Header);
  const filter = (e:any) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = Header.filter((header:any) => {
        return header.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundImage(results);
    } else {
      setFoundImage(Header);
    }
    setTitle(keyword);
  };

//  const handleChange = (event:any) => {
//         data.setData({ filter: event.target.value });
//     };

//   const Product = ({ title, image }: any) => {
    
//       const { filter, data } = title.state;
//       const lowercasedFilter = filter.toLowerCase();
//       const filteredData = data.filter((item:any) => {
//         return Object.keys(item).some(key =>
//           item[key].toLowerCase().includes(lowercasedFilter)
//         );
//       });
    return (
        <div className="header">

       <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
        
      <div className="header__search">
        <input className="header__searchInput" 
        type="search"
        onChange={filter}
        // className="input"
        placeholder="Filter"
          //  onChange={handleChange}
           value={title}
        />
              <img src={logo} alt="logo" id="logo"/>
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
      
        <button type="submit" className="logout" onClick={() => history.push('/Login-Page')} > Logout  </button>

        </div>
    )
}
export default Header
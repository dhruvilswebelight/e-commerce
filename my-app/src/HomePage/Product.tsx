import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import logo from "../icons8-search.svg";
import "./Header.css";

const Product = () => {
  const history = useHistory();
  let data = [
    {
      title: "mi smart watch",
      img: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
    },
    {
      title: "speaker",
      img: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
    },
    {
      title: "i-pad",
      img: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
    },
    {
      title: "Samsung tv",
      img: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
    },
  ];

  const [title, setTitle] = useState("");
  const [foundData, setFoundData] = useState(data);
  const filter = (e: any) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = data.filter((data: any) => {
        return data.title.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundData(results);
    } else {
      setFoundData(data);
    }
    setTitle(keyword);
    console.log(foundData, "foundData");
  };

  return (
    <>
      <Header />
      <div className="home">
        <input
          type="text"
          id="search_filter"
          placeholder="Search"
          value={title}
          onChange={filter}
        ></input>
        <img src={logo} alt="logo" id="logo" />
        <div className="home__container">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="background"
          />
          <div className="home__row">
            {foundData.map((item: any) => {
              return (
                <div
                  key={item.image}
                  onClick={() => history.push("/Product_Detail-page")}
                >
                  <div className="products">
                    <div className="products__info">
                      <p>{item.title}</p>
                    </div>

                    <div>
                      <img src={item.img} alt="logo" id="watch" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;

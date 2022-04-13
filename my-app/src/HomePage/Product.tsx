import React, { useState } from "react";

const Product = ({ title, image }: any) => {
  //  const [img,setImg] = useState("");
  //  state =  {
  // filter: "",
  
  let data = [
      // filter: "",

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
      title: "apple tv",
      img: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
    },
  ];
  // };
  //  const handleChange = (event:any) => {
  //       data.setData({ filter: event.target.value });
  //     };

  // const Product = ({ title, image }: any) => {
    
      // const { filter, data } = title.state;
      // const filterTitle = filter.setTitle();
      // const filteredData = data.filter((item:any) => {
      //   return Object.keys(item).some(key =>
      //     item[key].title().includes(title)
      //   );
      // });

  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="background"
        />

        <div className="home__row">
            {/* <input value={filter} onChange={this.handleChange} /> */}
            {data.map((item: any) => {
              return (
              <div key={item.image}>
                <div className="products">
                  <div className="products__info">
                    <p>{item.title}</p>
                  </div>
                  <div>
                    <img src={item.img} alt="logo" id="watch" />
                  </div>
                </div>
                )
              </div>
             ) })}
          </div>
          {/* <Products 
            title='MI Smart Watch'
            image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'/>
       
         <Products 
            title='Speaker' 
            image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'/>
         <Products 
            title='I-Pad'
            image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'/>
         <Products 
            title='Apple TV'
            image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'/> */}
        </div>
    </div>
  );
};
export default Product

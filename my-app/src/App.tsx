import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';
import Homepage from './HomePage';



const App = () => {
  return (
    <div className="App">  
      {/* <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        /> */}
    
      {/* <p id="tag">--------------------------------------New to Amazon?-------------------------------------</p>
      <button type="submit" className="account" >Create Your Amazon Account</button> */}

      <header className="App-header">
      <LoginPage/>
      <Homepage/>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, useParams, BrowserRouter } from 'react-router-dom';

import LoginPage from './LoginPage';
import Homepage from './HomePage';



const App = () => {
  return (
    <div className="App">  
      <header className="App-header">
      <div>     
        <Route exact path = "/Home-Page">
        <Homepage />
      </Route>
      <Route path = "/Login-Page">
      <LoginPage/>
      </Route>  
  
     
    </div>
  
      </header>
    </div>
  );
}

export default App;

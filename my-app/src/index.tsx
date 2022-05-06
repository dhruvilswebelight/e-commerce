import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import Reducer from './HomePage/Redux/reducer';
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import "./index.css";
// import store from "./Redux/store"


// import store from "./HomePage/redux/store";


import store from "./reduxToolkit/store";
import { fetchProducts } from "./reduxToolkit/features/productsSlice";
store.dispatch(fetchProducts());



// const store = configureStore({
//   reducer:Reducer,
//   middleware: [thunk,logger],
// });

// import Reducer from "./HomePage/Redux/reducer";
// import { createStore } from 'redux'
// const store = createStore(Reducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

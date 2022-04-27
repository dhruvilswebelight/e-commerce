import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Reducer from './HomePage/Redux/reducer';
// import ProductSlice from "./HomePage/Redux/productSlice";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import logger from "redux-logger";


const store = configureStore({
  reducer:Reducer,
  middleware: [thunk,logger],
});

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

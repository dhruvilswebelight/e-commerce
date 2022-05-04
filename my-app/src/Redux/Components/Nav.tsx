import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const  Nav = () =>{
  return (
    <div >
      <ul>
        <li>
          <Link to="/Crud-Page">Home</Link>
        </li>
      </ul>
    </div>
  );
}
export default Nav

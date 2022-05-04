import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from ".//Table";
import Create from "./Create";
import EditProducts from "./EditProducts";
const Navbar =()=> {
  return (
    <Router>
      <div >
        <nav>
          <ul>
            <Link to="/Crud-Page">
              {" "}
              {/* <li> */}
                {/* <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" /> */}
              {/* </li> */}
            </Link>
            {/* <li> */}
              <Link to="/create" className="Redux_add">Add</Link>
            {/* </li> */}
          </ul>
        </nav>
        <Switch>
          <Route path="/edit/:id">
            <EditProducts/>
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <Table />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default Navbar
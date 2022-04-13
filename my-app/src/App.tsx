import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  BrowserRouter,
} from "react-router-dom";

import LoginPage from "./LoginPage";
import Homepage from "./HomePage";

const App = () => {
  return (
    <div className="App">
        <Route exact path={"/Home-Page"}>
          <Homepage />
        </Route>
        <Route path="/Login-Page">
          <LoginPage />
        </Route>
    </div>
  );
};

export default App;

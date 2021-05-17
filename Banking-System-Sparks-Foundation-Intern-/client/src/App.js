import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./App.css";

import AllUsers from "./components/AllUsers";
import ViewUser from "./components/ViewUser";
import TransactionPage from "./components/TransactionPage";
import Menu from "./components/Menu";
import History from "./components/History";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path = "/allUsers" exact component = {AllUsers} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

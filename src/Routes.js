import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Products from "./Products/Products";
import Home from "./Home/Home";
import history from "./history";
import Services from "./Services/Services";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Scheduler from "./Scheduler/Scheduler";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Products" component={Products} />
          <Route path="/Services" component={Services} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Scheduler" component={Scheduler} />
        </Switch>
      </Router>
    );
  }
}

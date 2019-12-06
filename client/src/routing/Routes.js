import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import NoPage from "../pages/404";
import Registration from "../pages/Registration";
import Signin from "../pages/Signin";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import ContactPage from "../pages/ContactPage";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/login" component={Signin} />
        <Route component={NoPage} />
      </Switch>
    </Fragment>
  );
};

export default Routes;

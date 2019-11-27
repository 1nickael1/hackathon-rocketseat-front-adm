import React from "react";
import { Route, Switch } from "react-router-dom";

// import pages
import { Main } from "layout";
import {
  Login,
  Dashboard,
  // import routers
} from "../pages";

// Protect Router

export const Routers = () => {
  return(
    <Main>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard/" component={Dashboard} />
      </Switch>
    </Main>
  );
};

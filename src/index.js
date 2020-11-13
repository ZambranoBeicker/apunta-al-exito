import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import StudentProfile from "views/StudentProfile/index.js";
import { Admin, SignUp, SignIn, ForgotPassword } from "views/Sign/index.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/profile-page" component={StudentProfile} />
      <Route path="/admin" component={Admin} />
      <Route path="/recuperar-clave" component={ForgotPassword} />
      <Route path="/registro" component={SignUp} />
      <Route path="/" component={SignIn} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

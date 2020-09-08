import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import StudentProfile from "views/StudentProfile/index.js";
import { Admin, SignUp, SignIn, ForgotPassword } from "views/Sign/index.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={ Admin } />
      <Route path="/recuperar-clave" component={ ForgotPassword } />
      <Route path="/ingresar" component={ SignIn } />
      <Route path="/registro" component={ SignUp } />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={StudentProfile} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

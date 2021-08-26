import React from "react";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginAction } from "./redux/actions/login";

import "./style/main.css";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
        <Route path="*" component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loginAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(App);
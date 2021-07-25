import React from "react";
import Homepage from "./pages/Homepage";
import Sign from "./pages/Sign";
import User from "./pages/User";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import "./style/main.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/Sign" exact component={Sign} />
        <Route path="/User" exact component={User} />
        <Route path="*" component={Error404} />
      </Switch>
      {/* footer */}
    </div>
  );
}

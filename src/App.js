import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/landingpage.component";
import Header from "./components/header/header.component";
import AboutUs from "./pages/aboutus/aboutus.component";
import SignIn from "./components/sign-in/sign-in.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;

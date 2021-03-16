import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./pages/landingpage/landingpage.component";
import Header from "./components/header/header.component";
import AboutUs from './pages/aboutus/aboutus.component';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutus" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;

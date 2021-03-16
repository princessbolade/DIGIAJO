import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/landingpage.component";
import Header from "./components/header/header.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from "react-router-dom";

import LandingPage from './pages/landingpage/landingpage.component';
import AboutUs from './pages/aboutus/aboutus.component'

import "./App.css";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutus" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;

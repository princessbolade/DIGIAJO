import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./pages/landingpage/landingpage.component";
import NavBar from "./components/NavBar/navBar";

import AboutUs from "./pages/aboutus/aboutus.component";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";
import Contact from "./pages/contact/contact.component";
import Testimonial from "./components/testimonial/testimonial.component";
import Faq from "./pages/FAQ/FAQ";
import Dashboard from "./pages/dashboard/dashboard.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/testimonial" component={Testimonial} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;

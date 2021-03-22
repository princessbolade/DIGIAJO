import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/landingpage.component";
import Header from "./components/header/header.component";
import AboutUs from "./pages/aboutus/aboutus.component";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";
import Contact from "./pages/contact/contact.component";
import Testimonial from "./components/testimonial/testimonial.component";
import Faq from "./pages/FAQ/FAQ";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/testimonial" component={Testimonial} />
        <Route exact path="/faq" component={Faq} />
      </Switch>
    </div>
  );
}

export default App;

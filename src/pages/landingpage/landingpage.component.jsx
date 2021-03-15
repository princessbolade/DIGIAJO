import React from "react";

import "./landingpage.css";

const LandingPage = () => (
  <div className="landingpage">
    <div className="body">
      <h1 className="landingheader">
        <strong>
          A Digital <br /> Savings Website.
        </strong>
      </h1>
      <p className="landingtext">
        DIGIAJO is a rotational savings club aimed at a group of individuals to
        save <br /> together in a form of peer-to-peer savings.Group members
        will contribute funds
        <br /> into a pool regularly, and take turns withdrawing funds from the
        pool.
      </p>
      <button className="getstartedbutton">GET STARTED</button>
    </div>
  </div>
);

export default LandingPage;

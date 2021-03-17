import React from "react";
import { Link } from "react-router-dom";
import DigisLogo from "../../assets/logo.svg";

import NavBar from "../NavBar/navBar";

const Header = () => (
  <div>
    <div className="h-24 flex w-full justify-between m-6">
      <Link to="/">
        <div
          className="flex justify-between w-36 h-32"
          style={{ paddingBottom: "30px", marginRight: "20px" }}
        >
          <img src={DigisLogo} alt="something" />
        </div>
      </Link>
      <NavBar />
    </div>
  </div>
);

export default Header;

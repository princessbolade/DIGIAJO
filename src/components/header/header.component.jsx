import React from "react";
import { Link } from "react-router-dom";
// import DigiLogo from "../../assets/diji.svg";
import DigisLogo from "../../assets/logo.svg";
// import { ReactComponent as Logo } from "../../assets/diji.svg";

import NavBar from "../NavBar/navBar";

const Header = () => (
  <div>
    <div className="h-24 flex w-full justify-between m-6">
      <Link to="/">
        <div className="flex justify-between w-8 h-6">
          {/* <img src={DigiLogo} alt="something" /> */}

          <img src={DigisLogo} alt="something" />
          {/* <Logo/> */}
        </div>
      </Link>
      <NavBar />
    </div>
  </div>
);

export default Header;

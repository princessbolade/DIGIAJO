import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import NavBar from "../NavBar/navBar";

const Header = () => (
  <div>
    <div className="h-24 flex w-full justify-between m-6">
      <Link to="/">
        <div class="flex justify-between">
          <div>
            <img className="w-24" src={Logo} alt="" />
          </div>
        </div>
      </Link>
      <NavBar />
    </div>
  </div>
);

export default Header;

import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => (
  <div>
    <ul class="flex mr-20 pt-4">
      <li class="ml-24">
        <div class="flex items-center justify-end">
          <div class="w-10 border-b border-solid border-blue-500"></div>
          <h1 class="ml-3 text-3xl font-bold">1</h1>
        </div>
        <Link to="/aboutus" class="text-right">
          ABOUT US
        </Link>
      </li>
      <li class="ml-24">
        <div class="flex items-center justify-end">
          <div class="w-10 border-b border-solid border-blue-500"></div>
          <h1 class="ml-3 text-3xl font-bold">2</h1>
        </div>
        <Link to="/groups" class="text-right">
          GROUPS
        </Link>
      </li>
      <li class="ml-24">
        <div class="flex items-center justify-end">
          <div class="w-10 border-b border-solid border-blue-500"></div>
          <h1 class="ml-3 text-3xl font-bold">3</h1>
        </div>
        <Link to="/faq" class="text-right">
          FAQ
        </Link>
      </li>

      <li class="ml-24">
        <Link to="contact" class="flex items-center justify-end">
          <div class="w-10 border-b border-solid border-blue-500"></div>
          <h1 class="ml-3 text-3xl font-bold">4</h1>
        </Link>
        <div class="text-right">CONTACT US</div>
      </li>
      <li class="ml-24">
        <div class="flex items-center justify-end">
          <div class="w-10 border-b border-solid border-blue-500"></div>
          <h1 class="ml-3 text-3xl font-bold">5</h1>
        </div>
        <Link to="/signin" class="text-right">
          SIGN IN
        </Link>
      </li>
    </ul>
  </div>
);
export default NavBar;

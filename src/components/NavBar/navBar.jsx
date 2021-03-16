import React from "react";
const NavBar = () => (
  <div>
    <ul class="flex mr-20 pt-8">
      <li class="ml-24">
        <div class="flex items-center justify-end">
          <div class="w-10 border-b border-solid border-blue-500"></div>
          <h1 class="ml-3 text-3xl font-bold">1</h1>
        </div>
        <div class="text-right">ABOUT US</div>
      </li>
      <li class="ml-24">
        <div class="flex items-center justify-end">
          <div class="w-10 border-b border-solid border-blue-500"></div>
          <h1 class="ml-3 text-3xl font-bold">2</h1>
        </div>
        <div class="text-right">GROUPS</div>
      </li>
      <li class="ml-24">
        <div class="flex items-center justify-end">
          <div class="w-10 border-b border-solid border-blue-500"></div>
          <h1 class="ml-3 text-3xl font-bold">3</h1>
        </div>
        <div class="text-right">FAQ</div>
      </li>

      <li class="ml-24">
        <div class="flex items-center justify-end">
          <div class="w-10 border-b border-solid border-blue-500"></div>
          <h1 class="ml-3 text-3xl font-bold">4</h1>
        </div>
        <div class="text-right">CONTACT US</div>
      </li>
    </ul>
  </div>
);
export default NavBar;

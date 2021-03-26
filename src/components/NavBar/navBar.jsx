import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import DigisLogo from "../../assets/logo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <nav className="bg-white py-10 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center justify-between md:w-full">
                <div className="flex-shrink-0">
                  <Link to="/">
                    <img className="h-20 w-26" src={DigisLogo} alt="Workflow" />
                  </Link>
                </div>
                <div className="hidden md:block flex-1">
                  <div className="ml-10 flex items-baseline space-x-4 justify-evenly">
                    <div>
                      <div className="flex items-center justify-end">
                        <div className="w-10 border-b border-solid border-blue-500"></div>
                        <h1 className="ml-3 text-3xl font-bold">1</h1>
                      </div>
                      <Link to="/aboutus" className="text-right">
                        ABOUT US
                      </Link>
                    </div>
                    <div>
                      <div className="flex items-center justify-end">
                        <div className="w-10 border-b border-solid border-blue-500"></div>
                        <h1 className="ml-3 text-3xl font-bold">2</h1>
                      </div>
                      <Link to="/groups" className="text-right">
                        GROUPS
                      </Link>
                    </div>
                    <div>
                      <div className="flex items-center justify-end">
                        <div className="w-10 border-b border-solid border-blue-500"></div>
                        <h1 className="ml-3 text-3xl font-bold">3</h1>
                      </div>
                      <Link to="/faq" className="text-right">
                        FAQ
                      </Link>
                    </div>
                    <div>
                      <div className="flex items-center justify-end">
                        <div className="w-10 border-b border-solid border-blue-500"></div>
                        <h1 className="ml-3 text-3xl font-bold">4</h1>
                      </div>
                      <Link to="/contact" className="text-right">
                        CONTACT US
                      </Link>
                    </div>
                    <div>
                      <div className="flex items-center justify-end">
                        <div className="w-10 border-b border-solid border-blue-500"></div>
                        <h1 className="ml-3 text-3xl font-bold">5</h1>
                      </div>
                      <Link to="/signin" className="text-right">
                        SIGN IN
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-blue-900 inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden pt-10" id="mobile-menu">
                <div
                  ref={ref}
                  className="px-2 pt-2 pb-3 space-y-1 sm:px-3 uppercase bg-blue-900"
                >
                  <a
                    href="/aboutus"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    About Us
                  </a>

                  <a
                    href="/groups"
                    className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Groups
                  </a>

                  <a
                    href="/faq"
                    className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    FAQ
                  </a>

                  <a
                    href="/contactus"
                    className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Contact Us
                  </a>

                  <a
                    href="/signin"
                    className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Sign in
                  </a>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    </>
  );
};

export default NavBar;

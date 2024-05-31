import React, { useState, useEffect } from "react";
import logo from "../Assets/logo.webp";
import person from "../Assets/person.png";
import cart2 from "../Assets/cart2.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [shrinkNavbar, setShrinkNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrinkNavbar(true);
      } else {
        setShrinkNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className={`bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-50 transition-all ${
        shrinkNavbar ? "h-16" : ""
      }`}
    >
      <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className={`h-24 w-24 transition-all ${
              shrinkNavbar ? "h-12 w-12" : ""
            }`}
          />
        </a>
        <div className="flex items-center lg:order-2">
          <div
            className={`mt-2 mr-4 sm:inline-block ${
              shrinkNavbar ? "hidden" : "block"
            }`}
          >
            <span></span>
          </div>

          <img
            src={person}
            alt="person"
            className={`h-5 w-5 mr-5 transition-all ${
              shrinkNavbar ? "h-3 w-3" : ""
            }`}
          />
          <img
            src={cart2}
            alt="cart2"
            className={`h-5 w-5 transition-all ${
              shrinkNavbar ? "h-3 w-3" : ""
            }`}
          />

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-900 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={showMenu ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${showMenu ? "hidden" : ""}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${showMenu ? "" : "hidden"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            showMenu
              ? "flex items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
              : "hidden lg:flex lg:w-auto lg:order-1"
          }`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-0 lg:mt-0">
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4 font-Poppins text-xl font-extrabold uppercase underline underline-offset-4 ${
                  shrinkNavbar ? "text-sm text-blue-700" : "text-yellow-500"
                }`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4 font-Poppins text-xl font-extrabold uppercase hover:text-yellow-500 hover:underline hover:underline-offset-4 border-gray-100 ${
                  shrinkNavbar ? "text-sm text-blue-700" : "text-blue-700"
                }`}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4 font-Poppins text-xl font-extrabold uppercase hover:text-yellow-500 hover:underline hover:underline-offset-4 border-gray-100 ${
                  shrinkNavbar ? "text-sm text-blue-700" : "text-blue-700"
                }`}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4 font-Poppins text-xl font-extrabold uppercase hover:text-yellow-500 hover:underline hover:underline-offset-4 border-gray-100 ${
                  shrinkNavbar ? "text-sm text-blue-700" : "text-blue-700"
                }`}
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pr-1 font-Poppins text-xl font-extrabold uppercase hover:text-yellow-500 hover:underline hover:underline-offset-4 border-gray-100 ${
                  shrinkNavbar ? "text-sm text-blue-700" : "text-blue-700"
                }`}
              >
                Franchising
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

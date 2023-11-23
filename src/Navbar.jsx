import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const NavOpen = () => {
    console.log("clicked");
    setNavOpen(true);
  };

  const NavClose = () => {
    setNavOpen(false);
  };

  return (
    <header className="bg-bg_300 fixed w-full top-0 left-0 z-50">
      <nav className="container w-3/4 relative h-14 flex justify-center items-center m-auto">
        <div>
          <a
            className="uppercase text-text_100 text-2xl font-oswald px-5"
            href="#"
          >
            IMTC<span className="text-accent_200">KElakam</span>
          </a>
        </div>
        <div
          id="nav-menu"
          className={`py-14 ${
            isNavOpen ? "" : "hidden"
          } absolute top-10 left-0 w-full bg-bg_300 md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto`}
        >
          <ul className="flex flex-col text-center md:flex-row text-text_200 gap-5 font-oswald">
            <li className="hover:text-text_100 ease-in duration-200">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-text_100 ease-in duration-200">
              <a href="#">About Us</a>
            </li>
            <li className="hover:text-text_100 ease-in duration-200">
              <a href="#">Our Clergy</a>
            </li>
            <li className="hover:text-text_100 ease-in duration-200">
              <a href="#">Office Bearers</a>
            </li>
            <li className="hover:text-text_100 ease-in duration-200">
              <a href="#">Kaisthana Samithi</a>
            </li>
            <li className="hover:text-text_100 ease-in duration-200">
              <a href="#">Organisation</a>
            </li>
            <li className="hover:text-text_100 ease-in duration-200">
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div
            id="fa-mark"
            onClick={NavClose}
            className="md:hidden absolute top-[0.7rem] right-4 cursor-pointer text-2xl"
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <div id="fa-bar" onClick={NavOpen} className="md:hidden">
          <FontAwesomeIcon icon={faBarsStaggered} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

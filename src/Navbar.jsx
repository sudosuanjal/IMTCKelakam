import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Navbar = () => {
  const navMenu = document.getElementById("nav-menu");
  const NavOpen = () => {
    navMenu.classList.remove("hidden");
  };
  const NavClose = () => {
    navMenu.classList.add("hidden");
  };

  return (
    <header className="bg-bg_100 fixed w-full top-0 left-0 z-50 px-5">
      <nav className=" container relative h-14 flex justify-center items-center gap-8">
        <div>
          <a className="uppercase text-text_100 text-2xl font-oswald" href="">
            IMTC<span className="text-primary_100">KElakam</span>
          </a>
        </div>
        <div
          id="nav-menu"
          className="py-14 hidden absolute top-0 left-0 w-full bg-bg_100 md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto"
        >
          <ul className="flex flex-col text-center md:flex-row text-text_200 gap-5 font-oswald">
            <li className="hover:text-primary_300 ease-in duration-200">
              <a href="">Home</a>
            </li>
            <li className="hover:text-primary_300 ease-in duration-200">
              <a href="">About Us</a>
            </li>
            <li className="hover:text-primary_300 ease-in duration-200">
              <a href="">Our Clergy</a>
            </li>
            <li className="hover:text-primary_300 ease-in duration-200">
              <a href="">Office Bearers</a>
            </li>
            <li className="hover:text-primary_300 ease-in duration-200">
              <a href="">Kaisthana Samithi</a>
            </li>
            <li className="hover:text-primary_300 ease-in duration-200">
              <a href="">Organisation</a>
            </li>
            <li className="hover:text-primary_300 ease-in duration-200">
              <a href="">Contact Us</a>
            </li>
          </ul>
          <div
            onClick={NavClose}
            className="md:hidden absolute top-[0.7rem] right-4 cursor-pointer text-2xl"
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <div onClick={NavOpen} className="md:hidden">
          <FontAwesomeIcon icon={faBarsStaggered} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

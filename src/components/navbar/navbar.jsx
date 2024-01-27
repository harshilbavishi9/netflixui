import React, { useState } from "react";
import {
  ArrowDropDown,
  Notifications,
  SearchTwoTone,
  Close,
} from "@mui/icons-material";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left-menu">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <div className={`mobile-menu ${isMenuOpen ? "menu-open" : ""}`}>
            <div className="menu-button" onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="menu-items">
              <Close className="close-button" onClick={closeMenu} />
              <span>Homepage</span>
              <span>Series</span>
              <span>Movies</span>
              <span>New and Popular</span>
              <span>My List</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
          <SearchTwoTone className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
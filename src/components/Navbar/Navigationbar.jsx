import React, { useState } from "react";
import "./Nav.css";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const [clicksts, changeSts] = useState(true);

  function handleButtonNav() {
    changeSts(() => {
      return !clicksts;
    });
  }
  function handleButtonNav2() {
    changeSts(() => {
      return true;
    });
  }
  return (
    <motion.nav
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={
        clicksts
          ? "navbar navbar-expand-lg sticky bg-transparent"
          : "navbar navbar-expand-lg sticky "
      }>
      <a className="navbar-brand" href="#home">
        <img src={require("./skull.png").default} alt="serpent_logo" />
      </a>

      <button
        onClick={handleButtonNav}
        className={clicksts ? "navbar-toggler" : "navbar-toggler active"}
        type="button"
        data-toggle="collapse"
        data-target="/navbarTwo"
        aria-controls="navbarTwo"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
      </button>

      <motion.div
        className={
          clicksts
            ? "collapse navbar-collapse sub-menu-bar "
            : "collapse navbar-collapse sub-menu-bar show"
        }
        id="navbarTwo">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active" onClick={handleButtonNav2}>
            <AnchorLink className="page-scroll" href="#home">
              .home( )
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              className="page-scroll"
              href="#portfolio"
              onClick={handleButtonNav2}>
              .portFolio( )
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              className="page-scroll"
              href="#about"
              onClick={handleButtonNav2}>
              .aboutMe( )
            </AnchorLink>
          </li>
        </ul>
      </motion.div>

      <div className="navbar-btn d-none d-sm-inline-block"></div>
    </motion.nav>
  );
}

export default Navbar;

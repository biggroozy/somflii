import React from "react";
import ButtonX1 from "./ButtonSignUp";
import Logo from "./Logo";

import styles from "../styles/boxes.module.css";
import "../styles/navbar.css";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <section className="navbar df-padd">
      <div className="navbar-logo">
        <Logo />
      </div>
      <nav className={`navbar-nav ${styles.box_01}`}>
        <Menu type={`menu menu-top`} />
      </nav>
      <div className="navbar-right">
        <ButtonX1
          name="Sign Up"
          path="/sign-up"
          styles="btn-sign-up borderin-3 fs-4"
        />
      </div>
    </section>
  );
};

export default Navbar;

import React from "react";
import "../styles/Footer.css";
import styles from "../styles/boxes.module.css";
import Menu from "./Menu";
import Logo from "./Logo";

const Footer = () => {
  return (
    <section className={`footer ${styles.box_01}`}>
      <div className="footer-top">
        <div className="footer-logo">
          <Logo />
          <p>Tasty, timed, under you</p>
        </div>
        <Menu type="menu-footer" />
      </div>
      <div className="footer-bottom">
        <p>
          © 2024 <span>feastofy</span>. Powered by biggroozy
        </p>
      </div>
    </section>
  );
};

export default Footer;

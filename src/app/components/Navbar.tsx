"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { nav_data } from "../lib/nav_data";
import "../styles/navbar.css";
import styles from "../styles/boxes.module.css";
import ButtonX1 from "./ButtonSignUp";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <section className="navbar df-padd">
      <div className="navbar-logo"></div>
      <nav className={`navbar-nav ${styles.box_01}`}>
        {nav_data.map((item, number) => (
          <Link
            key={number}
            className={`link fs-3 ${pathname === item.path ? "active" : ""}`}
            href={item.path}
          >
            {item.name}
          </Link>
        ))}
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

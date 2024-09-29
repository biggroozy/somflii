"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <section className="navbar">
      <div className="navbar-logo"></div>
      <nav className="navbar-nav">
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          Home
        </Link>
        <Link
          className={`link ${pathname === "/recipes" ? "active" : ""}`}
          href="/recipes"
        >
          Recipes
        </Link>
        <Link
          className={`link ${pathname === "/about-us" ? "active" : ""}`}
          href="/about-us"
        >
          About us
        </Link>
        <Link
          className={`link ${pathname === "/contact" ? "active" : ""}`}
          href="/contact"
        >
          Contact
        </Link>
      </nav>
      <div className="navbar-right"></div>
    </section>
  );
};

export default Navbar;

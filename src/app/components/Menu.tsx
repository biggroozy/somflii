"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { nav_data } from "../lib/nav_data";
import Link from "next/link";

import "../styles/Menu.css";

const Menu = ({ type }: { type: string }) => {
  const pathname = usePathname();
  return (
    <div className={`menu ${type}`}>
      {nav_data.map((item, number) => (
        <Link
          className={`link fs-3 ${pathname === item.path ? "active" : ""}`}
          key={number}
          href={item.path}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;

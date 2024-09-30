"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "../styles/buttons.css";

const ButtonX1 = ({
  name,
  styles,
  path,
}: {
  name: string;
  styles: string;
  path: string;
}) => {
  const router = useRouter();
  return (
    <button className={styles} onClick={() => router.push(`${path}`)}>
      {name}
    </button>
  );
};

export default ButtonX1;

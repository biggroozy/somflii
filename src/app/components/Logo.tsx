import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/images/feastofy-logo-b.png"
      alt="Logo"
      width={200}
      height={100}
      layout="intrinsic"
    />
  );
};

export default Logo;

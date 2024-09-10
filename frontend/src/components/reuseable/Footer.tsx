import React from "react";
import logo from "/logo.png";

export const Footer = () => {
  return (
    <footer className="w-full px-5 flex items-center justify-between">
      <div>
        <img className="w-[100px]" src={logo} alt="" />
      </div>

      <div>© 2024 BlocSafe - EthSafari</div>
    </footer>
  );
};

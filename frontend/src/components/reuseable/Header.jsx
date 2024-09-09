import React from "react";
import logo from "/logo.png";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-5 py-2 ">
      <div>
        <img className="w-[100px]" src={logo} alt="" />
      </div>

      <div>
        {/* <a className="text-md mr-2" href="#">How it Works</a>
        <a className="text-md ml-2" href="#">Features</a> */}
      </div>

      <div>{/* <button>Get Started</button> */}</div>
    </header>
  );
};

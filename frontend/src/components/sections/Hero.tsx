import React from "react";
import globe from "/globe.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="w-full text-center py-20">
      <h2 className="text-7xl font-bold">
        Securing your transactions, <br />
        today and beyond.
      </h2>

      {/* <MdOutlineArrowOutward /> */}

      <div className="mt-10">
        <p className="text-lg">
          Empowering seamless, secure transactions with trusted protection for
          both parties, <br />
          ensuring peace of mind and transparency throughout every exchange.
        </p>
      </div>

      <div className="mt-5 flex w-full items-center justify-center">
        <Link
          to={"#"}
          className="flex font-bold w-fit border-b-2 pb-2 text-3xl items-center justify-center"
        >
          Get Started
          <MdOutlineArrowOutward />{" "}
        </Link>

        <a
          href={"#how"}
          className="flex font-bold w-fit border-b-2 pb-2 text-3xl items-center justify-center ml-10"
        >
          How it Works
          <MdOutlineArrowOutward />{" "}
        </a>
      </div>

      <div className="w-full flex items-center justify-center mt-10">
        <img className="w-[650px] max-w-full" src={globe} alt="" />
      </div>
    </section>
  );
};

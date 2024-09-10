import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

export const AfterHero = () => {
  return (
    <section className="w-full p-4 pb-[150px] border-b-2 border-b-gray-300 flex justify-between items-center">
      <div className=" md:w-[45%]">
        <div className="flex items-center text-2xl">
          <span className="text-blue-700">
            <PiStarFourFill />
          </span>
          <h3 className="uppercase ml-2">About Us</h3>
        </div>
        <div className="mt-2">
          <h3 className="text-6xl font-bold">
            About our <br /> escrow service
          </h3>

          <p className="mt-4 font-extralight text-lg">
            At our escrow service, we prioritize secure and transparent
            transactions, offering a reliable platform where both parties can
            confidently engage in seamless digital exchanges with full
            protection.
          </p>

          <Link
            to={"#"}
            className="flex mt-10 font-bold w-fit border-b-2 pb-2 text-3xl items-center justify-center"
          >
            Get in Touch
            <MdOutlineArrowOutward />{" "}
          </Link>
        </div>
      </div>

      {/* right */}

      <div className="md:w-[45%] flex flex-col items-center justify-center">
        <div className="w-full flex">
          <div>
            <div className="flex text-6xl font-bold md:text-8xl">
              <h3>20</h3>
              <h3 className="text-blue-700 ml-2">+</h3>
            </div>
            <p className="mt-3">Successful Deals</p>
          </div>

          <div className="ml-10">
            <div className="flex text-6xl md:text-8xl font-bold">
              <h3>50</h3>
              <h3 className="text-blue-700 ml-2">+</h3>
            </div>
            <p className="mt-3">Active Users</p>
          </div>
        </div>

        <div className="w-full flex mt-10">
          <div>
            <div className="flex text-6xl font-bold md:text-8xl">
              <h3>3M</h3>
              <h3 className="text-blue-700 ml-2">+</h3>
            </div>
            <p className="mt-3">Crypto Secured</p>
          </div>

          <div className="ml-10">
            <div className="flex text-6xl font-bold md:text-8xl">
              <h3>15</h3>
              <h3 className="text-blue-700 ml-2">+</h3>
            </div>
            <p className="mt-3">Trusted Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

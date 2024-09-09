import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { RiSmartphoneFill } from "react-icons/ri";

export const Usecase = () => {
  return (
    <section className="pt-[150px] w-full justify-between  pb-[150px] border-b-2 border-b-gray-300">
      <div className=" md:w-[45%]">
        <div className="flex items-center text-2xl">
          <span className="text-blue-700">
            <PiStarFourFill />
          </span>
          <h3 className="uppercase ml-2">focuses</h3>
        </div>
        <div className="mt-2">
          <h3 className="text-6xl font-bold">
            Usecases for <br /> Our Escrow Service
          </h3>
        </div>
      </div>

      {/* right */}

      <div className="w-full flex items-center justify-center mt-20">
        <div className="md:w-[45%] border-r-4 mr-5 p-4">
          <h3 className="text-4xl mb-3 font-bold">Freelance & Remote Work</h3>
          <p className="text-3xl">
            Our escrow service ensures secure payment for freelancers and remote
            workers, protecting both clients and service providers.
          </p>
        </div>

        <div className="md:w-[45%] p-4">
          <h3 className="text-4xl mb-3 font-bold">E-commerce Transactions</h3>
          <p className="text-3xl">
            Facilitate safe online purchases with our escrow service, providing
            buyers and sellers peace of mind during digital transactions.
          </p>
        </div>
      </div>
    </section>
  );
};

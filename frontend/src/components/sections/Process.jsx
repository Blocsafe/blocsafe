import React from "react";
import { PiStarFourFill } from "react-icons/pi";

export const Process = () => {
  return (
    <section
      id="how"
      className="pt-[150px] w-full flex justify-between  pb-[150px] border-b-2 border-b-gray-300"
    >
      <div className=" md:w-[45%]">
        <div className="flex items-center text-2xl">
          <span className="text-blue-700">
            <PiStarFourFill />
          </span>
          <h3 className="uppercase ml-2">Process</h3>
        </div>
        <div className="mt-2">
          <h3 className="text-6xl font-bold">Our approach</h3>
        </div>
      </div>

      {/* right */}

      <div className="md:w-[45%] flex flex-col items-center justify-center">
        <div className="py-10 border-b-2">
          <h3 className="text-blue-700 text-2xl font-bold">/ 01</h3>
          <h2 className="font-bold text-4xl my-2">Initiate Transaction</h2>
          <p className="text-lg">
            Start by creating a transaction with the terms agreed upon by both
            parties. The funds are securely held in escrow until all conditions
            are met, ensuring trust and transparency.
          </p>
        </div>

        <div className="py-10 border-b-2">
          <h3 className="text-blue-700 text-2xl font-bold">/ 02</h3>
          <h2 className="font-bold text-4xl my-2">Confirm Agreement</h2>
          <p className="text-lg">
            Both parties review and agree to the transaction terms. Once
            everything is confirmed, the escrow holds the funds until
            obligations are fulfilled by both sides.
          </p>
        </div>

        <div className="py-10">
          <h3 className="text-blue-700 text-2xl font-bold">/ 03</h3>
          <h2 className="font-bold text-4xl my-2">Release Funds</h2>
          <p className="text-lg">
            When both parties have completed their obligations, the funds are
            released to the recipient, ensuring a smooth, secure, and fair
            transaction for everyone involved.
          </p>
        </div>
      </div>
    </section>
  );
};

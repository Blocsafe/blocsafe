import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { MdOutlineArrowOutward } from "react-icons/md";

export const Team = () => {
  return (
    <section className="pt-[250px] w-full justify-between  pb-[150px] border-b-2 border-b-gray-300">
      <div className=" w-full flex flex-col items-center justify-center text-center">
        <div className="flex items-center text-2xl">
          <span className="text-blue-700">
            <PiStarFourFill />
          </span>
          <h3 className="uppercase ml-2">team</h3>
        </div>
        <div className="mt-2">
          <h3 className="text-6xl font-bold">Meet Our Team</h3>

          <p className="mt-4 font-extralight text-lg w-[500px]">
            We are a dedicated professionals committed to ensuring secure and
            transparent transactions. With diverse expertise and a shared
            vision, we work together to deliver exceptional escrow services.
          </p>
        </div>
      </div>

      {/* right */}

      <div className="w-full flex items-center justify-center mt-20">
        <div className="md:w-[350px] border border-white h-400px">
          <img className="max-w-full" src="/joy.webp" alt="" />

          <a target="_blank" href="https://www.joyverse.tech/">
            <div className="p-4 flex justify-between">
              <div>
                <h3 className="text-3xl hover:text-blue-700">Joy Egbu</h3>
                <p>Product Manager - Software Eng.</p>
              </div>

              <div className="text-3xl hover:text-blue-700">
                <MdOutlineArrowOutward />
              </div>
            </div>
          </a>
        </div>

        <div className="md:w-[350px] border border-white">
          <div className="w-full flex items-center justify-center">
            <img className="max-w-full h-[280px]" src="/collins.jpeg" alt="" />
          </div>
          <a target="_blank" href="https://collinsoribo.vercel.app">
            <div className="p-4 flex justify-between">
              <div>
                <h3 className="text-3xl hover:text-blue-700">Collins Adi</h3>
                <p>Software Engineer</p>
              </div>

              <div className="text-3xl hover:text-blue-700">
                <MdOutlineArrowOutward />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

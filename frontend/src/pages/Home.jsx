import React from "react";
import { Header } from "../components/reuseable/Header";
import { Hero } from "../components/sections/Hero";
import { AfterHero } from "../components/sections/AfterHero";
import { Process } from "../components/sections/Process";
import { Usecase } from "../components/sections/Usecase";
import { Team } from "../components/sections/Team";
import { Footer } from "../components/reuseable/Footer";

export const Home = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-[1400px] flex items-center justify-center flex-col bg-black text-white">
        <Header />
        <Hero />
        <AfterHero />
        <Process />
        <Usecase />
        <Team />
        <Footer />
      </div>
    </div>
  );
};

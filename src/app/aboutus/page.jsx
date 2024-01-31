"use client";
import React from "react";
import Navbar from "@/components/Navbar/index";
import Hero from "@/components/Hero";
import { TeamDetails } from "./data";

const Card = ({ Designation, Name, Image }) => {
  return (
    <div className="w-3/4 sm:w-1/3 md:w-1/4 h-96 rounded-2xl text-white bg-transparent">
      <div className="w-full h-[70%] relative flex justify-center items-center"><img src={Image} className="absolute object-contain h-full"/></div>
      <div className="w-full h-[30%]">
        <div className="w-full h-[40%] mt-4 text-center lg:text-xl text-md tracking-wide">{Name}</div>
        <div className="w-full h-[40%] text-center text-sm lg:text-lg"><span>{Designation}</span></div>
      </div>
    </div>
  );
};

const Aboutus = () => {
  return (
    <>
      <div
        id="page1"
        className="bg-[#12121c] h-[100vh] w-[100%] relative text-white"
      >
        <img
          src="Layer_1.svg"
          className="absolute pointer-events-none asset top-0  left-0 h-[200px] md:h-[280px]  xl:h-[340px]"
        />
        <img
          src="Ellipse 22.svg"
          className="absolute  pointer-events-none asset top-0 left-0 h-[260px] md:h-[340px] xl:h-[420px]"
        />
        <Navbar />
        <Hero maintext="ABOUT US" subtext="The Team Behind the fest" />
      </div>
      <div className="mt-[10vh] w-full flex flex-wrap items-center justify-center gap-8">
        {TeamDetails.map((elem, i) => {
          return (
            <Card
              key={i}
              Designation={elem.Designation}
              Name={elem.Name}
              Image={elem.Image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Aboutus;

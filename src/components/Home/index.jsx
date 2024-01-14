"use client";
import React from "react";
import Navbar from "@/components/Navbar/index";
import Hero from "@/components/Hero/index3";
import OurVideos from "../our-videos/OurVideos";
import Compitition from "../compitition/Compitition";
import Heighlight from "../heighlight/Heighlight";
import Footer from "../footer/Footer";

export default function Index() {

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
        <Hero maintext="ADVITIYA'24" subtext="TechFest IIT ROPAR" />
      </div>

      <div id="page2" className="w-[100%]">
        <OurVideos />
      </div>

      <div id="page3" className=" w-[100%]">
        <Compitition />
      </div>

      <div id="page4" className="w-[100%]">
        <Heighlight />
      </div>

      <div id="page5" className="w-[100%]">
        <Footer />

      </div>

    </>
  );
}

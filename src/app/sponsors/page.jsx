"use client";
import React from "react";
import Navbar from "@/components/Navbar/index";
import Hero from "@/components/Hero/index3";
import Marquee from "react-fast-marquee";
import { imagedata1,imagedata2 } from "./data";
import Footer from "@/components/footer/Footer";
const FAQs = () => {

 
  
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
        <Hero maintext="Sponsors" subtext="" order={0} imgsrc2={"./model.png"} />
      </div>
      <div className="h-[100vh] w-full pt-8 ">
        {/* <h1 className="w-full text-center text-2xl text-white mb-8">Our  Sponsors</h1> */}
        <Marquee speed={80} className="h-2/5 marq1 overflow-y-hidden">
          {imagedata1.map((data,i)=>(
            <div key={i} className="image_wrapper mx-[30px] h-full ">
            <img src={data} className="h-[300px] object-contain"></img>
          </div>
          ))}
        </Marquee>
        <Marquee direction="right" speed={80} className="h-2/5 marq1 mt-8 overflow-y-hidden">
        {imagedata2.map((data,i)=>(
            <div key={i} className="image_wrapper mx-[30px] h-full ">
            <img src={data} className="h-[300px] object-contain"></img>
          </div>
          ))}
        </Marquee>
       
      </div>
      <Footer/>
    </>
  );
};

export default FAQs;

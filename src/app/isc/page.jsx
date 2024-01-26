"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/footer/Footer";
import Heighlight from "@/components/heighlight/Heighlight";
import ContactUs from "@/components/inter/ContactUs";
import RegistrationProcess from "@/components/inter/RegistrationProcess";
import AboutUs from "@/components/inter/AboutUs";
import OurPrize from "@/components/inter/OurPrize";
import Conduction from "@/components/conduction/Conduction";
import Testimonials from "@/components/testimonials/Testimonials";
import ISCFAQs from "@/components/FAQs/ISC_FAQs"
const ISC = () => {
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
        <Hero maintext="Inter School Conclave" subtext="" />
      </div>

      <AboutUs />
      <Conduction/>
      <RegistrationProcess />
      <Testimonials/>
      <OurPrize />
      <Heighlight />
      <ISCFAQs/>
      <ContactUs />
      <Footer />
    </>
  );
};

export default ISC;

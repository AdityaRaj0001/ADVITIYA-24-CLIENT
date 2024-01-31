"use client";
import React from "react";
import Navbar from "@/components/Navbar/index";
import Hero from "@/components/Hero/index 2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const data = [
  {
    Q: "Question 1",
    A: "Here is the answer for Question 1",
  },
  {
    Q: "Question 2",
    A: "Here is the answer for Question 2",
  },
  {
    Q: "Question 3",
    A: "Here is the answer for Question 3",
  },
  {
    Q: "Question 4",
    A: "Here is the answer for Question 4",
  },
  {
    Q: "Question 5",
    A: "Here is the answer for Question 5",
  },
  {
    Q: "Question 6",
    A: "Here is the answer for Question 5",
  },
  {
    Q: "Question 7",
    A: "Here is the answer for Question 5",
  },
  {
    Q: "Question 8",
    A: "Here is the answer for Question 5",
  },
];

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
      <Hero  maintext="FAQs  Page" subtext="" />
    </div>
    <div className="h-[100vh] mt-12 text-white relative z-20 flex  justify-center  w-full">
      <img src="./Registrationdesign.svg" className="absolute -z-10 w-[300px] hidden lg:block lg:w-[400px]  lg:-top-[20%] lg:right-0" />
      <img src="./Testimonialbg.svg" className="absolute -z-10 w-[500px] block lg:hidden left-0 bottom-0 opacity-70" />

    <Accordion type="single" collapsible className="w-[90%] max-w-4xl">
      {data.map((obj,i)=>{
        return (
          <AccordionItem value={`item-${i}`} className="border-b-0 mb-4">
          <AccordionTrigger className="bg-gray-900 hover:no-underline h-14  border-b-2 border-violet-500 rounded-lg px-2">{obj.q}</AccordionTrigger>
          <AccordionContent className="bg-transparent px-4 py-4">
            {obj.a}
          </AccordionContent>
        </AccordionItem>
        )
      })}
    </Accordion>
    </div>

    </>
  );
};

export default FAQs;

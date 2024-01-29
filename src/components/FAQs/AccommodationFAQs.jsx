"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const data = [
  {
    Q: "Question 1 for Accommodation",
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
];

const FAQs = () => {
  return (
    <>
    <div className="h-[100vh] -mt-12 text-white relative z-20 flex flex-col items-center justify-center  w-full">
      {/* <img src="./Registrationdesign.svg" className="absolute -z-10 w-[300px] hidden lg:block lg:w-[400px]  lg:-top-[20%] lg:right-0" />
      <img src="./Testimonialbg.svg" className="absolute -z-10 w-[500px] block lg:hidden left-0 bottom-0 opacity-70" /> */}
    {/* <h1 className="text-2xl text-center w-full mb-12">FAQs</h1> */}
    <Accordion type="single" collapsible className="w-[90%] max-w-4xl">
      {data.map((obj,i)=>{
        return (
          <AccordionItem value={`item-${i}`} className="border-b-0 mb-4">
          <AccordionTrigger className="bg-gray-900 hover:no-underline h-14  border-b-2 border-violet-500 rounded-lg px-2">{obj.Q}</AccordionTrigger>
          <AccordionContent className="bg-transparent px-4 py-4">
            {obj.A}
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

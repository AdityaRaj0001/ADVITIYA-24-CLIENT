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
    Q: "Is it mandatory to attend olympiad for participating in events on 17th february?",
    A: "No, It's not important to attend Olympiad.",
  },
  {
    Q: "How many students from a school can participate on ISC Day?",
    A: "There is no limit on number of students."
    
  },
  {
    Q: "If my school is not participating in the event, Can I still attend the event?",
    A: "Yes a student can attend the event even if his/her school is not participating in the event.",
  },
  {
    Q: "Is olympiad free of cost to attend?",
    A: "Yes Olympiad is free of cost. The Charges is just for registration to visit the campus.",
  },
  {
    Q: "How to register for the ISC?",
    A: "Just fill the form along with the proof ",
  },
];

const FAQs = () => {
  return (
    <>
    <div className="h-[100vh] -mt-12 text-white relative z-20 flex flex-col items-center justify-center  w-full">
      <img src="./Registrationdesign.svg" className="absolute -z-10 w-[300px] hidden lg:block lg:w-[400px]  lg:-top-[20%] lg:right-0" />
      <img src="./Testimonialbg.svg" className="absolute -z-10 w-[500px] block lg:hidden left-0 bottom-0 opacity-70" />
    <h1 className="text-2xl text-center w-full mb-12">FAQs</h1>
    <Accordion type="single" collapsible className="w-[90%] max-w-4xl">
      {data.map((obj,i)=>{
        return (
          <AccordionItem key={i} value={`item-${i}`} className="border-b-0 mb-4">
          <AccordionTrigger className="bg-gray-900 hover:no-underline h-14  border-b-2 border-violet-500 rounded-lg px-2 text-left">{obj.Q}</AccordionTrigger>
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

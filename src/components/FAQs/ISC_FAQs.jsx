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
    Q: "Is it mandatory to attend Quiz/Science and Art competitions on 17th february in order to attend the other campus events in the fest?",
    A: "No, it is not mandatory it is only intended to add to your experience. You can enjoy other activities in the fest without participating in any competition.",
  },
  {
    Q: "How many students from a school can participate on ISC Day?",
    A: "There is no limit on number of students."
    
  },
  {
    Q: "If my school is not participating in the event, Can I still attend the event?",
    A: "Yes a student can attend the event even if his/her school is not participating in the event. You can participate by forming groups of 3 to 5 with your friends",
  },
  // {
  //   Q: "Is olympiad free of cost to attend?",
  //   A: "Yes Olympiad is free of cost. The Charges is just for registration to visit the campus.",
  // },
  {
    Q: "How to register for the ISC?",
    A: "Go to the Registration section above. And choose from School-Side Registration or Indidual Registration. School-Side Registration form is only meant to be filled by the Schools",
  },
];

const FAQs = () => {
  return (
    <>
    <div className="h-[100vh] mt-12 text-white relative z-20 flex flex-col items-center justify-center  w-full">
      <img src="./Registrationdesign.svg" className="absolute -z-10 w-[300px] hidden lg:block lg:w-[400px]  lg:-top-[20%] lg:right-0" />
      <img src="./Testimonialbg.svg" className="absolute -z-10 w-[500px] block lg:hidden left-0 bottom-0 opacity-70" />
    <h1 className="text-2xl text-center w-full mb-12">FAQs</h1>
    <Accordion type="single" collapsible className="w-[90%] max-w-4xl">
      {data.map((obj,i)=>{
        return (
          <AccordionItem key={i} value={`item-${i}`} className="border-b-0 mb-4">
          <AccordionTrigger className="bg-gray-900 hover:no-underline h-24 lg:h-16  border-b-2 border-violet-500 rounded-lg px-2 text-sm  text-left">{obj.Q}</AccordionTrigger>
          <AccordionContent className="bg-transparent px-4 py-4 tracking-widest">
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

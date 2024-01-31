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
    Q: "How to avail the free accomodation?",
    A: "If you have registered in any competitions or workshop, then you are eligible for free accomodation if you apply before 15th Feb. You simply have to fill the accomodation form",
  },
  {
    Q: "What are the arrangements for accommodation if we aren't participating in any events?",
    A: "In such case, you can avail the accommodation by paying 150 per day on your arrival. You will be alloted your dorm/room on walk-in basis.",
  },
  {
    Q: "When will I get allotement of my accommodation?",
    A: "You will be alloted your dorm/room once you do check-in after arriving at our campus. But we will share your POC on 15th Feb",
  },
  {
    Q: "For what duration will the free accommodation be available?",
    A: "The free accomodation will be available from 16th Feb to 18th Feb.",
  },
  {
    Q: "Will the team members be given accommodation at the same place?",
    A: "We will make sure that you get your desired dorm/room; But in case of urgency, we cannot guarantee you for it.",
  },
  {
    Q: "Does the free accommodation include the food facility as well?",
    A: "No, the accommodation is only for stay, you can have food at different outlets at our campus.",
  },
  {
    Q: "What is the procedure to be followed after we reach IIT Ropar?",
    A: "You should directly call and contact your POC, he/she will help you to the registration desk and will take you to your dorm/room.",
  },
];

const FAQs = () => {
  return (
    <>
    <div className="h-[120vh] mt-56 lg:mt-12  text-white relative z-20 flex flex-col items-center justify-center  w-full">
      {/* <img src="./Registrationdesign.svg" className="absolute -z-10 w-[300px] hidden lg:block lg:w-[400px]  lg:-top-[20%] lg:right-0" />
      <img src="./Testimonialbg.svg" className="absolute -z-10 w-[500px] block lg:hidden left-0 bottom-0 opacity-70" /> */}
    {/* <h1 className="text-2xl text-center w-full mb-12">FAQs</h1> */}
    <Accordion type="single" collapsible className="w-[90%] mt-8 max-w-4xl">
      {data.map((obj,i)=>{
        return (
          <AccordionItem key={i} value={`item-${i}`} className="border-b-0 mb-4">
          <AccordionTrigger className="bg-gray-900 hover:no-underline h-24 lg:h-14 text-left border-b-2 border-violet-500 rounded-lg px-2">{obj.Q}</AccordionTrigger>
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

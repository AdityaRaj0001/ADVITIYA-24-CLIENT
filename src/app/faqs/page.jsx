"use client";
import React from "react";
import Navbar from "@/components/Navbar/index";
import Hero from "@/components/Hero/index";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Footer from "@/components/footer/Footer";

const data = [
  {
    Q: "What is ADVITIYA?",
    A: "ADVITIYA, the annual Technical festival of IIT Ropar, stands as the largest technical fest in North India, attracting over 25,000 participants from colleges nationwide. True to its name, 'ADVITIYA' signifies uniqueness and innovation.",
  },
  {
    Q: "When and where does ADVITIYA take place?",
    A: "ADVITIYA'24 is scheduled to take place on February 16th, 17th, and 18th, 2024, at the IIT ROPAR Campus.",
  },
  {
    Q: "What is the theme of Advitiya?",
    A: "The theme of ADVITIYA'24 is 'India Vision-2047'. With this theme, we want to dive into the endless possibilities of future tech.",
  },
  {
    Q: "Who can participate in ADVITIYA?",
    A: "Any college or school student and anyone who is eager to explore the future of technology, is welcome to participate in ADVITIYA under the theme 'India Vision-2047'.",
  },
  {
    Q: "How can I register for ADVITIYA?",
    A: "You can visit this link for registering yourself in various competitions. There is no need for any registration for attending the talks.",
  },
  {
    Q: "Is there a registration fee for ADVITIYA?",
    A: "No, the registration charges are absolutely free for any competition.",
  },
  {
    Q: "Are there any accommodation facilities provided for outstation participants?",
    A: "Yes, free accommodation is provided to all the participants who have registered in at least one of the competitions or workshops.",
  },
  {
    Q: "Can I participate in multiple events at ADVITIYA?",
    A: "Yes, you can participate in any number of events/competitions. Just make sure you have registered for the event and try to avoid time clashes.",
  },
  {
    Q: "How are winners determined in ADVITIYA events?",
    A: "Winners will be adjudged according to the rules outlined in the respective event's rulebook, available separately.",
  },
  {
    Q: "What are the prizes for a winner in a competition?",
    A: "All the participants will get a certificate of participation, and the winners will be awarded certificates + medals + mementos + associated prizes.",
  },
  {
    Q: "Who can I contact for further information about ADVITIYA?",
    A: "You can visit the contact page to get the contact details of members with respect to your query.",
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
    <div className="h-auto mt-12 text-white relative z-20 flex  justify-center  w-full">
      <img src="./Registrationdesign.svg" className="absolute -z-10 w-[300px] hidden lg:block lg:w-[400px]  lg:-top-[20%] lg:right-0" />
      <img src="./Testimonialbg.svg" className="absolute -z-10 w-[500px] block lg:hidden left-0 bottom-0 opacity-70" />

    <Accordion type="single" collapsible className="w-[90%] max-w-4xl">
      {data.map((obj,i)=>{
        return (
          <AccordionItem key={i} value={`item-${i}`} className="border-b-0 mb-4">
          <AccordionTrigger className="bg-gray-900 hover:no-underline h-20 lg:h-14 text-left  border-b-2 border-violet-500 rounded-lg px-2 tracking-wider ">{obj.Q}</AccordionTrigger>
          <AccordionContent className="bg-transparent px-4 py-4 ">
            {obj.A}
          </AccordionContent>
        </AccordionItem>
        )
      })}
    </Accordion>
    </div>
    <Footer/>

    </>
  );
};

export default FAQs;

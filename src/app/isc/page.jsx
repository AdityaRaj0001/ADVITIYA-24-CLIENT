"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { FaAnglesDown } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import Nav from "../../components/navigation/page";
import Heighlight from "@/components/heighlight/Heighlight";
import compititionStructure1 from "@/assets/images/compititionStructure1.png";
import Image from "next/image";
import Heading from "@/components/heading/Heading";
import Incbg from "../../assets/images/indbg.svg";
import "../globals.css";
import hexagonal from "../../assets/images/hexagonal.svg";

const ISC = () => {
  const data = [
    {
      title: "What is TSP?",
      about:
        "Zeitgeist’23 presents the second edition of TSP,i.e, Techno School Program, a school outreach program for 8th to 12th-grade students. It consists of an annual competition wherein students compete in two phases of the Open Olympiad and flex their skills through the Junior Scientist Competition. Phase 1 of the Olympiad will be conducted in schools if the school is participating and if students are directly registering then it will be conducted online on 16th march from 6.00 pm to 7.30 pm. Phase 2 will be conducted during Zeitgeist’23 on 23rd March   Lead More. ",
    },
    {
      title: "Why TSP?",
      about:
        "TSP aims to bring together the best young minds from all over the country under one roof and to expose the students to the technical culture of IIT Ropar. The main objective of which is developing and nurturing younger minds of the country at the grassroots level. It provides a platform for school kids to learn core experience and knowledge, exercise coordination abilities, to think outside the box while proposing solutions. ",
    },
  ];
  const page1 = useRef();

  return (
    <>
      <div
        ref={page1}
        className="bg-[#12121c] page1 h-[100vh] w-[100%] relative text-white"
      >
        <Nav />

        <div
          id="hero"
          className="h-[calc(100%-65px)] relative hero flex flex-col gap-10 justify-center items-center overflow-hidden w-[100%] "
        >
          {/* <div className="relative flex items-center justify-center xl:w-[100vw] h-[100%]">

            <div
              className="absolute z-50 xl:static xl:w-1/2 flex flex-col   bg-cover bg-center xl:bg-[url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "
              id="heromain"
            >
              <h1 className="text-4xl sm:text-6xl  text-center  md:text-7xl lg:text-8xl xl:text-7xl font-bold herotext">
                ADVITIYA&#39;24
              </h1>
              <p className="herosubtext text-right xl:text-center    tracking-wide font-semibold text-md sm:text-xl md:text-2xl lg:text-4xl xl:text-3xl bg-transparent">
                TechFest IIT ROPAR
              </p>
            </div>
            <div className="relative   xl:flex xl:items-center xl:justify-center h-[70%] sm:h-[75%] md:h-[80%] xl:w-1/2 xl:h-[100%]">

            <img src="./Arwork1.svg" className=" z-30 opacity-70 xl:opacity-100  asset h-[100%] xl:h-[80%] " />
            <img
              src="./Vector Smart Object 1.svg"
              className="absolute asset blur-sm z-10  h-[90px] top-24 -right-12 xl:top-44 xl:right-8"
            />
            <img
              src="./Asset 9@4x 1.svg"
              className="absolute asset z-10  h-[90px] bottom-44 -left-12 xl:bottom-64 xl:left-4 xl:h-[120px] "
            />
            <img
              src="./Asset 4@10x 1.svg"
              className="hidden xl:block xl:absolute asset z-10 h-[60px]  xl:top-32 xl:left-44 xl:h-[100px]"
            />
            </div>
          </div> */}

          {/* <div id="scrolldown" className=" absolute bottom-10 text-5xl mt-20">
            <FaAnglesDown />
          </div> */}
          <div
            id="scrolldown"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest mt-20"
          >
            <h1>Coming Soon</h1>
          </div>
        </div>
      </div>
      <div id="page2" className="w-[100%]">
        <div className=" w-full    relative">
          <Image
            className="absolute max-w-[400px] right-0 rotate-45 z-10"
            style={{ top: -70 }}
            src={compititionStructure1}
          />
          <div className=" mx-auto max-w-[90%]">
            <Heading title="Our Abpot us" heading="About Us" />
            <div className="grid grid-cols-2 pt-[56px] gap-2">
              {data.map((item, i) => (
                <Box index={i} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="page3" className="w-[100%] mt-[60px] conbg relative ">

          <div className="absolute max-w-[500px] w-[50%] top-10 left-10 rounded-full  bg-[#8FE600] opacity-20 blur-[202px] aspect-square">
          <Image className="w-[40%] opacity-10" src={hexagonal} />
          </div>


                    <div className="flex justify-between items-center py-20 mx-auto w-[90%]   ">
                    <Heading title="CONDUCTION" heading="Conduction" />
                    <div className="flex ">
                      <div>
                            <h4 className="text-[13px] text-white border-l-4 border-l-color-white pl-3 " style={{lineHeight:"25px"}}>The event will be organized in two <br/>categories.Category-1: 8th to 10th <br/> classNameCategory-2: 11th and 12th className</h4>
                      </div>

                    </div>
                    </div>
      </div>
    </>
  );
};

export default ISC;

const Box = ({ data }) => (
  <div>
    <div className="pb-[59px] pt-[78px] pr-[68px] pl-[96px] bg-cover bg-center relative aboutbg h-[435px]">
      {/* <Image
    src={Incbg}
    className=" absolute max-w-90% "
    /> */}
      <h2 className="uppercase italic text-[#fff] pb-5">{data.title}</h2>
      <p className=" text-[13px] text-white " style={{ lineHeight: "20px" }}>
        {data.about}
      </p>
    </div>
  </div>
);

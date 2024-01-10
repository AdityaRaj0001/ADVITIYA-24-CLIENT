"use client";
import React from "react";
import styled from "styled-components";
import { Card } from "../../components/nCard";
import { eventsData } from "./data";
import Link from "next/link";
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
import Nav from "../../components/navigation/page"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 20px;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const Hovercard = () => {
  return (
    <>
      <GridContainer className="bg-[#12121c]">
        {eventsData.map((events, index) => (
          <Link key={index} href="/events/[category]" as={`/events/${events.text}`}>
            <Card
              text={events.text}
              smalltext={events.smalltext}
              largetext={events.smalltext}
              image={events.image}
              circleColor={events.circleColor}
            />
          </Link>
        ))}

      </GridContainer>
    </>
  );
};

const Main = () => {
  const page1 = useRef();


  return (
    <>
      <div
        ref={page1}
        className="bg-[#12121c] page1 h-[100vh] w-[100%] relative text-white"
      >
          <Nav/>

        <div
          id="hero"
          className="h-[calc(100%-65px)] relative hero flex flex-col gap-10 justify-center items-center overflow-hidden w-[100%] "
        >
          {/* <div className="relative flex items-center justify-center xl:w-[100vw] h-[100%]">
            <div
              className="absolute z-50 xl:static xl:w-1/2 flex flex-col   bg-cover bg-center xl:bg-[url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "
              id="heromain"
            >
              <h1 className="text-5xl    text-center  md:text-7xl font-bold herotext">
                Events
              </h1>
              <p className="herosubtext tracking-widest hidden text-right xl:block xl:text-center  font-semibold text-md sm:text-xl md:text-2xl lg:text-4xl xl:text-3xl bg-transparent">
                Page
              </p>
            </div>
            <div className="relative   xl:flex xl:items-center xl:justify-center h-[70%] sm:h-[75%] md:h-[80%] xl:w-1/2 xl:h-[100%]">
              <img
                src="./sculpture.svg"
                className=" z-30 opacity-70 xl:opacity-100  asset h-[100%] xl:h-[80%] "
              />
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
          </div>

          <div id="scrolldown" className=" absolute bottom-10 text-5xl mt-20">
            <FaAnglesDown />
          </div> */}
          <div id="scrolldown" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest mt-20">
            <h1>Coming Soon</h1>
          </div>
        </div>
      </div>

      {/* <Hovercard /> */}
    </>
  );
};

export default Main;

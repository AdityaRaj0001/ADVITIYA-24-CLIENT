"use client";
import React from "react";
import Navbar from "@/components/Navbar/index";
import Hero from "@/components/Hero";
import styled from "styled-components";
import { Card,Card4 } from "../../components/nCard";
import { eventsData } from "./data";
import Link from "next/link";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 130px;
  padding: 20px;
  justify-content: center;
  place-items:center;
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
            <Card4  text={events.text}
              // smalltext={events.smalltext}
              largetext={events.smalltext}
              image={events.image}/>
          </Link>
        ))}

      </GridContainer>
    </>
  );
};

const Main = () => {


 
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
      <Hero maintext="Events" subtext="Page" />
    </div>

      <Hovercard />
      
    </>
  );
};

export default Main;

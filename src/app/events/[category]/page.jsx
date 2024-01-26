"use client";
import React from "react";
import styled from "styled-components";
import { Card4  } from "../../../components/nCard";
import Link from "next/link";
import {progeventsData, mechaeventsData,esportsData,depteventsData,fintecheventsData,digitalarteventsData,zenitheventsData} from "../data";
import Navbar from "@/components/Navbar/index2";
import Hero from "@/components/Hero/index1";
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

const Main = ({ params }) => {
  
  const getDataArray = (category) => {
    console.log(category)
    switch (category) {
      case "Coding-Events":
        return progeventsData;
      case "MechaTronics":
        return mechaeventsData;
      case "ESportZ":
        return esportsData;
      case "Department-Specific":
        return depteventsData;
      case "FinTech":
        return fintecheventsData;
      case "Digi-Art":
        return digitalarteventsData;
      case "Space-Tech":
        return zenitheventsData;
      // Add more cases if you have additional categories
      default:
        return [];
    }
  };

  const eventsdataToMap = getDataArray(params.category);

  return (
    <>
      <div
        id="page1"
        className="bg-[#12121c] h-[100vh] w-[100%] relative text-white"
      >
        <img
          src="../Layer_1.svg"
          className="absolute pointer-events-none asset top-0  left-0 h-[200px] md:h-[280px]  xl:h-[340px]"
        />
        <img
          src="../Ellipse 22.svg"
          className="absolute  pointer-events-none asset top-0 left-0 h-[260px] md:h-[340px] xl:h-[420px]"
        />
        <Navbar />
        <Hero maintext={params.category} subtext="" />
      </div>

      <GridContainer className="bg-[#12121c]">
        {eventsdataToMap.map((event, index) => (
          <Link
            key={index}
            href={`/events/${params.category}/[event]`}
            as={`/events/${params.category}/${event.text}`}
          >
            <Card4  text={event.text}
              // smalltext={events.smalltext}
              largetext={event.smalltext}
              image={event.image}/>
          </Link>
        ))}
      </GridContainer>
    </>
  );
};

export default Main;

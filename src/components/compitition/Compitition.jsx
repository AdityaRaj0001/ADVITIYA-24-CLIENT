import React from "react";
import Heading from "../heading/Heading";
import Image from "next/image";
import compitition1 from "../../assets/images/compitition1.jpg";
import { BlueLight, CardBorder } from "@/assets/Icons";
import compititionStructure1 from "../../assets/images/compititionStructure1.png";
import hexagonal from "../../assets/images/hexagonal.svg";
import Link from "next/link";
const Compitition = () => {
  const data = [
    {
      image: "./zones.jpeg",
      title: "Zones",
      redirectURL: "/zones",
    },
    {
      image: "./talk-show.jpeg",
      title: "Talk-Shows",
      redirectURL: "/talkshows",
    },
    {
      image: "./competitions.jpeg",
      title: "Competitions",
      redirectURL: "/competitions",
    },
    {
      image: "./exhibitions.jpeg",
      title: "Exhibitions",
      redirectURL: "/exhibitions",
    },
    {
      image: "./workshops.jpeg",
      title: "Workshops",
      redirectURL: "/workshops",
    },
  ];

  return (
    <div className="relative overflow-hidden text-[#fff]">
      <div
        className="text-[100px] hidden lg:block top-0 bottom-0 text-transparent left-20 absolute italic opacity-20 -z-30"
        style={{ transform: "rotate(-90deg)", WebkitTextStroke: "2px #fff" }}
      >
        COMPETITIONS
      </div>
      <div className="hidden lg:block">
        <div className="absolute max-w-[600px] top-5  left-0 ">
          <Image className="w-full opacity-20" src={hexagonal} />
          <div className="absolute max-w-[500px] w-[50%] top-10 left-10 rounded-full  bg-[#9c78e4] opacity-20 blur-[202px] aspect-square"></div>
        </div>
        <Image
          className="absolute max-w-[400px] right-0 rotate-45 -z-10"
          style={{ top: -70 }}
          src={compititionStructure1}
        />
      </div>
      <div className=" max-w-[80%] lg:max-w-[90%] mx-auto">
        <Heading title="events" heading="Competitions" />

        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[50px] gap-[30px] lg:my-[100px] my-[40px] ">
          {data?.map((item, i) => {
            return <Link href={item.redirectURL} key={i}><Card data={item}  /></Link>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Compitition;

const Card = ({ data }) => (
  <div className="relative aspect-square ">
    <div className="absolute  bottom-0 right-0 left-0 top-0">
      <CardBorder />
    </div>

    <div className="absolute top-0 bottom-0 left-0 right-0 pt-32 flex items-center justify-center">
      <BlueLight />
    </div>
    <div className="relative lg:p-[35px] lg:pt-[25px] p-7 pt-5 h-full">
      <div className="lg:h-[80%] h-[76%]">
        <img
          style={{
            clipPath: "polygon(58% 0%, 100% 36%, 100% 100%, 0 100%, 0 0)",
          }}
          className="h-[100%] ml-8 mt-4  object-cover"
          src={data?.image}
        />
      </div>

      <div className="lg:mt-[25px] mt-5">
        <h3 className=" text-[28px] lg:text-[25px]  text-center   font-bold text-[#d8c5ff]">
          {data?.title}
        </h3>
      </div>
    </div>
  </div>
);

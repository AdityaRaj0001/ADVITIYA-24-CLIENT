import React from "react";
import Heading from "../heading/Heading";
import Image from "next/image";
import compitition1 from "../../assets/images/compitition1.jpg";
import { BlueLight, CardBorder } from "@/assets/Icons";
import compititionStructure1 from "../../assets/images/compititionStructure1.png";
import hexagonal from "../../assets/images/hexagonal.svg";

const Compitition = () => {
  const data = [
    {
      image: compitition1,
      title: "COZMOCLENCH",
      price: "1,00,000",
    },
    {
      image: compitition1,
      title: "COZMOCLENCH",
      price: "1,00,000",
    },
    {
      image: compitition1,
      title: "COZMOCLENCH",
      price: "1,00,000",
    },
    {
      image: compitition1,
      title: "COZMOCLENCH",
      price: "1,00,000",
    },
    {
      image: compitition1,
      title: "COZMOCLENCH",
      price: "1,00,000",
    },
    {
      image: compitition1,
      title: "COZMOCLENCH",
      price: "1,00,000",
    },
  ];
  return (
    <div className="relative overflow-hidden text-[#fff]">
      <div
        className="text-[100px] hidden lg:block top-0 bottom-0 text-transparent left-20 absolute italic opacity-20 z-30"
        style={{ transform: "rotate(-90deg)", WebkitTextStroke: "2px #fff" }}
      >
        COMPETITIONS
      </div>
      <div className="hidden lg:block">
        <div className="absolute max-w-[600px] top-5  left-0 ">
          <Image className="w-full opacity-20" src={hexagonal} />
          <div className="absolute max-w-[500px] w-[50%] top-10 left-10 rounded-full  bg-[#8FE600] opacity-20 blur-[202px] aspect-square"></div>
        </div>
        <Image
          className="absolute max-w-[400px] right-0 rotate-45 z-10"
          style={{ top: -70 }}
          src={compititionStructure1}
        />
      </div>
      <div className=" max-w-[90%] mx-auto">
        <Heading title="Competitions" heading="Competitions" />

        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[50px] gap-[30px] lg:my-[100px] my-[40px] ">
          {data?.map((item, i) => (
            <Card data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compitition;

const Card = ({ data }) => (
  <div className="relative aspect-square">
    <div className="absolute bottom-0 right-0 left-0 top-0">
      <CardBorder />
    </div>

    <div className="absolute top-0 bottom-0 left-0 right-0 pt-32 flex items-center justify-center">
      <BlueLight />
    </div>
    <div className="relative lg:p-[35px] lg:pt-[25px] p-7 pt-5 h-full">
      <div className="lg:h-[80%] h-[76%]">
        <Image
          style={{
            clipPath: "polygon(63% 0%, 100% 36%, 100% 100%, 0 100%, 0 0)",
          }}
          className="h-[100%]  object-cover"
          src={data?.image}
        />
      </div>

      <div className="lg:mt-[25px] mt-5">
        <h3 className="lg:text-[25px] text-[20px] font-bold ">{data?.title}</h3>
        <p className="lg:text-[15px] text-[14px] text-[#ccc]">
          (INR {data?.price})
        </p>
      </div>
    </div>
  </div>
);

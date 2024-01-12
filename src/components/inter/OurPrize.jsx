import Image from "next/image";
import React from "react";
import ourprize from "../../assets/images/ourprize.svg";
import Heading from "../heading/Heading";

const OurPrize = () => {
  return (
    <div className="w-[90%] mx-auto relative text-white my-[40px] lg:my-0 lg:top-[-80px]">
      <Heading title={"OUR PRIZE"} />
      <Image className="hidden lg:block" src={ourprize} />

      <div className="lg:absolute top-[275px] bottom-10 lg:w-[57%] left-10 grid lg:grid-cols-2 gap-7 lg:gap-0 mt-7 lg:mt-0 ">
        <div className="lg:p-7">
          <h2 className="text-xl uppercase italic">Open Olympiad</h2>
          <p className="text-xs opacity-90 pt-4">
            Prizes worth INR 25,000 distributed amongst the winners of both
            categories.
          </p>
          <p className="text-xs opacity-90 pt-4">
            All the grand finalists will be awarded certifiates of excellence
            and goodies.
          </p>
          <p className="text-xs opacity-90 pt-4">
            For schools with participation of 50+ students per category, a
            school winner shall be declared and awarded with goodies and
            participation.
          </p>
        </div>

        <div className="lg:p-7">
          <h2 className="text-xl uppercase italic">
            Junior Scientist Competition
          </h2>
          <p className="text-xs opacity-90 pt-4">
            The junior scientist competition holds prizes worth INR 25000.
          </p>
          <p className="text-xs opacity-90 pt-4">
            All the participants of the junior scientist competition shall be
            awarded a certificate of participation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPrize;

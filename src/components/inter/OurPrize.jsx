import Image from "next/image";
import React from "react";
import ourprize from "../../assets/images/ourprize.svg";
import Heading from "../heading/Heading";

const OurPrize = () => {
  return (
    <div className="w-[90%] mx-auto relative text-white my-[40px] lg:my-0 lg:top-[-80px]">
     <span className="lg:hidden"> <Heading title={"Our Prizes"} /></span>
     
      <Image className="hidden lg:block" src={ourprize} />

      <div className="lg:absolute top-[275px] bottom-10 lg:w-[57%] left-10 grid lg:grid-cols-2 gap-7 lg:gap-0 mt-7 lg:mt-0 ">
        <div className="lg:px-4">
          <h2 className="text-xl uppercase italic">Quiz Competition</h2>
          <p className="text-xs opacity-90 pt-4 ">
          Advitiya 2024&apos;s Inter School Conclave&apos;s quiz competition offers top three teams trophies, certificates, and medals.
          </p>
          <p className="text-xs opacity-90 pt-4">
          Participants earn certificates of participation, recognizing their engagement. 
          </p> 
           {/* <p className="text-xs opacity-90 pt-4">
            For schools with participation of 50+ students per category, a
            school winner shall be declared and awarded with goodies and
            participation.
          </p> */}
        </div>

        <div className="lg:px-4">
          <h2 className="text-lg uppercase italic ">
            Science & Art Competition
          </h2>
          <p className="text-xs opacity-90 pt-4">
          Advitiya 2024's Inter School Conclave's Science and Art competition offers top three teams trophies, certificates, and medals.
          </p>
          <p className="text-xs opacity-90 pt-4">
            All the participants of Science and Art competition shall be
            awarded a certificate of participation.
          </p>
        </div>
        <p className="text-white text-sm text-left px-4 w-[200%] mt-4">In addition to these every registered student will be getting certificate of participation</p>
      </div>
    </div>
  );
};

export default OurPrize;

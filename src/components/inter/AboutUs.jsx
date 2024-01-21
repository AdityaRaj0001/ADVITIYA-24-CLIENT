import Image from "next/image";
import React from "react";
import aboutUsCard1 from "../../assets/images/aboutUsCard2.svg";
import aboutUsCyclone from "../../assets/images/aboutUsCyclone.svg";
import Heading from "../heading/Heading";

const AboutUs = () => {
  return (
    <div className="text-white">
      <div className="w-[90%] mx-auto ">
        <Heading heading={"About Us"} title={"About us"} />
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-[55px] mt-[25px] lg:gap-[50px] gap-[10px]">
          <div className="w-full relative">
            <Image
              className="absolute hidden lg:block w-[250px] object-contain"
              style={{ bottom: -50, left: -100 }}
              src={aboutUsCyclone}
            />
            <Image src={aboutUsCard1} className="relative z-10" />

            <div className="absolute z-10 top-0 right-0 left-0 bottom-0 lg:px-[50px] lg:py-[60px] px-5 py-7">
              <h2 className="lg:text-xl text-base uppercase italic">
                What is ISC?
              </h2>
              <p className="lg:text-sm text-xs lg:pt-4 pt-1">
                <span className=" opacity-90">
                  <span className="lg:hidden">
                    {" "}
                    Zeitgeist’23 presents the second edition of ISC,i.e, Techno
                    School Program, a school outreach program for 8th to
                    12th-grade students. It consists of an annual competition
                    wherein students compete in two phases of the Open Olympiad
                    and
                  </span>

                  <span className="hidden lg:block">
                    Zeitgeist’23 presents the second edition of ISC,i.e, Techno
                    School Program, a school outreach program for 8th to
                    12th-grade students. It consists of an annual competition
                    wherein students compete in two phases of the Open Olympiad
                    and flex their skills through the Junior Scientist
                    Competition. Phase 1 of the Olympiad will be conducted in
                    schools if the school is participating and if students are
                    directly registering then it will be conducted online on
                    16th march from 6.00 pm to 7.30 pm. Phase 2 will be
                    conducted during Zeitgeist’23 on 23rd March Lead More.
                  </span>
                </span>{" "}
                <button className="underline"> Read More.</button>
              </p>
            </div>
          </div>
          <div className="relative">
            <Image src={aboutUsCard1} className="z-10 relative" />
            <Image
              className="absolute hidden lg:block w-[250px] object-contain"
              style={{ bottom: -50, right: -50 }}
              src={aboutUsCyclone}
            />

            <div className="absolute z-10 top-0 right-0 left-0 bottom-0 lg:px-[50px] lg:py-[60px] px-5 py-7">
              <h2 className="lg:text-xl text-base uppercase italic">
                Why ISC?
              </h2>
              <p className="lg:text-sm text-xs lg:pt-4 pt-1">
                <span className=" opacity-90">
                  <span className="lg:hidden">
                    ISC aims to bring together the best young minds from all
                    over the country under one roof and to expose the students
                    to the technical culture of IIT Ropar. The main objective of
                    which is developing and{" "}
                  </span>

                  <span className="hidden lg:block">
                    ISC aims to bring together the best young minds from all
                    over the country under one roof and to expose the students
                    to the technical culture of IIT Ropar. The main objective of
                    which is developing and nurturing younger minds of the
                    country at the grassroots level. It provides a platform for
                    school kids to learn core experience and knowledge, exercise
                    coordination abilities, to think outside the box while
                    proposing solutions.
                  </span>
                </span>{" "}
                <button className="underline lg:hidden"> Read More.</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

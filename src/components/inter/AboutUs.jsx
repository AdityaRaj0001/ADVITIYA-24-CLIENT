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
            <Image src={aboutUsCard1} className="relative  z-10" />

            <div className="absolute z-10 top-0 right-0 left-0 bottom-0 lg:px-[50px] lg:py-[60px] px-5 py-7">
              <h2 className="lg:text-xl text-base uppercase italic">
                What is ISC?
              </h2>
              <p className="lg:text-sm text-xs lg:pt-4 pt-1">
                <span className=" opacity-90">
                  <span className="sm:hidden">
                    {" "}
                    Advitya&apos;24 hosts ISC, an outreach for 6th to 12th-grade students. The event features an annual competition with Quiz & Science/Art competitions on the theme India@2047.
                  </span>

                  <span className="hidden sm:block">
                  Advitya&apos;24 presents the First edition of ISC i.e INTER SCHOOL CONCLAVE, a school outreach program for 6th to 12th-grade students. It consists of an annual competition wherein students compete in a Quiz and Science and Art Competition on our theme India@2047. On 17th February, students will be arriving on campus for the Quiz and Science and Art Competition, Campus tour, IAS/IPS and defence panel talks and Competition .
                  </span>
                </span>{" "}
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
                    to the technical culture of IIT Ropar.
                  </span>

                  <span className="hidden lg:block">
                    ISC aims to bring together the best young minds from all over the Punjab and Tricity under one roof and to expose the students to the technical culture of IIT Ropar. The main objective of which is developing and nurturing younger minds of the country at the grassroots level. It provides a platform for school kids to learn core experience and knowledge, exercise coordination abilities, to think outside the box while proposing solutions. It also give them a exposure that they need at this age.
                  </span>
                </span>{" "}
                {/* <button className="underline lg:hidden"> Read More.</button> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

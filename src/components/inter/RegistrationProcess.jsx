import React from "react";
import Heading from "../heading/Heading";
import Image from "next/image";
import cardBg1 from "../../assets/images/cardbg1.png";
import cardBg2 from "../../assets/images/cardbg2.svg";
import cardBg3 from "../../assets/images/cardbg3.svg";
import registrationBg from "../../assets/images/registrationBg.svg";
import hexagonal from "../../assets/images/hexagonal.svg";

const RegistrationProcess = () => {
  return (
    <div className="relative w-full overflow-hidden text-white">
      <img src="./Registrationdesign.svg" className="-z-10 absolute right-0 -bottom-12 xl:bottom-12 w-[300px]"/>
    
      
      <div className="w-[90%] mx-auto lg:my-[130px] my-[40px] relative z-10">
        <Heading title="Registration" heading="Registration Process" />

        <div className="grid lg:grid-cols-3 lg:mt-[78px] mt-[40px] lg:gap-[50px] gap-[30px]">
          <div className="">
            <div className="h-full relative">
              <Image src={cardBg1} className="w-full" />

              <div className="absolute top-0 right-0 left-0 bottom-0 lg:px-[45px] lg:py-[41px] p-5">
                <h2 className="lg:mb-4 mb-2 lg:text-[25px] text-[22px] italic uppercase">
                  Open Olympiad
                </h2>

                <ul className="flex flex-col gap-3">
                  <li className="flex gap-3 text-sm lg:text-base">
                    <span>•</span>
                    <span>
                      The participation fees for Open Olympiad are INR 50 per
                      participant for category-1(8th, 9th and 10th class)
                      students and INR 100 per participant for category-2(11th
                      and 12th class) students.
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm lg:text-base">
                    <span>•</span>{" "}
                    <span>
                      {" "}
                      Schools are requested to collect money from the students
                      and register them through the Google Form
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm lg:text-base">
                    <span>•</span>{" "}
                    <span>
                      {" "}
                      If a student is registering directly then he/she needs to
                      register through this form This form will be open till
                      15th march 11:59 pm.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:mt-[130px]">
            <div className="h-full relative">
              <Image src={cardBg2} className="w-full " />

              <div className="absolute top-0 right-0 left-0 bottom-0 lg:p-10 p-4">
                <h2 className="lg:mb-4 mb-2 lg:text-[22px] text-[18px] italic uppercase">
                  Junior Scientist Program
                </h2>

                <ul className="flex flex-col lg:gap-3 gap-2">
                  <li className="flex lg:gap-3 gap-2 text-xs">
                    <span>•</span>
                    <span>
                      Students who have registered for Open Olympiad from school
                      and Junior Scientist Program need not to register for
                      Techwalk; they are directly eligible for Techwalk.
                    </span>
                  </li>
                  <li className="flex lg:gap-3 gap-2 text-xs">
                    <span>•</span>
                    <span>
                      Top 10% of students who are directly registering for Open
                      Olympiad will be eligible for Techwalk.
                    </span>
                  </li>
                  <li className="flex lg:gap-3 gap-2 text-xs">
                    <span>•</span>
                    <span>
                      Students who have not registered for the Open Olympiad and
                      Junior Scientist Program and want to get exposure to IIT
                      can register for it.
                    </span>
                  </li>
                  <li className="flex lg:gap-3 gap-2 text-xs">
                    <span>•</span>
                    <span>
                      The Registration fee is INR 60 per participant for
                      category-1(8th, 9th and 10th class) students and INR 120
                      per participant for category-2(11th and 12th class)
                      students.
                    </span>
                  </li>
                  <li className="flex lg:gap-3 gap-2 text-xs">
                    <span>•</span>
                    <span>Students do not have to register individually.</span>
                  </li>
                  <li className="flex lg:gap-3 gap-2 text-xs">
                    <span>•</span>
                    <span>
                      Schools are requested to collect money from the students
                      and register them through the Google Form.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="">
            <div className="h-full relative">
              <Image src={cardBg3} className="w-full" />

              <div className="absolute top-0 right-0 left-0 bottom-0 lg:px-[45px] lg:py-[41px] p-5">
                <h2 className="lg:mb-4 mb-3 lg:text-[25px] text-[22px] italic uppercase">
                  Techwalk
                </h2>

                <ul className="flex flex-col gap-3">
                  <li className="flex gap-3 lg:text-base text-sm ">
                    <span>•</span>
                    <span>
                      The participation fees for Junior Scientist Competition
                      are INR 150 per team
                    </span>
                  </li>
                  <li className="flex gap-3 lg:text-base text-sm">
                    <span>•</span>
                    <span>
                      Individual registration by each team is required.
                    </span>
                  </li>
                  <li className="flex gap-3 lg:text-base text-sm">
                    <span>•</span>
                    <span>
                      Only one member from a team are requested to do the same
                      on zeitgeist’s website through the <br />
                      <a
                        className="lg:text-lg text-base underline pt-3"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdyPCe8xpISvE1sV8QLIethkg_gJCErmEXCslzs9vnA7Ahbiw/closedform"
                        target="_blank"
                      >
                        Google Form
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationProcess;

import { ActiveDot, BigDot, DeactiveDot, SmallDot } from "@/assets/Icons";
import Image from "next/image";
import React, { useState } from "react";
import Border from "../../assets/images/scheduleBorder.svg";

const ScheduleComponet = () => {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <div className="w-[90%] mx-auto min-h-screen lg:py-[91px] pt-[100px] text-white">
      <div
        className="h-[3px] w-full relative lg:mb-5"
        style={{
          background:
            "linear-gradient(to right, rgba(102, 58, 140, 0), rgba(102, 58, 140, 0.7), rgba(102, 58, 140, 0))",
        }}
      >
        <div
          className="absolute right-0 left-0 flex items-end lg:justify-around justify-between"
          style={{ bottom: -10 }}
        >
          <div
            className={`${
              activeButton !== 1 && "pb-1"
            } flex flex-col items-center`}
          >
            <p
              className={`pb-3 ${
                activeButton === 1
                  ? "lg:text-3xl text-xl"
                  : "lg:text-base text-sm"
              }`}
            >
              DAY -1
            </p>
            <div className="cursor-pointer" onClick={() => setActiveButton(1)}>
              {activeButton === 1 ? <BigDot /> : <SmallDot />}
            </div>
          </div>
          <div
            className={`${
              activeButton !== 2 && "pb-1"
            } flex flex-col items-center`}
          >
            <p
              className={`pb-3 ${
                activeButton === 2
                  ? "lg:text-3xl text-xl"
                  : "lg:text-base text-sm"
              }`}
            >
              DAY -2
            </p>
            <div className="cursor-pointer" onClick={() => setActiveButton(2)}>
              {activeButton === 2 ? <BigDot /> : <SmallDot />}
            </div>
          </div>

          <div
            className={`${
              activeButton !== 3 && "pb-1"
            } flex flex-col items-center`}
          >
            <p
              className={`pb-3 ${
                activeButton === 3
                  ? "lg:text-3xl text-xl"
                  : "lg:text-base text-sm"
              }`}
            >
              DAY -3
            </p>
            <div className="cursor-pointer" onClick={() => setActiveButton(3)}>
              {activeButton === 3 ? <BigDot /> : <SmallDot />}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-20">
        <div className="hidden lg:block">
          <Image src={Border} className="w-full h-full " />
        </div>

        <div className="mt-16 lg:mt-0 left-[7px] lg:absolute top-28 bottom-0 w-full">
          <div className="w-full grid grid-cols-12 pb-[40px]">
            <div className="col-span-1 hidden lg:block">
              <ActiveDot />
            </div>

            <div className="col-span-11 flex-col lg:flex-row flex gap-5">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="162"
                  height="48"
                  viewBox="0 0 162 48"
                  fill="none"
                >
                  <path
                    d="M94.6027 9H62.3561H35.9121C21.0519 9 9 17.7326 9 28.5C9 39.2674 21.0519 48 35.9121 48H94.6027V41.5565L112.388 28.6696H134.854L162 9H94.6027Z"
                    fill="#221C34"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M149.323 44.4638H125.055L103.806 28.7242L91.9418 37.5127V44.6025H28.0819C12.6135 44.6025 0 35.2766 0 23.8012C0 12.3259 12.6135 3 28.0819 3H161L131.514 24.8413H108.557V23.1079H130.554L155.36 4.73344H28.0819C13.9005 4.73344 2.34016 13.2793 2.34016 23.8012C2.34016 34.3232 13.9005 42.869 28.0819 42.869H89.6016V36.7847L103.806 26.2627L126.015 42.7304H149.206L154.097 39.1075L160.111 43.5451L154.097 48L149.323 44.4638ZM156.811 43.5624L154.12 41.569L151.405 43.5624L154.12 45.5559L156.811 43.5624Z"
                    fill="url(#paint0_linear_802_1579)"
                  />
                  <path
                    d="M33.9423 13.0832L32.7227 11.8768L44.7467 0H109.78V1.69912H45.451L33.9423 13.0832Z"
                    fill="#F93099"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_802_1579"
                      x1="-1.58429e-06"
                      y1="24.4411"
                      x2="209.171"
                      y2="28.0244"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F93099" />
                      <stop offset="1" stop-color="#EB80E9" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute top-3  right-0 left-4">2 P.m</div>
              </div>

              <div>
                <h2 className="text-2xl">IN AUGURATION CEREMONY</h2>
                <p className="text-sm pt-3">
                  TSP aims to bring together the best young minds from all over
                  the country under one roof and to expose the students to the
                  technical culture of IIT Ropar. The main objective of which is
                  developing and nurturing younger minds of the country at the
                  grassroots level. It provides a platform for school kids to
                  learn core experience and knowledge, exercise coordination
                  abilities, to think outside the box while proposing solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-12 pb-[40px]">
            <div className="col-span-1 hidden lg:block">
              <DeactiveDot />
            </div>

            <div className="col-span-11 flex-col lg:flex-row flex gap-5">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="162"
                  height="48"
                  viewBox="0 0 162 48"
                  fill="none"
                >
                  <path
                    d="M94.6027 9H62.3561H35.9121C21.0519 9 9 17.7326 9 28.5C9 39.2674 21.0519 48 35.9121 48H94.6027V41.5565L112.388 28.6696H134.854L162 9H94.6027Z"
                    fill="#221C34"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M149.323 44.4638H125.055L103.806 28.7242L91.9418 37.5127V44.6025H28.0819C12.6135 44.6025 0 35.2766 0 23.8012C0 12.3259 12.6135 3 28.0819 3H161L131.514 24.8413H108.557V23.1079H130.554L155.36 4.73344H28.0819C13.9005 4.73344 2.34016 13.2793 2.34016 23.8012C2.34016 34.3232 13.9005 42.869 28.0819 42.869H89.6016V36.7847L103.806 26.2627L126.015 42.7304H149.206L154.097 39.1075L160.111 43.5451L154.097 48L149.323 44.4638ZM156.811 43.5624L154.12 41.569L151.405 43.5624L154.12 45.5559L156.811 43.5624Z"
                    fill="url(#paint0_linear_802_1579)"
                  />
                  <path
                    d="M33.9423 13.0832L32.7227 11.8768L44.7467 0H109.78V1.69912H45.451L33.9423 13.0832Z"
                    fill="#F93099"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_802_1579"
                      x1="-1.58429e-06"
                      y1="24.4411"
                      x2="209.171"
                      y2="28.0244"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F93099" />
                      <stop offset="1" stop-color="#EB80E9" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute top-3  right-0 left-4">4 P.m</div>
              </div>

              <div>
                <h2 className="text-2xl">PAINT BALL GAME</h2>
                <p className="text-sm pt-3">
                  TSP aims to bring together the best young minds from all over
                  the country under one roof and to expose the students to the
                  technical culture of IIT Ropar. The main objective of which is
                  developing and nurturing younger minds of the country at the
                  grassroots level.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-12 pb-[40px]">
            <div className="col-span-1 hidden lg:block">
              <DeactiveDot />
            </div>

            <div className="col-span-11 flex-col lg:flex-row flex gap-5">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="162"
                  height="48"
                  viewBox="0 0 162 48"
                  fill="none"
                >
                  <path
                    d="M94.6027 9H62.3561H35.9121C21.0519 9 9 17.7326 9 28.5C9 39.2674 21.0519 48 35.9121 48H94.6027V41.5565L112.388 28.6696H134.854L162 9H94.6027Z"
                    fill="#221C34"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M149.323 44.4638H125.055L103.806 28.7242L91.9418 37.5127V44.6025H28.0819C12.6135 44.6025 0 35.2766 0 23.8012C0 12.3259 12.6135 3 28.0819 3H161L131.514 24.8413H108.557V23.1079H130.554L155.36 4.73344H28.0819C13.9005 4.73344 2.34016 13.2793 2.34016 23.8012C2.34016 34.3232 13.9005 42.869 28.0819 42.869H89.6016V36.7847L103.806 26.2627L126.015 42.7304H149.206L154.097 39.1075L160.111 43.5451L154.097 48L149.323 44.4638ZM156.811 43.5624L154.12 41.569L151.405 43.5624L154.12 45.5559L156.811 43.5624Z"
                    fill="url(#paint0_linear_802_1579)"
                  />
                  <path
                    d="M33.9423 13.0832L32.7227 11.8768L44.7467 0H109.78V1.69912H45.451L33.9423 13.0832Z"
                    fill="#F93099"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_802_1579"
                      x1="-1.58429e-06"
                      y1="24.4411"
                      x2="209.171"
                      y2="28.0244"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F93099" />
                      <stop offset="1" stop-color="#EB80E9" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute top-3  right-0 left-4">6 P.m</div>
              </div>

              <div>
                <h2 className="text-2xl">ROBOWASIN AUGURATION CEREMONY</h2>
                <p className="text-sm pt-3">
                  The competition provides a platform for students to design and
                  construct their own gripper bot which can drive through an
                  obstacle-filled path and put the objects in the respective
                  target zones. It also provides an opportunity for students to
                  work as a team and test their skills
                </p>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-12 pb-[40px]">
            <div className="col-span-1 hidden lg:block">
              <DeactiveDot />
            </div>

            <div className="col-span-11 flex flex-col lg:flex-row gap-5">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="162"
                  height="48"
                  viewBox="0 0 162 48"
                  fill="none"
                >
                  <path
                    d="M94.6027 9H62.3561H35.9121C21.0519 9 9 17.7326 9 28.5C9 39.2674 21.0519 48 35.9121 48H94.6027V41.5565L112.388 28.6696H134.854L162 9H94.6027Z"
                    fill="#221C34"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M149.323 44.4638H125.055L103.806 28.7242L91.9418 37.5127V44.6025H28.0819C12.6135 44.6025 0 35.2766 0 23.8012C0 12.3259 12.6135 3 28.0819 3H161L131.514 24.8413H108.557V23.1079H130.554L155.36 4.73344H28.0819C13.9005 4.73344 2.34016 13.2793 2.34016 23.8012C2.34016 34.3232 13.9005 42.869 28.0819 42.869H89.6016V36.7847L103.806 26.2627L126.015 42.7304H149.206L154.097 39.1075L160.111 43.5451L154.097 48L149.323 44.4638ZM156.811 43.5624L154.12 41.569L151.405 43.5624L154.12 45.5559L156.811 43.5624Z"
                    fill="url(#paint0_linear_802_1579)"
                  />
                  <path
                    d="M33.9423 13.0832L32.7227 11.8768L44.7467 0H109.78V1.69912H45.451L33.9423 13.0832Z"
                    fill="#F93099"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_802_1579"
                      x1="-1.58429e-06"
                      y1="24.4411"
                      x2="209.171"
                      y2="28.0244"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F93099" />
                      <stop offset="1" stop-color="#EB80E9" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute top-3  right-0 left-4">4 P.m</div>
              </div>

              <div>
                <h2 className="text-2xl">HACKATHON</h2>
                <p className="text-sm pt-3">
                  Welcome to Zeitgeist, the most anticipated and biggest
                  techno-cultural fest in North India that showcases myriad
                  events, workshops and talk series and is ornamented by the
                  presence of various big names from different industries such
                  as-
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleComponet;

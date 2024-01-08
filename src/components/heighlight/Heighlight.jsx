import React from "react";
import HeadingBg from "../../assets/images/headingBg.svg";
import heighlightImage from "../../assets/images/heighlight.png";
import hexagonal2 from "../../assets/images/hexagonal2.svg";
import Image from "next/image";
import { LeftArrow, RightArrow } from "@/assets/Icons";

const Heighlight = () => {
  return (
    <div className="relative h-[800px] lg:h-auto">
      <div className="absolute right-0 w-[400px] opacity-25 hidden lg:block">
        <Image src={hexagonal2} className="w-full" />
      </div>
      <div className="w-[90%] mx-auto relative text-white ">
        <div
          className="w-full hidden lg:block absolute top-0 right-0 bottom-0"
          style={{ left: -25 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="103.5%"
            height="100%"
            viewBox="0 0 1790 703"
            fill="none"
          >
            <g filter="url(#filter0_f_596_866)">
              <path
                d="M930.047 667.996H1650.4L1755 560.996V34.9958H1748.53H159.013L35 123.496L35 259.621"
                stroke="#6E3B99"
                stroke-width="18.34"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_596_866"
                x="0.830078"
                y="0.825867"
                width="1788.34"
                height="701.34"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="12.5"
                  result="effect1_foregroundBlur_596_866"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="634"
            viewBox="0 0 1720 634"
            fill="none"
          >
            <g filter="url(#filter0_b_596_867)">
              <path
                d="M1720 0.42749H123.473L0 88.4958V633.215H1615.4L1720 526.496V0.42749Z"
                fill="white"
                fill-opacity="0.05"
              />
              <path
                d="M2.5 89.7835L124.274 2.92749H1717.5V525.475L1614.35 630.715H2.5V89.7835Z"
                stroke="white"
                stroke-width="5"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_596_867"
                x="-15"
                y="-14.5725"
                width="1750"
                height="662.787"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_596_867"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_596_867"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="absolute top-0 bottom-0 right-0 left-0 lg:py-[130px] py-[40px] lg:px-[100px]">
          <div className="grid lg:grid-cols-2 grid-cols-1 relative">
            <div className="relative z-10">
              <div className="relative">
                <Image
                  src={HeadingBg}
                  className="lg:w-[259px] w-[200px] h-[45px] object-contain"
                />
                <h2
                  className="absolute top-[50%] lg:left-[20px] left-[10px] lg:text-[18px] text-[14px]"
                  style={{ transform: "translateY(-50%)" }}
                >
                  Our Highlights
                </h2>
              </div>

              <h2 className="lg:text-[50px] text-3xl uppercase italic mt-2 lg:mt-5">Highlights</h2>

              <div className="w-full relative z-10 mt-8 lg:hidden">
              <Image
                src={heighlightImage}
                alt="vgg"
                className="w-[100%] object-contain"
              />
            </div>

              <p className="mt-5 text-sm lg:text-base">
                Welcome to Zeitgeist, the most anticipated and biggest
                techno-cultural fest in North India that showcases myriad
                events, workshops and talk series and is ornamented by the
                presence of various big names from different industries such as-
                Diljit Dosanjh, Anubhav Singh Bassi, the local Trian band,
                vishal-shekhar, zakir khan, sonam bajwa etc.
              </p>

              <div className="mt-5 flex justify-center lg:justify-start">
                <button>
                 <RightArrow />
                </button>

                <button>
                  <LeftArrow />
                </button>
              </div>
            </div>

            <div className="h-full w-full relative z-10 hidden lg:block">
              <Image
                src={heighlightImage}
                alt="vgg"
                className="w-[70%] ml-auto object-contain"
              />
            </div>

            <div
              className=" absolute hidden lg:block text-center uppercase italic w-full text-[100px] opacity-25 text-transparent"
              style={{ bottom: -60, WebkitTextStroke: "3px white " }}
            >
              Highlights
              <div
                className="absolute top-0 right-0 bottom-0 left-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(13, 13, 13, 1))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heighlight;

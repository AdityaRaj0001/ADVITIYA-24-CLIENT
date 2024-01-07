import React from "react";
import Heading from "../heading/Heading";
import Image from "next/image";
import compitition1 from "../../assets/images/compitition1.jpg";

const Compitition = () => {
  return (
    <div className="">
      <div className=" max-w-[90%] mx-auto text-[#fff]">
        <Heading title="Competitions" heading="Competitions" />

        <div className="grid grid-cols-3 gap-[50px] my-[102px] ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Compitition;

const Card = () => (
  <div className="relative h-[445px]">
    <div className="absolute bottom-0 right-0 left-0 top-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 540 567"
        fill="none"
      >
        <path
          d="M1.22285 1.2231H270H355.422L538.777 152.874V272.66V517.868L472.163 565.777H270H135H1.22262L1.22285 417.75V278.5V1.2231Z"
          stroke="#797979"
          stroke-width="2.44571"
        />
      </svg>
    </div>

    <div className="absolute top-0 bottom-0 left-0 right-0 pt-32 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="700"
        height="600"
        viewBox="0 0 673 673"
        fill="none"
      >
        <g filter="url(#filter0_f_424_707)">
          <ellipse
            cx="336.189"
            cy="336.895"
            rx="91.4551"
            ry="91.4261"
            fill="#03B9BB"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_424_707"
            x="0.162155"
            y="0.897018"
            width="672.053"
            height="671.995"
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
              stdDeviation="122.286"
              result="effect1_foregroundBlur_424_707"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <div className="relative p-[25px] h-full">
      <div className="h-[78%]">
        <Image
          style={{
            clipPath: "polygon(63% 0%, 100% 36%, 100% 100%, 0 100%, 0 0)",
          }}
          className="h-[100%]  object-cover"
          src={compitition1}
        />
      </div>

      <div className="mt-[25px]">
        <h3 className="text-[25px] font-bold ">COZMOCLENCH</h3>
        <p className="text-[15px] text-[#ccc]">(INR 1,00,000)</p>
      </div>
    </div>
  </div>
);

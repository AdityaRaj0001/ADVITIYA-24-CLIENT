import React from "react";
import HeadingBg from "../../assets/images/headingBg.svg";
import heighlightImage from "../../assets/images/heighlight.png";
import Image from "next/image";

const Heighlight = () => {
  return (
    <div className="w-[90%] mx-auto relative text-white">
      <div
        className="w-full absolute top-0 right-0 bottom-0"
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

      <div className="absolute top-0 bottom-0 right-0 left-0 py-[130px] px-[100px]">
        <div className="grid grid-cols-2 relative">
          <div className="relative z-10">
            <div className="relative">
              <Image
                src={HeadingBg}
                className="w-[259px] h-[45px] object-contain"
              />
              <h2
                className="absolute top-[50%] left-[20px] text-[18px]"
                style={{ transform: "translateY(-50%)" }}
              >
                Our Highlights
              </h2>
            </div>

            <h2 className="text-[50px] uppercase italic mt-2">Highlights</h2>
            <p>
              Welcome to Zeitgeist, the most anticipated and biggest
              techno-cultural fest in North India that showcases myriad events,
              workshops and talk series and is ornamented by the presence of
              various big names from different industries such as- Diljit
              Dosanjh, Anubhav Singh Bassi, the local Trian band,
              vishal-shekhar, zakir khan, sonam bajwa etc.
            </p>

            <div className="mt-5">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="32"
                  viewBox="0 0 55 32"
                  fill="none"
                >
                  <path
                    d="M20.9065 0.111512C21.0853 0.202515 21.2357 0.342633 21.3408 0.516127C21.4459 0.689621 21.5016 0.889622 21.5016 1.09366L21.5016 9.71138L54.0912 14.9119C54.3444 14.9522 54.5751 15.0836 54.7417 15.2824C54.9084 15.4812 55 15.7343 55 15.9961L55 16.0048C54.9979 16.2679 54.9033 16.5214 54.7335 16.7192C54.5638 16.917 54.3301 17.0459 54.0751 17.0825L21.5016 21.7606L21.5016 30.8985C21.5016 31.1023 21.446 31.302 21.3412 31.4754C21.2363 31.6488 21.0862 31.7889 20.9078 31.88C20.7294 31.9711 20.5296 32.0097 20.3309 31.9914C20.1322 31.9731 19.9425 31.8986 19.7829 31.7764L0.429753 16.8729C-0.0448373 16.5092 -0.141086 15.8214 0.214909 15.3365C0.276013 15.2534 0.348347 15.1795 0.429753 15.1171L19.7829 0.214663C19.9424 0.0927051 20.1319 0.0184711 20.3303 0.000254069C20.5288 -0.0179611 20.7283 0.0205597 20.9065 0.111512Z"
                    fill="url(#paint0_linear_596_882)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_596_882"
                      x1="55"
                      y1="15.9959"
                      x2="6.99382e-07"
                      y2="15.9958"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="32"
                  viewBox="0 0 55 32"
                  fill="none"
                >
                  <path
                    d="M34.0935 0.111512C33.9147 0.202515 33.7643 0.342633 33.6592 0.516127C33.5541 0.689621 33.4984 0.889622 33.4984 1.09366L33.4984 9.71138L0.908787 14.9119C0.655627 14.9522 0.424907 15.0836 0.25826 15.2824C0.0916141 15.4812 1.74416e-05 15.7343 -6.99373e-07 15.9961L-6.98989e-07 16.0048C0.00213589 16.2679 0.0966989 16.5214 0.266463 16.7192C0.436226 16.917 0.669894 17.0459 0.924901 17.0825L33.4984 21.7606L33.4984 30.8985C33.4984 31.1023 33.554 31.302 33.6588 31.4754C33.7637 31.6488 33.9138 31.7889 34.0922 31.88C34.2706 31.9711 34.4704 32.0097 34.6691 31.9914C34.8678 31.9731 35.0575 31.8986 35.2171 31.7764L54.5702 16.8729C55.0448 16.5092 55.1411 15.8214 54.7851 15.3365C54.724 15.2534 54.6517 15.1795 54.5702 15.1171L35.2171 0.214663C35.0576 0.0927051 34.8681 0.0184711 34.6697 0.000254069C34.4712 -0.0179611 34.2717 0.0205597 34.0935 0.111512Z"
                    fill="url(#paint0_linear_596_883)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_596_883"
                      x1="-6.99382e-07"
                      y1="15.9959"
                      x2="55"
                      y2="15.9958"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>

          <div className="h-full w-full relative z-10">
            <Image
              src={heighlightImage}
              alt="vgg"
              className="w-[70%] ml-auto object-contain"
            />
          </div>

          <div
            className=" absolute text-center uppercase italic w-full text-[100px] opacity-25 text-transparent"
            style={{ bottom: -60, WebkitTextStroke: "3px white " }}
          >
            Highlights
            <div className="absolute top-0 right-0 bottom-0 left-0" style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(13, 13, 13, 1))' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heighlight;

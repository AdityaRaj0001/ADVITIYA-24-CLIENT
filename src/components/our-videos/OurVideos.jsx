import { OurVideosTitle } from "@/assets/Icons";
import Image from "next/image";
import BG from "../../assets/images/videowaper.svg";
import Cyclone from "../../assets/images/cyclone.svg";
import video from "../../assets/images/video.png";

const OurVideos = () => {
  return (
    <div className="text-[#fff] w-[90%] mx-auto">
      <div className="relative lg:ml-8">
        <OurVideosTitle />
        <h2
          className="absolute top-[50%] pl-[15px]"
          style={{ transform: "translateY(-50%)" }}
        >
          Our Video
        </h2>
      </div>
      <h2 className="lg:text-[25px] text-[22px] mt-5 lg:hidden uppercase italic">
        Latest Videos
      </h2>
      <div>
        <div className="lg:mt-0 mb-16 lg:mb-0">
          <div className="lg:grid hidden lg:grid-cols-2 grid-cols-1 h-[580px]">
            <div className="h-full ">
              <h2 className="pt-5 text-[40px] uppercase italic">
                Latest Videos
              </h2>
              <div className="mt-6 absolute">
                <div className="relative z-10 hidden lg:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="827"
                    height="460"
                    viewBox="0 0 827 460"
                    fill="none"
                  >
                    <g filter="url(#filter0_b_596_897)">
                      <path
                        d="M827 0.000244141V419.264L782.539 460H0V40.5529L44.697 0.000244141H827Z"
                        fill="white"
                        fill-opacity="0.05"
                      />
                      <path
                        d="M826.5 0.500244V419.044L782.345 459.5H0.5V40.7744L44.89 0.500244H826.5Z"
                        stroke="url(#paint0_linear_596_897)"
                        stroke-opacity="0.5"
                      />
                      <path
                        d="M826.5 0.500244V419.044L782.345 459.5H0.5V40.7744L44.89 0.500244H826.5Z"
                        stroke="url(#paint1_linear_596_897)"
                        stroke-opacity="0.5"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_596_897"
                        x="-25"
                        y="-24.9998"
                        width="877"
                        height="510"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="12.5"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_596_897"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_596_897"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_596_897"
                        x1="-8.02367"
                        y1="-55.5317"
                        x2="285.563"
                        y2="48.4768"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_596_897"
                        x1="408.871"
                        y1="569.061"
                        x2="264.419"
                        y2="530.457"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.171875" stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="absolute z-0"
                  style={{ bottom: -60, left: -80 }}
                >
                  <Image src={Cyclone} />
                </div>

                <div className="absolute top-0 bottom-0 right-0 left-0 p-16 pr-32">
                  <h2 className="text-[25px] uppercase italic">
                    Latest Videos
                  </h2>
                  <p className="pt-5 text-lg">
                    Teleport to the 27th Edition of Techfest and celebrate the
                    interplay between Magic, Science & Technology. Step into the
                    realm of wonders where the frontiers of imagination are
                    translated into real-world possibilities. From ancient
                    mysticism to cutting-edge innovations, explore the endless
                    spectrum of creativity and ingenuity. Get ready for a
                    Techno-Mystical extravaganza and embark on a miraculous
                    journey of discovery into the unknown!
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full relative w-[110%] z-20 right-10">
              <div className="h-[67%] flex ">
                <div className="h-[100%] pt-10 mt-auto w-[84%] mx-auto">
                <iframe  width="560" height="315" src="https://www.youtube.com/embed/Fwn-ZAxCq4g?si=vQsd07LBv1Df6vFr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="z-50 w-full h-full object-cover"></iframe>
                </div>
                <div className="absolute top-0">
                  <Image src={BG} />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:grid hidden grid-cols-2 h-[580px] mt-16">
            <div className="h-full relative w-[110%] z-20">
              <div className="h-[65%] flex ">
                <div className="h-[100%] pt-10 mt-auto w-[84%] mx-auto">
                <iframe  width="560" height="315" src="https://www.youtube.com/embed/Fwn-ZAxCq4g?si=vQsd07LBv1Df6vFr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="z-50 w-full h-full object-cover"></iframe>
                </div>
                <div className="absolute top-0">
                  <Image src={BG} />
                </div>
              </div>
            </div>

            <div className="h-full relative" style={{ left: -130 }}>
              <div className="mt-16 absolute">
                <div className="relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="827"
                    height="460"
                    viewBox="0 0 827 460"
                    fill="none"
                  >
                    <g filter="url(#filter0_b_596_897)">
                      <path
                        d="M827 0.000244141V419.264L782.539 460H0V40.5529L44.697 0.000244141H827Z"
                        fill="white"
                        fill-opacity="0.05"
                      />
                      <path
                        d="M826.5 0.500244V419.044L782.345 459.5H0.5V40.7744L44.89 0.500244H826.5Z"
                        stroke="url(#paint0_linear_596_897)"
                        stroke-opacity="0.5"
                      />
                      <path
                        d="M826.5 0.500244V419.044L782.345 459.5H0.5V40.7744L44.89 0.500244H826.5Z"
                        stroke="url(#paint1_linear_596_897)"
                        stroke-opacity="0.5"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_596_897"
                        x="-25"
                        y="-24.9998"
                        width="877"
                        height="510"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="12.5"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_596_897"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_596_897"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_596_897"
                        x1="-8.02367"
                        y1="-55.5317"
                        x2="285.563"
                        y2="48.4768"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_596_897"
                        x1="408.871"
                        y1="569.061"
                        x2="264.419"
                        y2="530.457"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.171875" stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="absolute z-0"
                  style={{ bottom: -60, right: -50 }}
                >
                  <Image src={Cyclone} />
                </div>

                <div className="absolute top-0 bottom-0 right-0 left-0 p-16 pl-48 pr-10">
                  <h2 className="text-[25px] uppercase italic">
                    Latest Videos
                  </h2>
                  <p className="pt-5 text-lg">
                    Teleport to the 27th Edition of Techfest and celebrate the
                    interplay between Magic, Science & Technology. Step into the
                    realm of wonders where the frontiers of imagination are
                    translated into real-world possibilities. From ancient
                    mysticism to cutting-edge innovations, explore the endless
                    spectrum of creativity and ingenuity. Get ready for a
                    Techno-Mystical extravaganza and embark on a miraculous
                    journey of discovery into the unknown!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CardMobile />
          <CardMobile />
        </div>
      </div>
    </div>
  );
};

export default OurVideos;

const CardMobile = () => (
  <div className="mt-10 lg:hidden">
    <div className="relative w-[100%]">
      <div className=" flex ">
        <div className="h-[100%] pt-[22px] mt-auto w-[86%] mx-auto">
        <iframe  width="560" height="315" src="https://www.youtube.com/embed/Fwn-ZAxCq4g?si=vQsd07LBv1Df6vFr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="z-50 w-full h-full object-cover"></iframe>
        </div>
        <div className="absolute top-0">
          <Image src={BG} />
        </div>
      </div>
    </div>

    <div className="mt-12 ">
      <h2 className="lg:text-[25px] text-[22px] uppercase italic">
        Latest Videos
      </h2>
      <p className="lg:pt-5 pt-3 lg:text-lg text-sm">
        Teleport to the 27th Edition of Techfest and celebrate the interplay
        between Magic, Science & Technology. Step into the realm of wonders
        where the frontiers of imagination are translated into real-world
        possibilities. From ancient mysticism to cutting-edge innovations,
        explore the endless spectrum of creativity and ingenuity. Get ready for
        a Techno-Mystical extravaganza and embark on a miraculous journey of
        discovery into the unknown!
      </p>
    </div>
  </div>
);

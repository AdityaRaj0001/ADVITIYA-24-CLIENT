import React from "react";
import footerBg from "../../assets/images/footerbg.png";
import footerborder from "../../assets/images/footerborder.svg";
import logoBorder from "../../assets/images/logoBorder.png";
import logo from "../../assets/images/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="lg:h-[500px] relative">
      <div className="absolute bottom-0 hidden lg:block">
        <Image src={footerBg} />
        <div className="absolute top-7 bottom-2 right-10 left-10">
          <Image src={footerborder} />
        </div>
      </div>

      <div className="lg:w-full w-[90%] h-full relative z-10 lg:pt-40 pt-10 lg:pr-20 pr-0 lg:pl-28 pl-0 lg:pb-16 pb-10 mx-auto">
        <div className=" h-full text-white grid grid-cols-8 lg:gap-4 gap-2">
          <div className="h-full relative lg:col-span-2 col-span-8 items-center flex lg:block justify-center">
            <Image className="w-[200px] h-[200px]" src={logoBorder} />
            <div className="absolute flex items-center  justify-center mx-auto w-[200px] h-[200px] top-0 lg:left-0 bottom-0 p-10">
              <img src='./iitrpr_logo.jpg' className="w-[80%]" />
            </div>
          </div>

          <div className="lg:col-span-3 col-span-8">
            <h2 className="lg:text-[30px] text-[25px] uppercase italic lg:pt-10 pt-5">
              Location
            </h2>
            <div className="flex gap-3 lg:pt-6 pt-5 lg:items-center">
              <div>
                <div
                  className="w-[60px] h-[60px] flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.10)",
                    background:
                      "linear-gradient(182deg, rgba(74, 108, 247, 0.05) -48.8%, rgba(255, 255, 255, 0.00) 76.48%)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_596_4405)">
                      <path
                        d="M5.25122 12.4372C5.25122 18.581 9.94151 25.2465 14.0801 31.0066C15.0639 32.375 16.0063 33.6857 16.8261 34.9155C17.0184 35.2039 17.3423 35.377 17.6884 35.377C18.0345 35.377 18.3584 35.2039 18.5507 34.9155C19.3705 33.6857 20.3129 32.375 21.2966 31.0066C25.4354 25.2465 30.1257 18.581 30.1257 12.4372C30.1257 5.57893 24.5468 0 17.6885 0C10.8302 0 5.25122 5.57893 5.25122 12.4372ZM23.9071 12.4372C23.9071 15.8664 21.1176 18.6559 17.6885 18.6559C14.2593 18.6559 11.4698 15.8664 11.4698 12.4372C11.4698 9.00808 14.2593 6.21862 17.6885 6.21862C21.1176 6.21862 23.9071 9.00808 23.9071 12.4372Z"
                        fill="#1583EB"
                      />
                      <path
                        d="M17.6885 16.5825C19.9781 16.5825 21.8342 14.7264 21.8342 12.4368C21.8342 10.1471 19.9781 8.29102 17.6885 8.29102C15.3988 8.29102 13.5427 10.1471 13.5427 12.4368C13.5427 14.7264 15.3988 16.5825 17.6885 16.5825Z"
                        fill="#1583EB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_596_4405">
                        <rect width="35.377" height="35.377" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <p className="text-sm lg:text-base">
                Indian Institute Of Technology Ropar Rupnagar, Punjab, India
                14001
              </p>
            </div>

            <div className="flex lg:items-center gap-3 pt-5">
              <div>
                <div
                  className="w-[60px] h-[60px] flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.10)",
                    background:
                      "linear-gradient(182deg, rgba(74, 108, 247, 0.05) -48.8%, rgba(255, 255, 255, 0.00) 76.48%)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_596_4414)">
                      <path
                        d="M30.1566 24.36C28.0422 22.5516 25.8965 21.4562 23.8081 23.2618L22.5611 24.3532C21.6487 25.1454 19.9523 28.8468 13.3935 21.3018C6.836 13.7664 10.7382 12.5932 11.652 11.8078L12.9059 10.7151C14.9833 8.90535 14.1993 6.62711 12.701 4.28194L11.7968 2.86145C10.2916 0.521741 8.65259 -1.01484 6.56966 0.79218L5.4442 1.77559C4.52361 2.44623 1.95035 4.62613 1.32615 8.7674C0.574932 13.7364 2.94469 19.4265 8.37396 25.6698C13.7964 31.9159 19.1055 35.0533 24.1345 34.9986C28.3141 34.9535 30.8382 32.7108 31.6276 31.8954L32.7572 30.9106C34.8346 29.105 33.5439 27.2665 31.4282 25.454L30.1566 24.36Z"
                        fill="#1583EB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_596_4414">
                        <rect width="35" height="35" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <p>+91 98556 30374</p>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-8">
            <h2 className="lg:text-[30px] text-[25px] uppercase italic pt-10">
              Follow Us On
            </h2>

            <div className="lg:pt-7 pt-5 flex lg:gap-5 gap-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    fill="url(#paint0_linear_596_4420)"
                    fill-opacity="0.1"
                    stroke="url(#paint1_linear_596_4420)"
                  />
                  <path
                    d="M30.1492 25.4L30.8298 21.1H26.6099V18.3C26.6099 17.1333 27.1885 15.9667 29.0942 15.9667H31V12.3C31 12.3 29.2644 12 27.5969 12C24.1257 12 21.8456 14.0667 21.8456 17.8V21.1H18V25.4H21.8456V35.8333C22.6169 35.9444 23.411 36 24.2277 36C25.0445 36 25.8386 35.9444 26.6099 35.8333V25.4H30.1492Z"
                    fill="url(#paint2_linear_596_4420)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_596_4420"
                      x1="10.8385"
                      y1="-25.2031"
                      x2="9.02352"
                      y2="36.6437"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#4A6CF7" stop-opacity="0.5" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_596_4420"
                      x1="24"
                      y1="0"
                      x2="24"
                      y2="48"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.1" />
                      <stop offset="1" stop-color="#0A0627" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_596_4420"
                      x1="-2923.6"
                      y1="12858.1"
                      x2="-1677.53"
                      y2="14720.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.2" stop-color="#1583EB" />
                      <stop offset="1" stop-color="#0A2A75" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <rect
                    x="47.5"
                    y="0.5"
                    width="47"
                    height="47"
                    transform="rotate(90 47.5 0.5)"
                    fill="url(#paint0_linear_596_4423)"
                    fill-opacity="0.1"
                    stroke="url(#paint1_linear_596_4423)"
                  />
                  <path
                    d="M29.8444 16.9363C29.136 16.9363 28.5457 17.4873 28.5457 18.1957C28.5457 18.9041 29.136 19.4944 29.8444 19.4944C30.5528 19.4944 31.1038 18.9041 31.1038 18.1957C31.1038 17.4873 30.5528 16.9363 29.8444 16.9363Z"
                    fill="url(#paint2_linear_596_4423)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.5295 23.9824C29.5295 26.9734 27.0894 29.4135 24.0984 29.4135C21.1073 29.4135 18.6672 26.9734 18.6672 23.9824C18.6672 20.9913 21.1073 18.5906 24.0984 18.5906C27.0894 18.5906 29.5295 20.9913 29.5295 23.9824ZM27.5617 23.9824C27.5617 22.0933 26.0268 20.519 24.0984 20.519C22.1699 20.519 20.635 22.0933 20.635 23.9824C20.635 25.9108 22.1699 27.4851 24.0984 27.4851C26.0268 27.4851 27.5617 25.9108 27.5617 23.9824Z"
                    fill="url(#paint3_linear_596_4423)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28.3882 34.9993H19.6118C15.9517 34.9993 13 32.0476 13 28.3875V19.6111C13 15.951 15.9517 12.9993 19.6118 12.9993H28.3882C32.0483 12.9993 35 15.951 35 19.6111V28.3875C35 32.0476 32.0483 34.9993 28.3882 34.9993ZM19.6118 15.0458C17.093 15.0458 15.0859 17.0923 15.0859 19.6111V28.3875C15.0859 30.9063 17.093 32.9134 19.6118 32.9134H28.3882C30.907 32.9134 32.9535 30.9063 32.9535 28.3875V19.6111C32.9535 17.0923 30.907 15.0458 28.3882 15.0458H19.6118Z"
                    fill="url(#paint4_linear_596_4423)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_596_4423"
                      x1="58.8385"
                      y1="-25.2031"
                      x2="57.0235"
                      y2="36.6437"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#4A6CF7" stop-opacity="0.5" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_596_4423"
                      x1="72"
                      y1="0"
                      x2="72"
                      y2="48"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.1" />
                      <stop offset="1" stop-color="#0A0627" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_596_4423"
                      x1="18602.1"
                      y1="-7468.72"
                      x2="18807"
                      y2="-7682.08"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.2" stop-color="#FCCB62" />
                      <stop offset="0.67" stop-color="#D43692" />
                      <stop offset="1" stop-color="#6C48E0" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_596_4423"
                      x1="17958.3"
                      y1="-6523.13"
                      x2="18829"
                      y2="-7429.67"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.2" stop-color="#FCCB62" />
                      <stop offset="0.67" stop-color="#D43692" />
                      <stop offset="1" stop-color="#6C48E0" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_596_4423"
                      x1="14615.5"
                      y1="-5578.38"
                      x2="16128.6"
                      y2="-7153.76"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.2" stop-color="#FCCB62" />
                      <stop offset="0.67" stop-color="#D43692" />
                      <stop offset="1" stop-color="#6C48E0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <rect
                    x="47.5"
                    y="47.5"
                    width="47"
                    height="47"
                    transform="rotate(180 47.5 47.5)"
                    fill="url(#paint0_linear_596_4429)"
                    fill-opacity="0.1"
                    stroke="url(#paint1_linear_596_4429)"
                  />
                  <path
                    d="M35.8858 17.2594C35.1628 17.603 34.3637 17.7938 33.5645 17.9466C33.9451 17.8702 34.5159 17.183 34.7062 16.9158C35.0486 16.4958 35.315 15.9995 35.5053 15.5032C35.5053 15.465 35.5433 15.4268 35.5053 15.3887C35.4292 15.3505 35.3911 15.3887 35.3531 15.3887C34.4778 15.8468 33.5645 16.1904 32.6131 16.4576C32.537 16.4831 32.4736 16.4576 32.4229 16.3813C32.3468 16.3049 32.258 16.2286 32.1565 16.1522C31.7759 15.8086 31.3193 15.5414 30.8246 15.3505C30.1776 15.0832 29.4926 14.9687 28.8077 15.0069C28.1227 15.0451 27.4377 15.2359 26.8288 15.5414C26.258 15.8468 25.6872 16.3049 25.2686 16.8394C24.85 17.3739 24.5075 18.0229 24.3552 18.7101C24.165 19.3973 24.203 20.0463 24.2791 20.6953C24.3172 20.8099 24.2791 20.8481 24.203 20.8099C20.3975 20.2372 17.2771 18.901 14.7274 15.9613C14.6132 15.8468 14.5371 15.8468 14.461 15.9995C13.3574 17.6793 13.8902 20.3517 15.2601 21.688C15.4631 21.8661 15.6661 22.0316 15.869 22.1843C15.7929 22.2225 14.8416 22.1079 14.0424 21.688C13.9282 21.6116 13.8521 21.6498 13.8521 21.7643C13.8521 21.9552 13.8521 22.1079 13.8902 22.337C14.0805 24.0168 15.2602 25.5821 16.8965 26.1929C17.0868 26.3075 17.2771 26.3456 17.5054 26.3838C17.1248 26.4602 16.7443 26.5365 15.6788 26.4602C15.5646 26.422 15.5265 26.4983 15.5646 26.6129C16.3638 28.789 18.0381 29.3998 19.332 29.7816C19.4842 29.8198 19.6745 29.8198 19.8267 29.858C19.8267 29.858 19.8267 29.858 19.8267 29.8961C19.4081 30.5452 17.924 31.0033 17.239 31.2705C15.9832 31.6905 14.6513 31.8814 13.3194 31.7668C13.1291 31.7287 13.091 31.7287 13.0149 31.7668C12.9769 31.805 13.0149 31.8432 13.091 31.8814C13.3447 32.0595 13.6111 32.225 13.8902 32.3777C14.7274 32.8358 15.6027 33.1922 16.516 33.4467C21.1967 34.7447 26.4863 33.7903 30.0254 30.2397C32.8034 27.491 33.7548 23.7114 33.7548 19.8936C33.7548 19.7409 33.9451 19.6646 34.0212 19.5882C34.7442 19.0155 35.3531 18.3665 35.8858 17.6411C36 17.4884 36 17.3357 36 17.2975C36 17.2721 36 17.2594 36 17.2594C36 17.2212 36 17.2212 35.8858 17.2594Z"
                    fill="url(#paint2_linear_596_4429)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_596_4429"
                      x1="58.8385"
                      y1="22.7969"
                      x2="57.0235"
                      y2="84.6437"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#4A6CF7" stop-opacity="0.5" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_596_4429"
                      x1="72"
                      y1="48"
                      x2="72"
                      y2="96"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.1" />
                      <stop offset="1" stop-color="#0A0627" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_596_4429"
                      x1="13500.1"
                      y1="21939.2"
                      x2="15493.2"
                      y2="23467.4"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.2" stop-color="#33C5FF" />
                      <stop offset="0.84" stop-color="#3388FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="47.5"
                    width="47"
                    height="47"
                    transform="rotate(-90 0.5 47.5)"
                    fill="url(#paint0_linear_596_4432)"
                    fill-opacity="0.1"
                    stroke="url(#paint1_linear_596_4432)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M37 27.3428C37 30.4547 34.5241 33.0009 31.4979 33.0009H17.4677C14.4415 33.0009 12 30.4547 12 27.3428V20.6591C12 17.5117 14.4415 15.0009 17.4677 15.0009H31.4979C34.5241 15.0009 37 17.5117 37 20.6591V27.3428ZM28.4718 23.8064L22.4539 20.4469C22.2132 20.3054 21.3535 20.4822 21.3535 20.7652V27.3428C21.3535 27.6257 22.2132 27.8025 22.4539 27.661L28.7469 24.4783C28.9876 24.3369 28.7469 23.9479 28.4718 23.8064Z"
                    fill="url(#paint2_linear_596_4432)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_596_4432"
                      x1="10.8385"
                      y1="22.7969"
                      x2="9.02352"
                      y2="84.6437"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#4A6CF7" stop-opacity="0.5" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_596_4432"
                      x1="24"
                      y1="48"
                      x2="24"
                      y2="96"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.1" />
                      <stop offset="1" stop-color="#0A0627" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_596_4432"
                      x1="2761.23"
                      y1="25642.4"
                      x2="5657.68"
                      y2="27885.8"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.2" stop-color="#FF4F4F" />
                      <stop offset="0.8" stop-color="#910618" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    fill="url(#paint0_linear_596_4435)"
                    fill-opacity="0.1"
                    stroke="url(#paint1_linear_596_4435)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28.7525 28.4146C28.7525 32.0367 25.789 35.0002 22.134 35.0002C20.29 35.0002 18.6436 34.2428 17.4253 33.0245C18.479 33.716 19.7303 34.144 21.1132 34.144C24.7353 34.144 27.6988 31.1805 27.6988 27.5255V20.2484C29.1147 21.2692 30.827 21.8619 32.671 21.8619V19.0301C33.0222 19.1179 33.3734 19.1618 33.7247 19.1618V22.718C31.8478 22.718 30.1355 22.1253 28.7525 21.1375V28.4146ZM27.7647 14.1567H28.7525V14.6177C28.8513 15.7373 29.3123 16.7581 30.0367 17.5154C28.8513 16.791 27.9952 15.5726 27.7647 14.1567ZM18.0839 27.5255C18.0839 25.8462 19.4339 24.4961 21.0803 24.4961C21.4096 24.4961 21.7169 24.551 22.0023 24.6608V21.796C22.3535 21.796 22.7048 21.818 23.056 21.8619V25.5169C22.7487 25.4291 22.4413 25.3852 22.134 25.3852C20.4547 25.3852 19.1046 26.7352 19.1046 28.3816C19.1046 29.0402 19.3351 29.6988 19.7303 30.2256C18.7424 29.7317 18.0839 28.7109 18.0839 27.5255Z"
                    fill="#EE1D52"
                  />
                  <path
                    d="M27.6988 20.2484C29.1147 21.2692 30.8269 21.8619 32.6709 21.8619V19.0301C31.6501 18.8325 30.7282 18.2727 30.0367 17.5154C28.8513 16.791 27.9951 15.5726 27.7646 14.1567H25.1633V28.4146C25.1633 30.061 23.8133 31.411 22.1339 31.411C21.1461 31.411 20.29 30.95 19.7302 30.2256C18.7424 29.7317 18.0838 28.7109 18.0838 27.5255C18.0838 25.8462 19.4339 24.4961 21.0803 24.4961C21.4095 24.5181 21.7169 24.573 22.0022 24.6608V21.829C18.4131 21.8948 15.5483 24.8254 15.5483 28.4146C15.5483 30.1927 16.2728 31.8391 17.4252 33.0245C18.4789 33.716 19.7302 34.144 21.1132 34.144C24.7353 34.144 27.6988 31.1805 27.6988 27.5255V20.2484Z"
                    fill="white"
                  />
                  <path
                    d="M32.6709 19.0317V18.2744C31.7489 18.2744 30.8269 18.011 30.0366 17.517C30.7281 18.3073 31.6501 18.8342 32.6709 19.0317ZM27.7646 14.1584C27.7427 14.0267 27.7207 13.895 27.6988 13.7632V13.3022H24.1096V27.5272C24.1096 29.2065 22.7596 30.5565 21.0802 30.5565C20.6192 30.5565 20.1582 30.4248 19.7302 30.2273C20.2899 30.9517 21.1461 31.4127 22.1339 31.4127C23.8132 31.4127 25.1633 30.0626 25.1633 28.4162V14.1584H27.7646ZM22.0022 21.8306V21.0074C21.6949 20.9635 21.3985 20.9416 21.1132 20.9416C17.4581 20.9416 14.4946 23.9051 14.4946 27.5272C14.4946 29.8321 15.68 31.8407 17.4252 33.0261C16.2727 31.8407 15.5483 30.1943 15.5483 28.4162C15.5483 24.8271 18.446 21.8965 22.0022 21.8306Z"
                    fill="#69C9D0"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_596_4435"
                      x1="10.8385"
                      y1="-25.2031"
                      x2="9.02352"
                      y2="36.6437"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#4A6CF7" stop-opacity="0.5" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_596_4435"
                      x1="24"
                      y1="0"
                      x2="24"
                      y2="48"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.1" />
                      <stop offset="1" stop-color="#0A0627" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

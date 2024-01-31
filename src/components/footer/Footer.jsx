import React from "react";
import footerBg from "../../assets/images/footerbg.png";
import footerborder from "../../assets/images/footerborder.svg";
import logoBorder from "../../assets/images/logoBorder.png";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaFacebook,
  FaYoutubeSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const Router=useRouter()
  return (
    <div className="lg:h-[500px] mt-36 lg:mt-24 relative">
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
            <div className="absolute flex items-center  justify-center mx-auto w-[200px] h-[200px] top-0 lg:left-0 bottom-0 p-4">
              <img src="./logo.png" onClick={()=>Router.push("/")} className="w-[100%] cursor-pointer" />
            </div>
          </div>

          <div className="lg:col-span-3 col-span-8">
            <h2 className="lg:text-[30px] text-[25px] uppercase italic lg:pt-10 pt-5">
              Location
            </h2>
            <div className="flex gap-3 lg:pt-6 pt-5 lg:items-center">
              <a
                href="https://www.google.com/maps/place/Indian+Institute+Of+Technology%E2%80%93Ropar+(IIT%E2%80%93Ropar)/@30.9686169,76.473305,17z/data=!3m1!4b1!4m6!3m5!1s0x3905542fe45e58f7:0x5d16c2617cfdbdb8!8m2!3d30.9686169!4d76.473305!16s%2Fm%2F04q3dqb?entry=ttu"
                target="_blank"
              >
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
              </a>

              <p className="text-sm lg:text-base">
                Indian Institute Of Technology Ropar Rupnagar, Punjab, India
                140001
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

              <p>+91 188 124 2191</p>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-8">
            <h2 className="lg:text-[30px] text-[25px] uppercase italic pt-10">
              Follow Us On
            </h2>

            <div className="lg:pt-7 pt-5 flex lg:gap-5 gap-4">
              {/* <div className="flex items-center justify-center text-4xl">
              <FaFacebook />
              </div> */}
              <div className="flex items-center justify-center text-4xl">
                <a
                  href="https://www.instagram.com/advitiya_iitrpr?igsh=c2Fwb205NzlxMHI="
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="flex items-center justify-center text-4xl">
                <a
                  href="https://youtube.com/@advitiyaiitropar9771?si=EEbP3a4EZHHRnBui"
                  target="_blank"
                >
                  <FaYoutubeSquare />
                </a>
              </div>
              <div className="flex items-center justify-center text-4xl">
                <a
                  href="https://www.linkedin.com/company/advitiya-iit-ropar/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col w-[100vw] h-[20vh]"></div>
          <div className="text-bold text-sm w-[100vw] mt-4 h-[10vh]"> | In Collaboration with Vermillion TECH |</div>
          <div className="text-bold text-sm w-[100vw] mt-4 h-[10vh]"> | ADVITIYA&apos;24| All rights reserved |</div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

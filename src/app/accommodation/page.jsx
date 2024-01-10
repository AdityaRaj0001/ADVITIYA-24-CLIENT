"use client";
import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tabData from "./accommodationData";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { FaAnglesDown } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { useRef, useLayoutEffect, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Nav from "../../components/navigation/page"

export default function Index() {
  const Router = useRouter();
  const page1 = useRef();
  const { contextSafe } = useGSAP({ scope: page1 });
  const tl = useRef();
  const [index, setindex] = useState(0);
  const [step, setstep] = useState(0);
  const [nextclicked, setnextclicked] = useState(false);
  // const router = useRouter();


  return (
    <>
      <div
        ref={page1}
        className="bg-[#12121c] page1 h-[100vh] w-[100%] relative text-white"
      >
        <Nav/>



        <div
          id="hero"
          className="h-[calc(100%-65px)] relative hero flex flex-col gap-10 justify-center items-center overflow-hidden w-[100%] "
        >
          {/* <div className="relative flex items-center justify-center xl:w-[100vw] h-[100%]">
            <div
              className="absolute z-50 xl:static xl:w-1/2 flex flex-col   bg-cover bg-center xl:bg-[url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "
              id="heromain"
            >
              <h1 className="text-3xl sm:text-5xl  text-center  md:text-6xl lg:text-7xl xl:text-5xl font-bold herotext">
                Accommodations
              </h1>
              <p className="herosubtext hidden text-right xl:block xl:text-center tracking-wide font-semibold text-md sm:text-xl md:text-2xl lg:text-4xl xl:text-3xl bg-transparent">
                Page
              </p>
            </div>
            <div className="relative   xl:flex xl:items-center xl:justify-center h-[70%] sm:h-[75%] md:h-[80%] xl:w-1/2 xl:h-[100%]">
              <img
                src="./sculpture.svg"
                className=" z-30 opacity-70 xl:opacity-100  asset h-[100%] xl:h-[80%] "
              />
              <img
                src="./Vector Smart Object 1.svg"
                className="absolute asset blur-sm z-10  h-[90px] top-24 -right-12 xl:top-44 xl:right-8"
              />
              <img
                src="./Asset 9@4x 1.svg"
                className="absolute asset z-10  h-[90px] bottom-44 -left-12 xl:bottom-64 xl:left-4 xl:h-[120px] "
              />
              <img
                src="./Asset 4@10x 1.svg"
                className="hidden xl:block xl:absolute asset z-10 h-[60px]  xl:top-32 xl:left-44 xl:h-[100px]"
              />
            </div>
          </div> */}

          {/* <div id="scrolldown" className=" absolute bottom-10 text-5xl mt-20">
            <FaAnglesDown />
          </div> */}
          <div id="scrolldown" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest mt-20">
            <h1>Coming Soon</h1>
          </div>
        </div>
      </div>

      {/* <div
        id="page2"
        className="h-auto w-[100%] relative flex items-center justify-center bg-[#12121c]"
      >
        <img
          src="Group 1000003971.svg"
          alt=""
          className="pointer-events-none absolute h-[500px] opacity-60 right-0 top-0 md:h-[650px]   md:right-0 md:-top-20"
        />

        {step === 0 && (
          <div className="h-[100vh]  w-[100%] flex flex-col md:flex-row  gap-4  items-center justify-start  relative">
            <img
              src="Rectangle 306.svg"
              className="hidden w-[90%] absolute"
              alt=""
            />
            <div className="flex h-[25%]  w-[100%] md:gap-24 flex-wrap items-center justify-between  md:flex-col md:w-[30%] md:h-[100%]   md:justify-center md:items-center">
              {tabData.map((data, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => {
                      setindex(i);
                    }}
                    className="relative cursor-pointer flex items-center justify-center   w-[30%] md:w-[60%] "
                  >
                    {index === i ? (
                      <img
                        src="Rectangle 6328.svg"
                        alt=""
                        className="absolute  "
                      />
                    ) : (
                      <img
                        src="Rectangle 63282.svg"
                        alt=""
                        className="absolute  "
                      />
                    )}

                    <span className="absolute  text-white text-[0.7rem] md:text-lg  z-10">
                      {data.btn}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="w-[100%]  md:w-[70%] h-[70%] md:h-[80%] relative flex flex-col justify-center gap-16 md:gap-20 items-center md:justify-center">

              <p className="text-white w-[95%] md:w-[80%] text-left px-2 md:px-0 md:text-xl">
                {tabData[index].desc}
              </p>

              <button
                className="relative flex items-center cursor-pointer justify-center h-[60px] w-[200px]"
                onClick={() => setstep(step + 1)}
              >
                <img src="Rectangle 6328.svg" alt="" className="absolute  " />
                <span className="absolute  text-white  z-10">Register</span>
              </button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="h-[100vh] z-30  w-full gap-12 flex-col relative overflow-hidden flex items-center justify-center">

            <div className="flex flex-col md:flex-row  gap-6 w-[80%] h-[50%] md:h-[30%]">
              <div className="w-full flex-col h-[40%] items-center justify-center   relative flex ">
                <img
                  src="rectangle633995.svg"
                  alt=""
                  className=" w-[300px] md:w-[450px] absolute"
                />
                <div className="flex mt-4 gap-8 w-[280px] md:w-[350px] items-start justify-end md:justify-start">
                  <span className="text-white text-sm ">Check In</span>
                  <span className="text-gray-500 text-[0.6rem]">
                    February 2023
                  </span>
                </div>

                <div className="flex w-full gap-4 mt-4 h-[40%] justify-center text-white">
                  <span className="relative flex justify-center items-center">
                    <img
                      src="Polygon 1.svg"
                      className="  absolute"
                      alt=""
                    />
                    <a>15</a>
                  </span>
                  <span className="relative flex justify-center items-center">
                    <img
                      src="Polygon 1.svg"
                      className="h-[100%] absolute"
                      alt=""
                    />
                    <a>16</a>
                  </span>
                  <span className="relative flex justify-center items-center">
                    <img
                      src="Polygon 1.svg"
                      className="w-[30px] h-[30px] absolute"
                      alt=""
                    />
                    <a>17</a>
                  </span>
                  <span className="relative flex justify-center items-center">
                    <img
                      src="Polygon 1.svg"
                      className="w-[30px] h-[30px] absolute"
                      alt=""
                    />
                    <a>18</a>
                  </span>
                  <span className="relative flex justify-center items-center">
                    <img
                      src="Polygon 1.svg"
                      className="w-[30px] h-[30px] absolute"
                      alt=""
                    />
                    <a>19</a>
                  </span>
                </div>
              </div>

              <div className="w-full flex-col h-[40%] items-center justify-center   relative flex ">
                <img
                  src="rectangle633995.svg"
                  alt=""
                  className=" absolute w-[300px] md:w-[450px]"
                />
                <div className="flex mt-4 gap-8 w-[280px] md:w-[350px] items-start justify-end md:justify-start">
                  <span className="text-white text-sm ">Check out</span>
                  <span className="text-gray-500 text-[0.6rem]">
                    February 2023
                  </span>
                </div>

                <div className="flex w-full gap-4 mt-4 h-[40%] justify-center text-white">
                  <span className="relative flex justify-center items-center">
                    <img
                      src="Polygon 1.svg"
                      className=" h-[30px] absolute"
                      alt=""
                    />
                    <a>17</a>
                  </span>
                  <span className="relative flex justify-center items-center">
                    <img
                      src="Polygon 1.svg"
                      className="w-[30px] h-[30px] absolute"
                      alt=""
                    />
                    <a>18</a>
                  </span>
                  <span className="relative flex justify-center items-center">
                    <img
                      src="Polygon 1.svg"
                      className="w-[30px] h-[30px] absolute"
                      alt=""
                    />
                    <a>19</a>
                  </span>
                  <span className="relative flex justify-center items-center">
                    <img
                      src="Polygon 1.svg"
                      className="w-[30px] h-[30px] absolute"
                      alt=""
                    />
                    <a>20</a>
                  </span>
                  <span className="relative flex justify-center items-center">
                    <img
                      src="Polygon 1.svg"
                      className="w-[30px] h-[30px] absolute"
                      alt=""
                    />
                    <a>21</a>
                  </span>
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setstep(step + 1);
              }}
              className="w-[50%] h-[35px]  relative flex items-center justify-center"
            >
              <img
                src="Rectangle 6328.svg"
                alt=""
                className="h-full absolute"
              />
              <span className="text-white z-20">Proceed</span>
            </div>
            <div
              onClick={() => {
                setstep(step - 1);
              }}
              className="w-[50%] h-[35px]  relative flex items-center justify-center"
            >
              <img
                src="Rectangle 63282.svg"
                alt=""
                className="h-full absolute"
              />
              <span className="text-white z-20">back</span>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex h-[100vh] items-center justify-center text-white">
            <Card className="w-[90%] sm:w-[70%] md:w-[85%] max-w-xl bg-[#12121c]   text-white">
              <CardHeader className="space-y-1">
                <CardTitle className="text-[1.1rem] sm:text-[1.25rem]">
                  Accommodation Form
                </CardTitle>
                <CardDescription className="text-sm">
                  Please fill all the details very carefully.
                </CardDescription>
              </CardHeader>
              {nextclicked ? (
                <CardContent className="grid gap-4 ">
                  <div className="grid gap-2 ">
                    <Label htmlFor="name">
                      Aadhaar Number
                    </Label>
                    <Input
                      type="text"
                      name="Aadhar Number"
                      id="Aadhar Number"
                      className="text-xs lg:text-sm text-black"
                      placeholder="Enter your full Aadhar Number"
                      required
                    />
                  </div>
                  <div className="grid gap-2 ">
                  <Label htmlFor="aadhar">Aadhar copy</Label>
      <Input id="aadhar" type="file" className="text-black cursor-pointer" />
                  </div>

                </CardContent>
              ) : (
                <CardContent className="grid gap-4 ">
                  <div className="grid gap-2 ">
                    <Label htmlFor="name">Full Name same as Aadhar Card</Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      className="text-xs lg:text-sm text-black"
                      placeholder="Enter your full name"
                      onChange={(e) => handleValueChange(e)}
                      required
                    />
                  </div>
                  <div className="grid gap-2 ">
                    <Label htmlFor="mobile">Mobile Number (+91)</Label>
                    <Input
                      type="tel"
                      name="mobile"
                      id="mobile"
                      className="text-xs lg:text-sm text-black"
                      placeholder="Without country code"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="city_name">Gender</Label>
                    <Select>
                      <SelectTrigger className="w-full text-black" >
                        <SelectValue placeholder="Select"  />
                      </SelectTrigger>
                      <SelectContent className="z-50">
                        <SelectGroup>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>

                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="city_name">City</Label>
                    <Input
                      type="text"
                      name="city_name"
                      id="city_name"
                      className="text-xs lg:text-sm text-black"
                      placeholder="Enter your city name"
                      required
                    />
                  </div>

                </CardContent>
              )}

              <CardFooter className="flex-col">
                {nextclicked ? (
                  <Button
                    className="w-full mb-2 bg-transparent relative "
                    onClick={(e) => handleSubmit(e)}
                  >
                    <img
                      src="Rectangle 356.svg"
                      className="absolute w-full  "
                      alt=""
                    />
                    <p className="z-10">Pay</p>
                  </Button>
                ) : (
                  <Button
                    className="w-full mb-2 bg-transparent relative "
                    onClick={() => {
                      setnextclicked(true);
                    }}
                  >
                    <img
                      src="Rectangle 356.svg"
                      className="absolute w-full  "
                      alt=""
                    />
                    <p className="z-10">Next</p>
                  </Button>
                )}
                {nextclicked ? (
                  <Button
                    className="w-full text-[10px] sm:text-[12px]"
                    variant={"secondary"}
                    onClick={() => setnextclicked(false)}
                  >
                    Go back
                  </Button>
                ) : (
                  <Button
                    className="w-full text-[10px] sm:text-[12px]"
                    variant={"secondary"}
                    onClick={() => setstep(step-1)}
                  >
                    Go Back
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        )}
      </div> */}
    </>
  );
}

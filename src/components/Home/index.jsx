'use client'
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { FaAnglesDown } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { useRef, useLayoutEffect, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Index() {
  const Router = useRouter();
  const page1 = useRef();
  const { contextSafe } = useGSAP({ scope: page1 });
  const tl = useRef();
  // const router = useRouter();
  const openSidebar = contextSafe(() => {
    gsap.from(["#sidebar div", "#sidebar #btn"], {
      onStart: () => {
        document.querySelector("#sidebar").style.display = "flex";
        document.querySelector("#mobile-nav").style.display = "none";
      },
      y: -50,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
    });
  });

  const closeSidebar = contextSafe(() => {
    document.querySelector("#mobile-nav").style.display = "flex";
    document.querySelector("#sidebar").style.display = "none";
  });

  useLayoutEffect(() => {
    const isLargeLaptop = window.innerWidth >= 1280;
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      if (isLargeLaptop) {
        tl.current = gsap.timeline().from("nav #btn", {
          y: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      } else {
        tl.current = gsap.timeline().from(["#mobile-nav div"], {
          y: -100,
          opacity: 0,
          duration: 0.5,
        });
      }
      tl.current
        .from(["#heromain"], {
          y: -100,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
        })
        .from([".asset"], {
          opacity: 0,
          duration: 0.5,
          stagger: 0.3,
          // ease: "back.out(1.7)",
        })
        .from("#scrolldown", {
          y: -80,
          opacity: 0,
          repeat: -1,
          duration: 1.5,
          yoyo: true,
        });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
        },
      });
      tl2.to("#hero", {
        y: 100,
        opacity: 0,
        duration: 2,
      });
    }, page1);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={page1}
        className="bg-[#12121c] page1 h-[100vh] w-[100%] relative text-white"
      >
        <nav className="hidden h-[65px] z-10 xl:flex items-center justify-between px-[2vw] py-[4vh]">
          <span id="btn">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex shadow-2xl flex-row items-center gap-2 outline-none ">
                Events
                <MdOutlineArrowDropDownCircle />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-white bg-[#12121c] ">
                <DropdownMenuItem>Hackathons</DropdownMenuItem>
                <DropdownMenuItem>Workshops</DropdownMenuItem>
                <DropdownMenuItem>Exhibitions</DropdownMenuItem>
                <DropdownMenuItem>Talk Shows</DropdownMenuItem>
                <DropdownMenuItem>Competitions</DropdownMenuItem>
                <DropdownMenuItem>Robowars</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
          <Link id="btn" href="/schedule">
            <Button variant="ghost">Schedule</Button>
          </Link>
          <Link id="btn" href="/sponsors">
            <Button variant="ghost">Sponsors</Button>
          </Link>
          <Link id="btn" href="/accommodation">
            <Button variant="ghost">Accommodation</Button>
          </Link>
          <Link id="btn" href="/isc">
            <Button variant="ghost">Inter-School-Conclave</Button>
          </Link>
          <Link id="btn" href="/contactus">
            <Button variant="ghost">Contact Us</Button>
          </Link>
          <Link id="btn" href="/aboutus">
            <Button variant="ghost">About Us</Button>
          </Link>
          <Link id="btn" href="/faqs">
            <Button variant="ghost">FAQs</Button>
          </Link>

          <span id="btn" className="relative h-[50px] w-[100px] flex justify-center items-center">
          <img src="Vector.svg" className="absolute  w-[200px]" alt="" />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex z-10 flex-row items-center gap-2 outline-none text-2xl">
                {" "}
                <CgProfile />
                <FaBars />{" "}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-white bg-[#12121c] mt-2 mr-2">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <Link href="/signup">
                  <DropdownMenuItem>Login/Register</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
        </nav>
        <nav
          id="sidebar"
          className="hidden z-10 h-[100vh] flex-col xl:hidden  items-center gap-4 md:gap-6  justify-start px-[2vw] py-[4vh]"
        >
          <div className=" w-full flex text-2xl mt-8 items-start justify-end px-4">
            <FaRegWindowClose onClick={closeSidebar} />
          </div>
          <span id="btn">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex flex-row items-center gap-2 outline-none ">
                Events
                <MdOutlineArrowDropDownCircle />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-white mt-2 bg-[#12121c] ">
                <DropdownMenuItem>Hackathons</DropdownMenuItem>
                <DropdownMenuItem>Workshops</DropdownMenuItem>
                <DropdownMenuItem>Exhibitions</DropdownMenuItem>
                <DropdownMenuItem>Talk Shows</DropdownMenuItem>
                <DropdownMenuItem>Competitions</DropdownMenuItem>
                <DropdownMenuItem>Robowars</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
          <Link id="btn" href="/schedule">
            <Button variant="ghost">Schedule</Button>
          </Link>
          <Link id="btn" href="/sponsors">
            <Button variant="ghost">Sponsors</Button>
          </Link>
          <Link id="btn" href="/accommodation">
            <Button variant="ghost">Accommodation</Button>
          </Link>
          <Link id="btn" href="/isc">
            <Button variant="ghost">Inter-School-Conclave</Button>
          </Link>
          <Link id="btn" href="/contactus">
            <Button variant="ghost">Contact Us</Button>
          </Link>
          <Link id="btn" href="/aboutus">
            <Button variant="ghost">About Us</Button>
          </Link>
          <Link id="btn" href="/faqs">
            <Button variant="ghost">FAQs</Button>
          </Link>

          <span id="btn" className="relative h-[50px] w-[100px] flex justify-center items-center">
            <img src="Vector.svg" className="absolute  w-[200px]" alt="" />
            <DropdownMenu  >
              <DropdownMenuTrigger className="flex flex-row z-10 items-center gap-2 outline-none text-2xl">
                {" "}
                <CgProfile />
                <FaBars className="hidden xl:block" />{" "}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-white mt-2 mr-2 bg-[#12121c] ">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <Link href="/signup">
                  <DropdownMenuItem>Login/Register</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
        </nav>
        <img
          src="Layer_1.svg"
          className="absolute pointer-events-none asset top-0  left-0 h-[200px] md:h-[280px]  xl:h-[340px]"
        />
        <img
          src="Ellipse 22.svg"
          className="absolute  pointer-events-none asset top-0 left-0 h-[260px] md:h-[340px] xl:h-[420px]"
        />
        <div
          id="mobile-nav"
          className="flex z-10 h-[30px] xl:hidden px-4 py-8 justify-between items-center"
        >
          <div id="left">
            <h1>LOGO</h1>
          </div>
          <div id="right" className="text-2xl" onClick={openSidebar}>
            <FaBars />
          </div>
        </div>
        <div
          id="hero"
          className="h-[calc(100%-65px)] relative hero flex flex-col gap-10 justify-center items-center overflow-hidden w-[100%] "
        >
          <div className="relative flex items-center justify-center xl:w-[100vw] h-[100%]">
            
            <div
              className="absolute z-50 xl:static xl:w-1/2 flex flex-col   bg-cover bg-center xl:bg-[url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "
              id="heromain"
            >
              <h1 className="text-4xl sm:text-6xl  text-center  md:text-7xl lg:text-8xl xl:text-7xl font-bold herotext">
                ADVITIYA&#39;24
              </h1>
              <p className="herosubtext text-right xl:text-center    tracking-wide font-semibold text-md sm:text-xl md:text-2xl lg:text-4xl xl:text-3xl bg-transparent">
                TechFest IIT ROPAR
              </p>
            </div>
            <div className="relative   xl:flex xl:items-center xl:justify-center h-[70%] sm:h-[75%] md:h-[80%] xl:w-1/2 xl:h-[100%]">

            <img src="./Arwork1.svg" className=" z-30 opacity-70 xl:opacity-100  asset h-[100%] xl:h-[80%] " />
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
          </div>

          <div id="scrolldown" className=" absolute bottom-10 text-5xl mt-20">
            <FaAnglesDown />
          </div>
        </div>
      </div>

      <div
        id="page2"
        className="h-[100vh] w-[100%] flex justify-center items-start bg-white"
      >
        {/* <div id="square" className="w-[200px] h-[200px] bg-black"></div> */}
      </div>
    </>
  );
}

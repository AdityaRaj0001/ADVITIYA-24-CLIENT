"use client";
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
import { useRef, useLayoutEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const page1 = useRef();
  const { contextSafe } = useGSAP({ scope: page1 });
  const tl = useRef();
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
          y:-60,
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      } else {
        tl.current = gsap.timeline().from(["#mobile-nav div","#mobile-nav img"], {
            y:-60,
            opacity: 0,
            duration: 0.5,
        });
      }
     
    }, page1);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div ref={page1}>
        <nav className="hidden h-[65px] z-10 xl:flex items-center justify-between px-[2vw] py-[4vh]">
        <Link id="btn" href="/" className="z-10">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link id="btn" href="/events" className="z-10">
            <Button variant="ghost">Events</Button>
          </Link>
          <Link id="btn" href="/schedule" className="z-10">
            <Button variant="ghost">Schedule</Button>
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

          <span
            id="btn"
            className="relative h-[50px] w-[100px] flex justify-center items-center"
          >
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
          <Link id="btn" href="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link id="btn" href="/events" className="z-10">
            <Button variant="ghost">Events</Button>
          </Link>
          <Link id="btn" href="/schedule">
            <Button variant="ghost">Schedule</Button>
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

          <span
            id="btn"
            className="relative h-[50px] w-[100px] flex justify-center items-center"
          >
            <img src="Vector.svg" className="absolute  w-[200px]" alt="" />
            <DropdownMenu>
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
        <div
          id="mobile-nav"
          className="flex  relative z-10 h-[30px] xl:hidden px-4 py-8 justify-between items-center"
        >
            <img className="w-[200px] absolute -left-4 mt-6 " src="./logo.png"/>
          <div id="left" className="h-full relative w-[20%] flex items-center justify-center">
            {/* <img className="w-[300px] absolute top-0 left-0 " src="./logo.png"/> */}
          </div>
          <div id="right" className="text-2xl" onClick={openSidebar}>
            <FaBars />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

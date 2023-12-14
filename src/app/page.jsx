"use client";
import Link from "next/link";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { BiUpArrow } from "react-icons/bi";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
const TARGET_TEXT = "Advitiya 2024";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// const DropdownIcon=({dropdownclicked})=>{

//   return (
//     <>
//     {dropdownclicked?<BiUpArrow />:<MdOutlineArrowDropDownCircle className="text-white" />}
//     </>
    
//     )
// }

export default function Intro() {
  const firstref = useRef(null);
  const intervalRef = useRef(null);
  const tl = useRef();
  const [text, setText] = useState(TARGET_TEXT);
  const [dropdownclicked, setdropdownclicked] = useState(false)


  const scramble = () => {
    let pos = 0;
    document.querySelector(".animatedbar").style.opacity = 100;
    document.querySelector(".heading").style.color = "rgb(165 180 252);";

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    document.querySelector(".animatedbar").style.opacity = 0;
    setText(TARGET_TEXT);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline()
      .from("#loader h1", {
        onStart:()=>{
          document.querySelector("#loader").style.display="flex"
        },
        delay: 1,
        x: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
      .to("#loader h1", {
        opacity: 0,
        x: -40,
        duration: 1,
        stagger: 0.1,
      })
      .to("#loader", {
        opacity: 0,
        onComplete: () => {
          document.querySelector("#loader").style.display = "none";
          document.querySelector("#intro").style.display = "flex";
        }
      })
      .from("#intro h1", {
        opacity: 0,
        duration: 1,
      })
      .from("#intro h1", {
        delay:0.5,
        onStart: scramble,
      })
      .to("#intro h1",{
        delay:1,
        opacity:0,
        duration:1,
        onComplete: () => {
          document.querySelector("#intro").style.display = "none";
          document.querySelector("#page1").style.display="block"
          document.querySelector("#page2").style.display="flex"
        },
      })
      .from("nav #nav-btn",{
        y:-100,
        opacity:0,
        duration:0.5,
        stagger:0.2
      })
    }, firstref);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div id="main " ref={firstref}>
        <div
          id="loader"
          className="text-indigo-300 h-[100vh]  w-[100vw] bg-black z-2 hidden  items-center justify-center "
        >
          <div className="flex flex-col gap-2 justify-center items-center md:flex-row text-xl  md:text-2xl lg:text-3xl ">
            <h1>Welcome to</h1>
            <h1>the</h1>
            <h1>Future</h1>
          </div>
        </div> 

         <div
          id="intro"
          className="bg-black text-xl md:text-3xl lg:text-5xl hidden h-[100vh] items-center justify-center"
        >
          <motion.h1
            // whileHover={{
            //   scale: 1.025,
            // }}
            // whileTap={{
            //   scale: 0.975,
            // }}
            // onMouseEnter={scramble}
            // onMouseLeave={stopScramble}
            className="heading group flex items-center text-xl md:text-3xl lg:text-5xl relative overflow-hidden rounded-lg border-[1px] border-none tracking-widest bg-slate-black px-4  font-medium  uppercase transition-colors text-indigo-300"
          >
            {text}

            <motion.span
              initial={{
                y: "100%",
              }}
              animate={{
                y: "-100%",
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 1,
                ease: "linear",
              }}
              className="animatedbar duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
            />
          </motion.h1>
        </div>  

        <div id="page1" className="home bg-white hidden relative h-[100vh] w-[100%]">
          {/* <video src="./aftermovie.mp4" autoPlay loop muted className="h-[100%] w-[100%] object-cover absolute"></video> */}
          <div className="page1-content h-[100%] w-[100%] relative text-white ">
            <nav className="hidden xl:flex items-center justify-between px-[2vw] py-[4vh]">
              <span id="nav-btn">

              <DropdownMenu >
                <DropdownMenuTrigger className="flex flex-row items-center gap-2 outline-none ">Events<MdOutlineArrowDropDownCircle/></DropdownMenuTrigger>
                <DropdownMenuContent className="text-white">
                  <DropdownMenuItem>Hackathons</DropdownMenuItem>
                  <DropdownMenuItem>Workshops</DropdownMenuItem>
                  <DropdownMenuItem>Exhibitions</DropdownMenuItem>
                  <DropdownMenuItem>Talk Shows</DropdownMenuItem>
                  <DropdownMenuItem>Competitions</DropdownMenuItem>
                  <DropdownMenuItem>Robowars</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              </span>
              <Button id="nav-btn" variant="ghost">Schedule</Button>
              <Button id="nav-btn" variant="ghost">Accommodation</Button>
              <Button id="nav-btn" variant="ghost">Sponsors</Button>
              <Button id="nav-btn" variant="ghost">Inter-School-Conclave</Button>
              <Button id="nav-btn" variant="ghost">Contact Us</Button>
              <Button id="nav-btn" variant="ghost">About Us</Button>
              <Button id="nav-btn" variant="ghost">FAQs</Button>
              <span id="nav-btn"><DropdownMenu >
                <DropdownMenuTrigger className="flex flex-row items-center gap-2 outline-none text-2xl"> <CgProfile/><FaBars/> </DropdownMenuTrigger>
                <DropdownMenuContent className="text-white mt-2 mr-2">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Login/Register</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu></span>
            </nav>
            <nav id="sidebar" className="hidden h-[100vh] flex-col xl:hidden items-center gap-4 md:gap-6  justify-center px-[2vw] py-[4vh]">
              <div className=" w-full flex text-2xl items-start justify-end px-4" onClick={()=>{
                document.querySelector("#sidebar").style.display="none";
                document.querySelector("#mobile-nav").style.display="flex";
              }}>
              <FaRegWindowClose />
              </div>
              <span id="btn">
              <DropdownMenu >
                <DropdownMenuTrigger className="flex flex-row items-center gap-2 outline-none ">Events<MdOutlineArrowDropDownCircle/></DropdownMenuTrigger>
                <DropdownMenuContent className="text-white">
                  <DropdownMenuItem>Hackathons</DropdownMenuItem>
                  <DropdownMenuItem>Workshops</DropdownMenuItem>
                  <DropdownMenuItem>Exhibitions</DropdownMenuItem>
                  <DropdownMenuItem>Talk Shows</DropdownMenuItem>
                  <DropdownMenuItem>Competitions</DropdownMenuItem>
                  <DropdownMenuItem>Robowars</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              </span>
              <Button id="btn" variant="ghost">Schedule</Button>
              <Button id="btn" variant="ghost">Sponsors</Button>
              <Button id="btn" variant="ghost">Accommodation</Button>
              <Button id="btn" variant="ghost">Inter-School-Conclave</Button>
              <Button id="btn" variant="ghost">Contact Us</Button>
              <Button id="btn" variant="ghost">About Us</Button>
              <Button id="btn" variant="ghost">FAQs</Button>
              <span id="btn"><DropdownMenu id="btn">
                <DropdownMenuTrigger className="flex flex-row items-center gap-2 outline-none text-2xl"> <CgProfile/><FaBars/> </DropdownMenuTrigger>
                <DropdownMenuContent className="text-white mt-2 mr-2">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Login/Register</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu></span>
            </nav>

            <div id="mobile-nav" className="flex xl:hidden px-4 py-8 justify-between items-center">
              <div id="left"><h1>LOGO</h1></div>
              <div id="right" className="text-2xl" onClick={()=>{
                document.querySelector("#sidebar").style.display="flex";
                document.querySelector("#mobile-nav").style.display="none";
              }}><FaBars/></div>
            </div>
          </div>
        </div>

        <div id="page2" className="h-[100vh] w-[100%] hidden bg-white">

        </div>
      </div>
    </>

    // <div className='flex flex-col text-lg'>

    //   <h1>This is Start Page. Below are links to various sections of the pages</h1>

    //   <Link href="/intro">Go to intro</Link>
    //   <Link href="/auth">Go to auth</Link>
    //   <Link href="/events">Go to events</Link>
    //   <Link href="/accommodation">Go to accommodation</Link>
    //   <Link href="/aboutus">Go to About Us</Link>
    // </div>
  );
}

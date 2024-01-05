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
import OurVideos from "../our-videos/OurVideos";
import Compitition from "../compitition/Compitition";
import Heighlight from "../heighlight/Heighlight";
import Footer from "../footer/Footer";

export default function Index() {
  const Router=useRouter()
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
        tl.current = gsap
          .timeline()
          .from("nav #btn", {
            y: -100,
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
          })
          .from(["#hero"], {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
          })
          .from("#scrolldown", {
            y: -80,
            opacity: 0,
            repeat: -1,
            duration: 1.5,
            yoyo: true,
          });
      } else {
        tl.current = gsap
          .timeline()
          .from(["#mobile-nav div"], {
            y: -100,
            opacity: 0,
            duration: 0.5,
          })
          .from(["#hero"], {
            y: -100,
            opacity: 0,
            duration: 1,
          })
          .from("#scrolldown", {
            y: -100,
            opacity: 0,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
          });
      }

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
      <div ref={page1} className="bg-black page1 h-[100vh] w-[100%] relative text-white">
        <nav className="hidden h-[65px] xl:flex items-center justify-between px-[2vw] py-[4vh]">
          <span id="btn">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex flex-row items-center gap-2 outline-none ">
                Events
                <MdOutlineArrowDropDownCircle />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-white bg-black ">
                <DropdownMenuItem >Hackathons</DropdownMenuItem>
                <DropdownMenuItem>Workshops</DropdownMenuItem>
                <DropdownMenuItem>Exhibitions</DropdownMenuItem>
                <DropdownMenuItem>Talk Shows</DropdownMenuItem>
                <DropdownMenuItem>Competitions</DropdownMenuItem>
                <DropdownMenuItem>Robowars</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
          <Link id="btn" href="/schedule">
          <Button  variant="ghost">
            Schedule
          </Button>
          </Link>
          <Link id="btn" href="/sponsors">
          <Button  variant="ghost">
            Sponsors
          </Button>
          </Link>
          <Link id="btn" href="/accommodation">
          <Button  variant="ghost">
            Accommodation
          </Button>
          </Link>
         <Link id="btn" href="/isc">
         <Button  variant="ghost">
            Inter-School-Conclave
          </Button>
         </Link>
          <Link id="btn" href="/contactus">
          <Button  variant="ghost">
            Contact Us
          </Button>
          </Link>
          <Link id="btn" href="/aboutus">
          <Button  variant="ghost">
            About Us
          </Button>
          </Link>
          <Link id="btn" href="/faqs">
          <Button  variant="ghost">
            FAQs
          </Button>
          </Link>
         
          <span id="btn">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex flex-row items-center gap-2 outline-none text-2xl">
                {" "}
                <CgProfile />
                <FaBars />{" "}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-white bg-black mt-2 mr-2">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <Link href='/signup'><DropdownMenuItem>Login/Register</DropdownMenuItem></Link>
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
              <DropdownMenuContent className="text-white mt-2 bg-black ">
                <DropdownMenuItem>Hackathons</DropdownMenuItem>
                <DropdownMenuItem>Workshops</DropdownMenuItem>
                <DropdownMenuItem>Exhibitions</DropdownMenuItem>
                <DropdownMenuItem>Talk Shows</DropdownMenuItem>
                <DropdownMenuItem>Competitions</DropdownMenuItem>
                <DropdownMenuItem >Robowars</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
          <Link id="btn" href="/schedule">
          <Button  variant="ghost">
            Schedule
          </Button>
          </Link>
          <Link id="btn" href="/sponsors">
          <Button  variant="ghost">
            Sponsors
          </Button>
          </Link>
          <Link id="btn" href="/accommodation">
          <Button  variant="ghost">
            Accommodation
          </Button>
          </Link>
         <Link id="btn" href="/isc">
         <Button  variant="ghost">
            Inter-School-Conclave
          </Button>
         </Link>
          <Link id="btn" href="/contactus">
          <Button  variant="ghost">
            Contact Us
          </Button>
          </Link>
          <Link id="btn" href="/aboutus">
          <Button  variant="ghost">
            About Us
          </Button>
          </Link>
          <Link id="btn" href="/faqs">
          <Button  variant="ghost">
            FAQs
          </Button>
          </Link>
        
          <span id="btn">
            <DropdownMenu id="btn">
              <DropdownMenuTrigger className="flex flex-row items-center gap-2 outline-none text-2xl">
                {" "}
                <CgProfile />
                <FaBars />{" "}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-white mt-2 mr-2 bg-black ">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <Link href='/signup'><DropdownMenuItem>Login/Register</DropdownMenuItem></Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
        </nav>
        <div
          id="mobile-nav"
          className="flex h-[30px] xl:hidden px-4 py-8 justify-between items-center"
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
          className="h-[calc(100%-65px)] bg-slate-600 hero flex flex-col gap-10 justify-center items-center w-[100%] bg-cover bg-[url('https://images.unsplash.com/photo-1567201864585-6baec9110dac?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "
        >
          <div className=" mt-28" id="heromain">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl bg-transparent herotext">
              ADVITIYA&#39;24
            </h1>
            <p className="herosubtext text-right tracking-wide  text-sm sm:text-xl md:text-2xl lg:text-4xl bg-transparent">
              TechFest IIT ROPAR
            </p>
          </div>

          <div id="scrolldown" className="text-5xl mt-20">
            <FaAnglesDown />
          </div>
        </div>
      </div>

      <div
        id="page2"
        className="h-[100vh] w-[100%]"
      >
        <OurVideos />
      </div>

      <div
        id="page3"
        className=" w-[100%]"
      >
        <Compitition />
      </div>

      <div
        id="page4"
        className="w-[100%]"
      >
        <Heighlight />
      </div>

      <div
        id="page5"
        className="w-[100%]"
      >
        <Footer />
      </div>



    </>
  );
}

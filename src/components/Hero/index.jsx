"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAnglesDown } from "react-icons/fa6";
const Index = ({ maintext, subtext }) => {
  const page1 = useRef();
  const tl = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from(["#heromain"], {
          delay: 1.5,
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
          trigger: "#hero",
          start: "top top",
          end: "50% top",
        },
      });
      tl2.to(page1.current, {
        y: 100,
        opacity: 0,
        duration: 2,
      });
    }, page1);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={page1}
      className="h-[calc(100%-65px)] relative hero flex flex-col gap-10 justify-center items-center overflow-hidden w-[100%] "
    >
      <div
        id="hero"
        className="relative flex items-center justify-center xl:w-[100vw] h-[100%]"
      >
        <div
          className="absolute z-50 xl:static xl:w-1/2 flex flex-col   bg-cover bg-center xl:bg-[url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "
          id="heromain"
        >
          <h1
            className={`${
              maintext.length > 10
                ? "text-4xl sm:text-5xl text-center md:text-6xl lg:text-6xl font-bold herotext"
                : "text-4xl sm:text-6xl text-center md:text-7xl lg:text-8xl xl:text-7xl font-bold herotext"
            }`}
          >
            {maintext}
          </h1>
          <p className="herosubtext text-right xl:text-center    tracking-wide font-semibold text-md sm:text-xl md:text-2xl lg:text-4xl xl:text-3xl bg-transparent">
            {subtext}
          </p>
        </div>
        <div className="relative   xl:flex xl:items-center xl:justify-center h-[70%] sm:h-[75%] md:h-[80%] xl:w-1/2 xl:h-[100%]">
          <img
            src="./Arwork1.svg"
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
      </div>

      <div id="scrolldown" className=" absolute bottom-10 text-5xl mt-20">
        <FaAnglesDown />
      </div>
      {/* <div
        id="scrolldown"
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest mt-20"
      >
        <h1>Coming Soon</h1>
      </div> */}
    </div>
  );
};

export default Index;

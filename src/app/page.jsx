"use client";
import Link from "next/link";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
const TARGET_TEXT = "Advitiya 2024";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

export default function Home() {
  const firstref = useRef(null);
  const intervalRef = useRef(null);
  const tl = useRef();
  const [text, setText] = useState(TARGET_TEXT);


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

  // function time() {
  //   let a = 0;
  //   let interval1 = setInterval(function () {
  //     a += Math.floor(Math.random() * 20);
  //     if (a < 100) {
  //       document.querySelector("#loader h1").innerHTML = a + "%";
  //     } else {
  //       document.querySelector("#loader h1").innerHTML = "100%";
  //       clearInterval(interval1);
  //     }
  //   }, 150);
  // }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from("#loader h1", {
          delay:1,
          x: 40,
          opacity:0,
          duration:1,
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
        })
        .to("#loader",{
          onStart: () => {
            document.querySelector("#loader").style.display = "none";
          },
        })
        .from("#home h1", {
          opacity: 0,
          duration: 1,
        })
        .from("#home h1", {
          delay: 1,
          onStart: scramble,
        });
    }, firstref);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div id="main" ref={firstref}>
        <div id="loader" className="text-indigo-300">
          <h1>Welcome to</h1>
          <h1>the</h1>
          <h1>Future</h1>
        </div>

        <div
          id="home"
          className="bg-black  text-lg flex h-[100vh] items-center justify-center"
        >
          <motion.h1
            whileHover={{
              scale: 1.025,
            }}
            whileTap={{
              scale: 0.975,
            }}
            onMouseEnter={scramble}
            onMouseLeave={stopScramble}
            className="heading group h-[20vh] flex items-center text-5xl relative overflow-hidden rounded-lg border-[1px] border-none tracking-widest bg-slate-black px-4  font-medium uppercase transition-colors text-indigo-300"
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
      </div>
    </>

    // <div className='flex flex-col text-lg'>

    //   <h1>This is Start Page. Below are links to various sections of the pages</h1>

    //   <Link href="/home">Go to Home</Link>
    //   <Link href="/auth">Go to auth</Link>
    //   <Link href="/events">Go to events</Link>
    //   <Link href="/accommodation">Go to accommodation</Link>
    //   <Link href="/aboutus">Go to About Us</Link>
    // </div>
  );
}

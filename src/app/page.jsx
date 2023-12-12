"use client";
import Link from "next/link";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
export default function Home() {
  const comp = useRef(null);

  function time() {
    let a = 0;
    let interval1 = setInterval(function () {
      a += Math.floor(Math.random() * 20);
      if (a < 100) {
        document.querySelector("#loader h1").innerHTML = a + "%";
      } else {
        document.querySelector("#loader h1").innerHTML = "100%";
        clearInterval(interval1);
      }
    }, 100);
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();

      tl.to("#loader h1", {
        delay: 0.5,
        duration: 1,
        onStart: time(),
      });

      tl.to("#loader",{
        top:"-100vh",
        delay:0.5,
        duration:2
    })
    tl.from("#home",{
      opacity:0,
      duration:2,
      delay:0.5
    })
    
      
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div id="main" ref={comp}>
        <div id="loader">
          <h1>0%</h1>
        </div>

        <div id="home" className="bg-black h-[100vh] text-lg flex justify-center">
        <iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/AOJS6c5xV3g?si=FBheyZf_bGYBkEYw&autoplay=1&controls=0&showinfo=0&rel=0&mute=1"
  title="YouTube video player"
  allowfullscreen
></iframe>

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

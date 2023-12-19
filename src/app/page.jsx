"use client";
import Intro from "@/components/Intro";
import Home from "@/components/Home"
import { useEffect,useState } from "react";

const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

const [loading, setloading] = useState(true)

  return (
    <main>
      {loading?<Intro setloading={setloading}/>:<Home/>}
    </main>
  );
};

export default Page;

"use client";
import Intro from "@/components/Intro/index";
import Home from "@/components/Home/index"
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
    <main className="bg-black">
      {loading?<Intro setloading={setloading}/>:<Home/>}
    </main>
  );
};

export default Page;

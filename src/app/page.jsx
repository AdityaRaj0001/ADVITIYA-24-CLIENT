"use client";
import Intro from "@/components/Intro/index";
import Home from "@/components/Home/index"
import { useEffect,useState } from "react";

const Page = () => {

  const [loading, setloading] = useState(true)

  useEffect(() => {
    // (async () => {
    //   const LocomotiveScroll = (await import("locomotive-scroll")).default;
    //   const locomotiveScroll = new LocomotiveScroll();
    // })();
    
     // Check if the app has been opened before
     const hasBeenOpenedBefore = sessionStorage.getItem("hasBeenOpenedBefore");
     
     if (!hasBeenOpenedBefore) {
       // Run your one-time logic here
 
       // For example, setting loading to false after 3 seconds
       setTimeout(() => {
         setloading(false);
         // Set the flag in sessionStorage to indicate that the app has been opened
         sessionStorage.setItem("hasBeenOpenedBefore", "true");
       }, 10000);
     } else {
       // If the app has been opened before, set loading to false immediately
       setloading(false);
     }

    //   //  Add event listener for beforeunload
    window.addEventListener("beforeunload", () => {
      // Clear sessionStorage to reset the flag on hard reload
      sessionStorage.removeItem("hasBeenOpenedBefore");
    });

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", () => {});
    };

  }, []);


  return (
    <main className="">
      {loading?<Intro setloading={setloading}/>:<Home/>}
    </main>
  );
};

export default Page;

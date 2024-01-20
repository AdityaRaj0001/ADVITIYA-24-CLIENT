import React from "react";

const OurVideos2 = () => {
  return (
    <div className="h-auto mt-12 lg:mb-12 w-[100%] flex flex-col  items-start px-4 justify-center gap-12">
      <div className="w-[60%] lg:ml-16 relative flex items-center">
        <img className="absolute max-w-[300px]" src="./OurVideosTitle.svg" />
        <span className="text-white ml-3 sm:ml-6">Our Videos</span>
      </div>
      <div className="h-[70vh]  flex flex-col gap-12   sm:flex-row-reverse w-[100%] sm:h-[50vh]">
        <div className=" border-black videodiv relative flex items-center justify-center w-[100%] h-[50%] sm:h-[100%]">
          <iframe   src="https://www.youtube.com/embed/Fwn-ZAxCq4g?si=vQsd07LBv1Df6vFr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="h-[100%] sm:w-[80%] "></iframe>
        </div>
        <div className="relative flex items-start sm:items-center justify-center w-[100%] h-[30%] sm:h-[100%] ">
          <p className="px-4 max-w-sm lg:max-w-lg text-white text-sm py-4 lg:text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sequi aliquid, possimus aperiam laboriosam cum modi maxime molestiae architecto placeat omnis expedita minima sit?</p>
          <img className="absolute w-full max-w-sm lg:max-w-lg" src="./androidrect.svg"/>
        </div>
      </div>
      <div className="h-[70vh] flex flex-col gap-12   sm:flex-row w-[100%] sm:h-[50vh]">
        <div className="videodiv relative flex items-center justify-center w-[100%] h-[50%] sm:h-[100%]">
          <iframe   src="https://www.youtube.com/embed/Fwn-ZAxCq4g?si=vQsd07LBv1Df6vFr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="h-[100%] sm:w-[80%] "></iframe>
        </div>
        <div className="relative flex items-start sm:items-center justify-center w-[100%] h-[30%] sm:h-[100%]">
          <p className="px-4 max-w-sm lg:max-w-lg text-white text-sm py-4 lg:text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sequi aliquid, possimus aperiam laboriosam cum modi maxime molestiae architecto placeat omnis expedita minima sit?</p>
          <img className="absolute w-full max-w-sm lg:max-w-lg" src="./androidrect.svg"/>
        </div>
      </div>
    </div>
  );
};

export default OurVideos2;

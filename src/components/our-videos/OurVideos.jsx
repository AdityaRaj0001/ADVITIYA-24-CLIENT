import { OurVideosTitle } from "@/assets/Icons";
import Image from "next/image";
import BG from "../../assets/images/videowaper.svg";
import video from "../../assets/images/video.png";

const OurVideos = () => {
  return (
    <div className="text-[#fff] max-w-[90%] mx-auto">
      <div className="relative">
        <OurVideosTitle />
        <h2
          className="absolute top-[50%] pl-[15px]"
          style={{ transform: "translateY(-50%)" }}
        >
          Our Video
        </h2>
      </div>
      <div>
        <div>
          <div className="grid grid-cols-2 min-h-[400px]">
            <div className="h-full bg-yellow-300"></div>
            <div className="h-full relative w-[110%]">
              <div className="h-[85%] flex ">
                <div className="h-[89%] mt-auto w-[84%] mx-auto">
                  <Image src={video} className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-0">
                  <Image src={BG} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVideos;

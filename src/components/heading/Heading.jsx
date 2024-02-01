import HeadingBg from "../../assets/images/headingBg.svg";
import Image from "next/image";

const Heading = ({ title, heading }) => {
  return (
    <div className="text-[#fff] mt-8 lg:mt-0">
      <div className="relative">
        <Image
          src={HeadingBg}
          className="w-[240px] lg:w-[270px] h-[45px] object-contain"
        />
        <h2
          className="absolute top-[50%] lg:left-[28px] left-[18px] lg:text-[22px] text-[20px]"
          style={{ transform: "translateY(-50%)" }}
        >
          {title}
        </h2>
      </div>

      {/* <div>
        <h2 className=" lg:text-6xl text-3xl italic uppercase lg:mt-5 mt-3">
          {heading}
        </h2>
      </div> */}
    </div>
  );
};

export default Heading;

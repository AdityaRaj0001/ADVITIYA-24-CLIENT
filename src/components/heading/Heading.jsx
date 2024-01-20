import HeadingBg from "../../assets/images/headingBg.svg";
import Image from "next/image";

const Heading = ({ title, heading }) => {
  return (
    <div className="text-[#fff]">
      <div className="relative">
        <Image
          src={HeadingBg}
          className="w-[200px] lg:w-[250px] h-[45px] object-contain"
        />
        <h2
          className="absolute top-[50%] lg:left-[20px] left-[14px] lg:text-[18px] text-[14px]"
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

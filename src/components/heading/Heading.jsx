import HeadingBg from "../../assets/images/headingBg.svg";
import Image from "next/image";

const Heading = ({ title, heading }) => {
  return (
    <div className="text-[#fff]">
      <div className="relative">
        <Image src={HeadingBg} className="w-[259px] h-[45px] object-contain" />
        <h2
          className="absolute top-[50%] left-[20px] text-[18px]"
          style={{ transform: "translateY(-50%)" }}
        >
          {title}
        </h2>
      </div>

      <div>
        <h2 className=" text-6xl italic uppercase mt-5">{heading}</h2>
      </div>
    </div>
  );
};

export default Heading;

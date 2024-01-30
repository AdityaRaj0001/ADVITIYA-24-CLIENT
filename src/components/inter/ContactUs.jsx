import React from "react";
import Heading from "../heading/Heading";
import Image from "next/image";
import contactPerson1 from "../../assets/images/akshit.jpeg";

const ContactUs = () => {
    
  return (
    <div className="w-[90%] mx-auto lg:my-[130px] my-[40px] text-white">
      <Heading title="Contact Us" heading="Contact Us" />

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[50px] place-content-center place-items-center gap-[30px] lg:mt-[78px] mt-[40px]">
        <Card img={"./akshit.jpeg"} name={"Akshit Singh"} mobile={8700625101
}/>
        <Card img={"./alankrit.jpeg"} name={"Alankrit Kadian"} mobile={9915095220}/>
        <Card img={"./Subham.jpg"} name={"Subham"} mobile={9350087395} />
        <Card img={"./Shashank.jpg"} name={"Shashank"} mobile={7764833505}/>
        <Card img={"./DevanshuDhawan.jpeg"} name={"Devanshu Dhawan"} mobile={7087573382}/>
      </div>
    </div>
  );
};

export default ContactUs;

const Card = ({img,mobile,name}) => (
  <div
    className="w-[80%] aspect-square bg-white p-1 relative"
    style={{
      clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 21%)",
    }}
  >
    <img
      src={img}
      className="w-full h-full object-cover"
      style={{
        clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 21%)",
      }}
    />

    <div className="absolute h-full flex items-end bottom-0 right-0 left-0 overflow-hidden group">
      <div className="py-5 px-6 absolute flex flex-col gap-[10px]  bg-[#6E3E96] w-full transform translate-y-full transition-transform duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
        <h2 className="lg:text-[20px] text-[17px]">{name}</h2>
        <p className="opacity-80 text-sm">TSP Head</p>
        <p className="opacity-80 text-sm">+91{mobile}</p>
      </div>
    </div>
  </div>
);

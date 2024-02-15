"use client";
import React from "react";
import Navbar from "@/components/Navbar/index";
import Hero from "@/components/Hero";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
 
const Data = [
  {
    Designation: "Overall Coordinator",
    Name: "ADITYA KUMAR SAHU",
    Contact: "7222999725", 
    Email: "2021MCB1228@iitrpr.ac.in",
  },
  {
    Designation: "Sponsorship Head",
    Name: "NAVIKET MANKOO",
    Contact: "6283504891",
    Email: "2021MCB1239@iitrpr.ac.in",
  },
  {
    Designation: "Development Head",
    Name: "ADITYA RAJ",
    Contact: "8102061991",
    Email: "2021CEB1007@iitrpr.ac.in",
  },
  {
    Designation: "Development Head",
    Name: "SANAM SAI SUSANTH",
    Contact: "9550457919",
    Email: "2021CHB1053@iitrpr.ac.in",
  },
  {
    Designation: "Hospitality Head",
    Name: "Vivek chadgal",
    Contact: "8427793184",
    Email: "2021EEB1222@iitrpr.ac.in",
  },
  {
    Designation: "Video Editing Head",
    Name: "ANUPAM KRISHNA",
    Contact: "8281931184",
    Email: "2021EEB1154@iitrpr.ac.in",
  },
  {
    Designation: "Workshop/Talks & Exhibitions Head",
    Name: "SAKSHAM BANSAL",
    Contact: "7082882902",
    Email: "2021MCB1243@iitrpr.ac.in",
  },
  {
    Designation: "Workshop/Talks & Exhibitions Head",
    Name: "ANKUR AGGARWAL",
    Contact: "9718916355",
    Email: "2021MEB1268@iitrpr.ac.in",
  },
  {
    Designation: "Inter-School Conclave Head",
    Name: "AKSHIT SINGH",
    Contact: "8700625101",
    Email: "2021MCB1229@iitrpr.ac.in",
  },
  {
    Designation: "Inter-School Conclave Head",
    Name: "SHASHANK KUMAR",
    Contact: "7764833505",
    Email: "2021CSB1131@iitrpr.ac.in",
  },
  {
    Designation: "Inter-School Conclave Head",
    Name: "SUBHAM",
    Contact: "9350087395",
    Email: "2021MCB1248@iitrpr.ac.in",
  },
  {
    Designation: "Inter-School Conclave Head",
    Name: "DEVANSHU DHAWAN",
    Contact: "7087573382",
    Email: "2021CSB1082@iitrpr.ac.in",
  },
  {
    Designation: "Inter-School Conclave Head",
    Name: "ALANKRIT KADIAN",
    Contact: "9915095220",
    Email: "2021CSB1065@iitrpr.ac.in",
  },
  {
    Designation: "Sponsorship Head",
    Name: "PRITAM DAS",
    Contact: "9560478245",
    Email: "2021MEB1309@iitrpr.ac.in",
  },
  {
    Designation: "Sponsorship Head",
    Name: "LAKAVATH ASHISH SAI NAIK",
    Contact: "7382252042",
    Email: "2021CHB1046@iitrpr.ac.in",
  },
  {
    Designation: "Sponsorship Head",
    Name: "AABHAS AGARWAL",
    Contact: "9310324115",
    Email: "2021CEB1001@iitrpr.ac.in",
  },
  {
    Designation: "Sponsorship Head",
    Name: "HARSHITA SANDHU",
    Contact: "7888982496",
    Email: "2021MEB1351@iitrpr.ac.in",
  },
  {
    Designation: "Event Management Head (Competitions)",
    Name: "MEHUL GUPTA",
    Contact: "7627000977",
    Email: "2021EEB1188@iitrpr.ac.in",
  },
  {
    Designation: "Event Management Head (Competitions)",
    Name: "PRANAV BALI",
    Contact: "8247032538",
    Email: "2021EEB1193@iitrpr.ac.in",
  },
  {
    Designation: "Event Management Head (Competitions)",
    Name: "KARTIK TIWARI",
    Contact: "8847523470",
    Email: "2021CSB1102@iitrpr.ac.in",
  },
  {
    Designation: "Event Management Head (Competitions)",
    Name: "VARUN SHARMA",
    Contact: "6395696150",
    Email: "2021EEB1032@iitrpr.ac.in",
  },
  {
    Designation: "Event Management Head (Zones)",
    Name: "PRANAV KHURANA",
    Contact: "8800616740",
    Email: "2021MEB1307@iitrpr.ac.in",
  },
  {
    Designation: "Event Management Head (Zones)",
    Name: "ABHISHEK JAISWAL",
    Contact: "8081142136",
    Email: "2021CSB1061@iitrpr.ac.in",
  },
  {
    Designation: "Workshop/Talks & Exhibitions Head",
    Name: "POOJA GOYAL",
    Contact: "7986901782",
    Email: "2020CSB1108@iitrpr.ac.in",
  },
  {
    Designation: "Finance / Budget Head",
    Name: "HARSHIT GUPTA",
    Contact: "7007507732",
    Email: "2021CSB1092@iitrpr.ac.in",
  },
  {
    Designation: "Design & Creativity Decoration Head",
    Name: "ANMOL CHAUHAN",
    Contact: "9799050481",
    Email: "2021MEB1269@iitrpr.ac.in",
  },
  {
    Designation: "Graphic Designing Head",
    Name: "AJAYBEER SINGH",
    Contact: "9501892911",
    Email: "2021CSB1063@iitrpr.ac.in",
  },
  {
    Designation: "Graphic Designing Head",
    Name: "CHARUKANT",
    Contact: "8837875359",
    Email: "2021MEB1278@iitrpr.ac.in",
  },
  {
    Designation: "Graphic Designing Head",
    Name: "ARPIT VATS",
    Contact: "8445008606",
    Email: "2021EEB1157@iitrpr.ac.in",
  },
  {
    Designation: "Security Head",
    Name: "Pranav Attri",
    Contact: "9068801155",
    Email: "2021CHB1050@iitrpr.ac.in",
  },
  {
    Designation: "Security Head",
    Name: "Akash",
    Contact: "95881 63518",
    Email: "2021CHB1037@iitrpr.ac.in",
  },
  {
    Designation: "Media & Publicity Head",
    Name: "KARTIK",
    Contact: "7206936720",
    Email: "2021CEB1025@iitrpr.ac.in",
  },
  {
    Designation: "Media & Publicity Head",
    Name: "PANKAJ SINGH",
    Contact: "9780930375",
    Email: "2021CEB1026@iitrpr.ac.in",
  },
  {
    Designation: "Media & Publicity Head",
    Name: "NIKHIL GARG",
    Contact: "6378010128",
    Email: "2021CSB1114@iitrpr.ac.in",
  },
  {
    Designation: "Media & Publicity Head",
    Name: "ARUSHI GOYAL",
    Contact: "7878592523",
    Email: "2021CEB1012@iitrpr.ac.in",
  },
  {
    Designation: "Media & Publicity Head",
    Name: "DEVANSH GARG",
    Contact: "7206536211",
    Email: "2021EEB1164@iitrpr.ac.in",
  },
  {
    Designation: "Media & Publicity Head",
    Name: "RUDRA KUMAR CHOURASIA",
    Contact: "8383958730",
    Email: "2021EEB1208@iitrpr.ac.in",
  },
  {
    Designation: "Content Writing Head",
    Name: "ROHAN NIJHAWAN",
    Contact: "7042122707",
    Email: "2021EEB1313@iitrpr.ac.in",
  },
  {
    Designation: "Content Writing Head",
    Name: "MANAN DANGWAL",
    Contact: "9711575933",
    Email: "2021EEB1186@iitrpr.ac.in",
  },
];
const Contactus = () => {
  return (
    <>
    <div
      id="page1"
      className="bg-[#12121c] h-[100vh] w-[100%] relative text-white"
    >
      <img
        src="Layer_1.svg"
        className="absolute pointer-events-none asset top-0  left-0 h-[200px] md:h-[280px]  xl:h-[340px]"
      />
      <img
        src="Ellipse 22.svg"
        className="absolute  pointer-events-none asset top-0 left-0 h-[260px] md:h-[340px] xl:h-[420px]"
      />
      <Navbar />
      <Hero maintext="Contact Team" subtext="TechFest IIT ROPAR" />
    </div>
    <div className="h-[100vh] w-full px-4 bg-[#12121c]">
    <img src="./Registrationdesign.svg" className="absolute -z-10 w-[300px] hidden lg:block lg:w-[400px]  lg:-top-[20%] lg:right-0" />
    <img src="./Testimonialbg.svg" className="absolute -z-10 w-[500px] block lg:hidden right-0 top-0 opacity-70" />

    <Table className="text-white">
      {/* <TableCaption>A list of your recent Data.</TableCaption> */}
      <TableHeader >
        <TableRow className="h-16 hover:bg-transparent border-b-0 ">
          <TableHead className=" w-[100px] mt-2 lg:w-[130px] flex items-center justify-center px-0 text-white text-xsm z-10 relative">
            <img src="Vector.svg" className="h-full -z-10 absolute top-0"></img>
            <span className="text-[0.675em] lg:text-[0.875em]">Designation</span></TableHead>
          <TableHead className="text-white">Name</TableHead>
          <TableHead className="text-white">Contact</TableHead>
          <TableHead className="text-white text-right">Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-gray-300">
        {Data.map((elem,i) => (
          <TableRow key={i} className="border-b-0">
            <TableCell className="font-medium">{elem.Designation}</TableCell>
            <TableCell>{elem.Name}</TableCell>
            <TableCell>{elem.Contact}</TableCell>
            <TableCell className="text-right">{elem.Email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
    </div>
    </>
  );
};

export default Contactus;

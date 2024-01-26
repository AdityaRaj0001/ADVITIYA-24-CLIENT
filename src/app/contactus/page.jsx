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
    Name: "Paid",
    Contact: "$250.00",
    Email: "Credit Card",
  },
  {
    Designation: "INV002",
    Name: "Pending",
    Contact: "$150.00",
    Email: "PayPal",
  },
  {
    Designation: "INV003",
    Name: "Unpaid",
    Contact: "$350.00",
    Email: "Bank Transfer",
  },
  {
    Designation: "INV004",
    Name: "Paid",
    Contact: "$450.00",
    Email: "Credit Card",
  },
  {
    Designation: "INV005",
    Name: "Paid",
    Contact: "$550.00",
    Email: "PayPal",
  },
  {
    Designation: "INV006",
    Name: "Pending",
    Contact: "$200.00",
    Email: "Bank Transfer",
  },
  {
    Designation: "INV007",
    Name: "Unpaid",
    Contact: "$300.00",
    Email: "Credit Card",
  },
]
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

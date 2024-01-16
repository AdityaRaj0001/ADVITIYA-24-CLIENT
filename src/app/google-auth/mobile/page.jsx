"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { google_register } from "../../../apis/api";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

const MobileForm = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [image, setImage] = useState("");
	const [college, setCollege] = useState("");

	useEffect(() => {
		setName(searchParams.get("name") || "");
		setEmail(searchParams.get("email") || "");
		setImage(searchParams.get("image") || "");
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if(mobile.length !== 10){
			return toast.error("Enter a valid mobile number");
			
		}

		const newUser = {
			name,
			email,
			mobile,
			college,
		};

		console.log("newUser", newUser);

		const res = await google_register(newUser);
		console.log(res.data);

		if (res.status === 201) {
			toast.success("User registered successfully");
			localStorage.setItem("userToken", res.data.token);
			router.push(`/dashboard?token=${res.data.token}`);
		} else {
			alert("Something went wrong!");
		}
	};

	return (
		<div id="main" className="w-100vw bg-black   h-screen relative flex flex-col items-center justify-center md:flex-row ">
			<div id="right" className="w-full  z-10  flex flex-col items-center justify-center md:w-1/2 ">
				<Card className="w-[85%]  sm:w-[70%] md:w-[85%] max-w-xl  bg-[#12121c]  bg-cover bg-center   text-white">
					<CardHeader className="space-y-1">
						<CardTitle className="text-2xl">Proceed to Registration</CardTitle>
						<CardDescription>Fill some more details</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<div className="items-center justify-center">
							<h2>Name: {name}</h2>
							<h2>Email: {email}</h2>
							<img src={image} alt="User" />
						</div>

						<div className="grid gap-2 ">
							<Label htmlFor="mobile">Mobile Number</Label>
							<Input type="tel" name="mobile" id="mobile" className="text-xs lg:text-sm text-black" placeholder="Enter your mobile number" onChange={(e) => setMobile(e.target.value)} required />
						</div>

						<div className="grid gap-2 ">
							<Label htmlFor="college">College Name</Label>
							<Input type="text" name="college" id="college" className="text-xs lg:text-sm text-black" placeholder="Enter your College name" onChange={(e) => setCollege(e.target.value)} required />
						</div>
					</CardContent>
					<CardFooter className="flex-col">
						<Button className="w-full mb-2 bg-transparent relative " onClick={(e) => handleSubmit(e)}>
							<img src="Rectangle 356.svg" className="absolute w-full  " alt="" />
							<p className="z-10">Register</p>
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default MobileForm;

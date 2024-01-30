"use client";
// pages/forgot-password.js

import React, { useState } from "react";
import { forgotPassword } from "../../apis/api";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const router = useRouter();
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email);

		try {
			const res = await forgotPassword({ email });
			console.log("response: ", res);

			if (res?.status === 201) {
				toast.success("Please check your email for the password reset link");
				setEmail("");
                router.push("/signin");
			}
		} catch (error) {
			console.error("Error:", error);
			// Handle error, perhaps show an error message to the user
		}
	};

	return (
		<>
			<div id="main" className="w-100vw bg-black   h-screen relative flex flex-col items-center justify-center md:flex-row ">
				<img src="Layer_1.svg" className="absolute z-10 pointer-events-none asset top-0  left-0 h-[200px] md:h-[280px]  xl:h-[340px]" />
				<img src="Ellipse 22.svg" className="absolute z-10  pointer-events-none asset top-0 left-0 h-[260px] md:h-[340px] xl:h-[420px]" />
				<div id="left" className="w-full bg-[#12121c]  bg-cover sm:bg-none bg-center md:bg-[url('https://cdn.dribbble.com/users/507150/screenshots/5380757/media/de2a1b1bafe3c7693b7f98362c933e66.gif')]  h-screen absolute  md:static md:w-1/2 "></div>
				<div id="right" className="w-full  z-10  flex flex-col items-center justify-center md:w-1/2 ">
					<Card className="w-[85%]  sm:w-[70%] md:w-[85%] max-w-xl  bg-[#12121c]  bg-cover bg-center   text-white">
						<CardHeader className="space-y-1">
							<CardTitle className="text-2xl">Forgot Password Page</CardTitle>
							<CardDescription>Please provide your email to reset password</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-4">
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<span className="w-full border-t" />
								</div>
								<div className="relative flex justify-center text-xs uppercase">
									<span className="bg-background px-2 text-muted-foreground bg-[#12121c]">Continue to email</span>
								</div>
							</div>
							<div className="grid gap-2 ">
								<Label htmlFor="email">Email Address</Label>
								<Input type="email" name="email" id="email" className="text-xs lg:text-sm text-black" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} required />
							</div>
						</CardContent>
						<CardFooter className="flex-col">
							<Button className="w-full mb-2 bg-transparent relative" onClick={(e) => handleSubmit(e)}>
								<img src="Rectangle 356.svg" className="absolute w-full" alt="" />
								<p className="z-10">Login</p>
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</>
	);
};

export default ForgotPassword;

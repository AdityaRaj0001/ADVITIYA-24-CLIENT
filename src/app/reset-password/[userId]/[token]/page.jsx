"use client";
// pages/forgot-password.js

import React, { useState } from "react";
import { resetPassword } from "../../../../apis/api";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const ForgotPassword = (props) => {
	const [password, setPassword] = useState("");
    const [passShow, setPassShow] = useState(false);
	const {userId, token} = props.params;
	const router = useRouter();

	console.log("userId: ", userId);
	console.log("token: ", token);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Token: ", token);
		console.log("userId: ", userId);
		console.log("clicked: ", password);

		const res = await resetPassword(userId, token, password);

		console.log("response: ", res);

		if (res?.status === 201) {
			toast.success("Password Reset Successfully");
		} else {
			toast.error("Password Reset Failed");
		}
		router.push("/signin");
		setPassword("");
	};

	return (
		<>
			<div id="main" className="w-100vw bg-black   h-screen relative flex flex-col items-center justify-center md:flex-row ">
				<div id="left" className="w-full bg-[#12121c]  bg-cover sm:bg-none bg-center md:bg-[url('https://cdn.dribbble.com/users/507150/screenshots/5380757/media/de2a1b1bafe3c7693b7f98362c933e66.gif')]  h-screen absolute  md:static md:w-1/2 "></div>
				<div id="right" className="w-full  z-10  flex flex-col items-center justify-center md:w-1/2 ">
					<Card className="w-[85%]  sm:w-[70%] md:w-[85%] max-w-xl  bg-[#12121c]  bg-cover bg-center   text-white">
						<CardHeader className="space-y-1">
							<CardTitle className="text-2xl">Reset Password</CardTitle>
							<CardDescription>Enter your new password</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-4">
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<span className="w-full border-t" />
								</div>
								<div className="relative flex justify-center text-xs uppercase">
									<span className="bg-background px-2 text-muted-foreground bg-[#12121c]">create new password</span>
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="password">New Password</Label>
								<div className="flex items-center relative">
									<Input type={!passShow ? "password" : "text"} name="password" id="password" className="text-xs lg:text-sm text-black" placeholder="Enter new password" onChange={(e) => setPassword(e.target.value)} required />
									<div className="showpass right-2 text-black absolute cursor-pointer" onClick={() => setPassShow(!passShow)}>
										{!passShow ? <FaEye /> : <FaEyeSlash />}
									</div>
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex-col">
							<Button className="w-full mb-2 bg-blue-800 relative hover:bg-green-700" onClick={(e) => handleSubmit(e)}>
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

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { userRegister } from "@/apis/api";
import { toast } from "react-toastify";

const defaultUser = {
	name: "",
	email: "",
	mobile: "",
	college_name: "",
	password: "",
	cpassword: "",
};
const Signup = () => {
	const Router = useRouter();

	const [userData, setUserData] = React.useState(defaultUser);
	const [passShow, setPassShow] = useState(false);
	const [cpassShow, setcPassShow] = useState(false);

	const handleValueChange = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { name, mobile, email, college_name, password, cpassword } = userData;
		if (!name || !email || !mobile || !college_name || !password || !cpassword) {
			return toast.warn("Please fill all the fields!");
		}

		if (!email.includes("@")) {
			return toast.warn("Please enter a valid email!");
		}
		if (mobile.length !== 10) {
			return toast.warn("Please enter a valid 10 digit mobile number without country code.");
		}

		if (password !== cpassword) {
			return toast.warn("Password and confirm password should be same!");
		}

		if (password.length < 5) {
			return toast.warn("Password must be atleast 5 characters long!");
		}

		console.log(userData);

		const res = await userRegister(userData);
		console.log(res);

		if (res?.status === 201) {
			toast.success("User Registered Successfully");
			// const loginData = {
			// 	email: userData.email,
			// 	password: userData.password,
			// };

			if (res.data?.token) {
				localStorage.setItem("userToken", res.data.token);
				Router.push("/profile");
				setTimeout(() => {
					toast.info("Please check your email!");
				}, 4000);
			} else {
				toast.error("Something went wrong, please try again later");
			}
			setUserData(defaultUser);
		}
	};

	return (
		<>
			<div id="main" className="w-100vw bg-transparent h-screen relative flex flex-col items-center justify-center md:flex-row ">
				<div id="left" className="w-full bg-cover sm:bg-none bg-center md:bg-[url('https://cdn.dribbble.com/users/507150/screenshots/5380757/media/de2a1b1bafe3c7693b7f98362c933e66.gif')]  h-screen absolute   bg-black md:static md:w-1/2 "></div>
				<div id="right" className="w-full z-10   h-auto flex flex-col items-center justify-center md:w-1/2 ">
					<Card className="w-[85%] sm:w-[70%] md:w-[85%] max-w-xl  bg-black bg-cover bg-center bg-[url('https://cdn.dribbble.com/users/507150/screenshots/5380757/media/de2a1b1bafe3c7693b7f98362c933e66.gif')] md:bg-none  text-white">
						<CardHeader className="space-y-1">
							<CardTitle className="text-[1.1rem] sm:text-[1.25rem]">Create an account</CardTitle>
							<CardDescription className="text-sm">Enter your email below to create your account</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-4 ">
							<div className="flex items-center">
								<Button onClick={() => Router.push("/google-auth")}>
									<Icons.google className="mr-2 h-4 w-4" />
									Google
								</Button>
							</div>
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<span className="w-full border-t" />
								</div>
								<div className="relative flex justify-center z-0 text-s uppercase">
									<span className="bg-background px-2 text-muted-foreground bg-black">Or continue with</span>
								</div>
							</div>
							<div className="grid gap-2 ">
								<Label htmlFor="name">Full Name</Label>
								<Input type="text" name="name" id="name" className="text-xs lg:text-sm text-black" placeholder="Enter your full name" onChange={(e) => handleValueChange(e)} required />
							</div>
							<div className="grid gap-2 ">
								<Label htmlFor="email">Email Address</Label>
								<Input type="email" name="email" id="email" className="text-xs lg:text-sm text-black" placeholder="Enter your email address" onChange={(e) => handleValueChange(e)} required />
							</div>
							<div className="grid gap-2 ">
								<Label htmlFor="mobile">Mobile Number (+91)</Label>
								<Input type="tel" name="mobile" id="mobile" className="text-xs lg:text-sm text-black" placeholder="Without country code" pattern="[0-9]{10}" onChange={(e) => handleValueChange(e)} required />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="college_name">College</Label>
								<Input type="text" name="college_name" id="college_name" className="text-xs lg:text-sm text-black" placeholder="Enter your college name" onChange={(e) => handleValueChange(e)} required />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="password">Password</Label>
								<div className="flex items-center relative">
									<Input type={!passShow ? "password" : "text"} name="password" id="password" className="text-xs lg:text-sm text-black" placeholder="Enter password" onChange={(e) => handleValueChange(e)} required />
									<div className="showpass cursor-pointer" onClick={() => setPassShow(!passShow)}>
										{!passShow ? "Show" : "Hide"}
									</div>
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="cpassword">Confirm Password</Label>
								<div className="flex items-center relative">
									<Input type={!cpassShow ? "password" : "text"} name="cpassword" id="cpassword" className="text-xs lg:text-sm text-black" placeholder="Enter confirm password" onChange={(e) => handleValueChange(e)} required />
									<div className="showpass cursor-pointer" onClick={() => setcPassShow(!cpassShow)}>
										{!cpassShow ? "Show" : "Hide"}
									</div>
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex-col">
							<Button className="w-full mb-2" onClick={(e) => handleSubmit(e)}>
								Create account
							</Button>
							<Button className="w-full text-[10px] sm:text-[12px]" variant={"secondary"} onClick={() => Router.push("/signin")}>
								Already a Registered User ? SignIn.
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</>
	);
};

export default Signup;

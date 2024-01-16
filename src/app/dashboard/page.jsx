"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { userLogout, validateUser } from "../../apis/api";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser } from "@/redux/userSlice";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const token = searchParams.get("token");
	const dispatch = useDispatch();
	const { activeUser } = useSelector((state) => state);

	// const userToken = localStorage?.getItem("userToken");

	const getUser = async () => {
		try {
			if (!token) {
				const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/auth/google/login/success`, {
					withCredentials: true,
				});
				console.log("no token received: ", data.user);
				const user = {
					id: data?.user?._id,
					email: data?.user?.email,
					mobile: data?.user?.mobile,
					name: data?.user?.name,
					college: data?.user?.college_name,
				};
				dispatch(setActiveUser(user));


				if (localStorage.getItem("userToken") === null) {
					if (data?.token) {
						localStorage.setItem("userToken", data.token);
						toast.success("User Logged In Successfully");
					} else {
						console.log(data);
						toast.error(data.message);
					}
				}
			} else {
				const { data } = await validateUser(token);
				console.log("token received: ", data.user);
				const user = {
					id: data?.user?._id,
					email: data?.user?.email,
					mobile: data?.user?.mobile,
					name: data?.user?.name,
					college: data?.user?.college_name,
				};
				dispatch(setActiveUser(user));

				if (data.status === 200) {
					toast.success("User Logged In Successfully");
				} else {
					console.log(data);
					toast.error(data.message);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUser();
	}, [activeUser]);

	const logoutUser = async () => {
		try {
			const userToken = localStorage.getItem("userToken");
			console.log(userToken);

			const response = await userLogout(userToken);

			if (response.status === 200) {
				// Remove the user token from localStorage
				localStorage.removeItem("userToken");
				router.push("/");
				toast.success("User Logged Out Successfully");
				dispatch(setActiveUser(null));
			}
		} catch (error) {
			console.error("Error during logout:", error);
		}
	};

	return (
		<>
			<div id="page1" className="bg-[#12121c] h-[100vh] w-[100%] relative text-white">
				<Navbar />
				<div className="container text-white">
					<h1 style={{ color: "red", textAlign: "center" }}>User Dashboard</h1>
					<div style={{ alignItems: "center", textAlign: "center" }}>
						<div className="col-md-12">
							<h1>Welcome {activeUser?.name}</h1>
							<h2>UserID: {activeUser?.id}</h2>
							<h2>Email: {activeUser?.email}</h2>
							<h2>Mobile: {activeUser?.mobile}</h2>
							<h2>College: {activeUser?.college}</h2>
						</div>
					</div>
				</div>
				<div id="main" className="w-full bg-[#12121c] h-screen relative flex flex-col items-center justify-center md:flex-row">
					<div id="right" className="w-full z-10 flex flex-col items-center justify-center md:w-1/2">
						<Card className="w-[85%] sm:w-[70%] md:w-[85%] max-w-xl bg-[#12121c] bg-cover bg-center text-white">
							<CardFooter className="flex-col">
								<Button className="w-full mb-2 bg-transparent relative" onClick={logoutUser}>
									<img src="Rectangle 356.svg" className="absolute w-full" alt="" />
									<p className="z-10 text-center">Logout</p>
								</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;

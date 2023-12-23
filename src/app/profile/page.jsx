"use client";
import { userLogout } from "@/apis/api";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const Page = () => {
	const router = useRouter();
    const token  = localStorage.getItem("userToken");
    
	const handleLogout = async() => {
		localStorage.removeItem("userToken");
        const res = await userLogout(token);
        console.log(res);
        toast.success("User Logged Out Successfully");
		router.push("/signin");
	};

	return (
		<div className="text-white text-2xl">
			My Profile Page.
			<button onClick={handleLogout} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Logout
			</button>
		</div>
	);
};

export default Page;

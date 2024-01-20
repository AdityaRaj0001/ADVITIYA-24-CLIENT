import axios from 'axios';
import { toast } from "react-toastify";
const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const userRegister = async (user) => {
	try {
		const response = await axios.post(`${serverURL}/api/users/register`, user);
		// console.log("User Registered Successfully at API", user);
		return response;
	} catch (err) {
        toast.error(err.response.data.message)
		console.log("Error in userRegister API: ", err);
		// throw error;
	}
};

export const userLogin = async (user) => {
	try {
		const response =await axios.post(`${serverURL}/api/users/login`, user);
		// console.log("User Login Successfully at API", user);
		return response;
	} catch (err) {
        toast.error(err.response.data.message);
		console.log("Error in userLogin API: ", err);
		// throw error;
	}
};

export const userLogout = async (token) => {
	try {
		const response = await axios.get(`${serverURL}/api/users/logout`, {
			headers: {
				Authorization: token,
			},
		});
        // console.log("User Logout Successful at API");
		return response;
	} catch (err) {
        toast.error(err.response.data.message);
		console.log("Error in userLogout API: ", err);
		// throw error;
	}
};


export const google_register = async (user) => {
	try {
		const response = await axios.post(`${serverURL}/api/users/auth/google/register`, user);
		return response;
	} catch (err) {
		toast.error(err.response.data.message);
		console.log("Error while calling google_register API: ", err);
	}
};

export const validateUser = async (token) => {
	try {
		const response = await axios.get(`${serverURL}/api/users/validate`, {
			headers: {
				Authorization: token,
			},
		});
		return response;
	} catch (err) {
		toast.error(err.response.data.message);
		console.log("Error while calling validateUser API: ", err);
	}
};

export const forgotPassword = async (email) => {
	try {
		const response = await axios.post(`${serverURL}/api/users/password/forgot`, email);
		return response;
	} catch (err) {
		toast.error(err.response.data.message);
		console.log("Error while calling forgotPassword API: ", err);
	}
};

export const resetPassword = async (userId, token, password) => {
	console.log("password at api: ", password);
	console.log("userId at api: ", userId);
	console.log("token at api: ", token);
	try {
		const response = await axios.put(`${serverURL}/api/users/password/reset/${userId}/${token}`, { password });
		return response;
	} catch (err) {
		toast.error(err.response.data.message);
		console.log("Error while calling resetPassword API: ", err);
	}
};
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	id: "",
	name: "",
	email: "",
	mobile: "",
	college: "",
};

const userSlice = createSlice({
	name: "activeUser",
	initialState,
	reducers: {
		setActiveUser: (state, { payload }) => {
			state.id = payload.id;
			state.name = payload.name;
			state.email = payload.email;
			state.mobile = payload.mobile;
			state.college = payload.college;
		},
	},
});

export const { setActiveUser } = userSlice.actions;

export default userSlice.reducer;

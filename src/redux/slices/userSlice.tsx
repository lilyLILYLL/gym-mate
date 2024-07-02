import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "@shared";

const initialState = {
    token: "",
    email: "",
    username: "",
    logedIn: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<{ token: string }>) => {
            state.token = action.payload.token;
            // TODO: save the token to the localStorage
            localStorage.setItem("token", action.payload.token);
        },

        logout: (state) => {
            state = initialState;
            // TODO: remove token from localStorage
        },

        saveMe: (state, action: PayloadAction<IUser>) => {
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.logedIn = true;
        },
    },
});

export const { setToken, logout, saveMe } = userSlice.actions;

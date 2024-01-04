import { RegiesterUserType, UserAuthenticationType, IUser } from "@shared";
import { api } from "./api";

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        // SIGNUP API
        signUp: builder.mutation<any, RegiesterUserType>({
            query: (body) => ({
                url: "signup",
                method: "POST",
                body,
            }),
        }),

        // LOGIN API
        logIn: builder.mutation<{ token: string }, UserAuthenticationType>({
            query: (body) => ({
                url: "login",
                method: "POST",
                body,
            }),
        }),

        //GET CURRENT USER
        getMe: builder.query<IUser, any>({
            query: () => "current",
        }),
    }),
});

export const { useGetMeQuery, useSignUpMutation, useLogInMutation, useLazyGetMeQuery } =
    userApi;

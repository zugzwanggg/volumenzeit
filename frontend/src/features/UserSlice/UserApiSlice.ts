import { userApi } from "../api/UserApi";

export const UserApiSlice = userApi.injectEndpoints({
  endpoints: (builder) => ({

    // Sign Up

    signUp: builder.mutation({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: data,
        credentials: "include"
      }),
    }),

    // Login

    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
        credentials: "include"
      }),
    })
  })
})

export const { useSignUpMutation, useLoginMutation } = UserApiSlice;
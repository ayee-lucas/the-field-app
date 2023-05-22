import React from "react";
import FormInput from "./FormInput";
import { montserrat, roboto } from "@/app/fonts";

const SignUpFirst = () => {
  return (
    <form
      action=""
      className={`${montserrat.className} ${roboto.variable} w-full h-full min-h-[200px]`}
    >
      <h1 className="text-xl py-6 font-medium">ACCOUNT INFORMATION</h1>
      <FormInput
        label="Username"
        placeholder="Enter your username"
        type="text"
      />
      <FormInput label="Email" placeholder="Enter your email" type="email" />
      <div className="flex justify-between items-center gap-4">
        <FormInput
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <FormInput
          label="Confirm Password"
          placeholder="Enter your password"
          type="password"
        />
      </div>
      <div className="flex justify-start items-center mt-2 ">
      <button className="hover:text-white hover:bg-green-600 rounded-lg py-2 px-8 border border-green-600 transition-all">
        Sign Up
      </button>
      </div>

    </form>
  );
};

export default SignUpFirst;

import React from "react";
import { CustomInput } from "../../component/custom-input/CustomInput";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import { LoginInput } from "../../component/input-fields/InputFields";

export const Login = () => {
  return (
    <MainLayout>
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 border shadow bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            Welcome Back ! <span className="font-normal"></span>
          </h1>
          <form className="mt-6">
            {LoginInput.map((item, i) => (
              <CustomInput key={i} {...item} className="mb-2" />
            ))}
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              Login
            </button>
            <p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
              Already registered?
            </p>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

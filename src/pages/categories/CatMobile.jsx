import React from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";

export const CatMobile = () => {
  return (
    <MainLayout>
      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-sm text-indigo-600 font-medium">
              Your Mobile Haven: Where Devices Make Magic Happen!{" "}
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
              Welcome to Your Mobile Haven,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                the ultimate destination for cell phone devices that make magic
                happen!
              </span>
            </h2>
            <p className="max-w-2xl mx-auto">
              Embrace the enchanting blend of sleek aesthetics and powerful
              performance, and discover devices that transform the way you
              communicate, work, and play.
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="javascript:void(0)"
                className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Browse Mobile phones
              </a>
              <a
                href="javascript:void(0)"
                className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="mt-14">
            <img
              src="https://res.cloudinary.com/floatui/image/upload/v1670150563/desktop_dte2ar.png"
              className="w-full shadow-lg rounded-lg border"
              alt=""
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

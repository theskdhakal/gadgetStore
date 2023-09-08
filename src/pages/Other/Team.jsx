import React from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";

export const Team = () => {
  return (
    <MainLayout>
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12 mt-5 shadow-sm ">
          <h2 class="text-base font-bold text-sky-400">
            We have the best equipment in the market
          </h2>
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome team members
          </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <img
                class="object-center object-cover h-auto w-full"
                src="https://i.pinimg.com/474x/1f/2d/4f/1f2d4fa68799ba91ff4787cfe18aaee1.jpg"
                alt="photo"
              />
            </div>
            <div class="text-center py-8 sm:py-6">
              <p class="text-xl text-gray-700 font-bold mb-2">Tom</p>
              <p class="text-base text-gray-400 font-normal">
                Developer and Designer
              </p>
            </div>
          </div>
          <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <img
                class="object-center object-cover h-auto w-full"
                src="https://comicvine.gamespot.com/a/uploads/scale_small/1/12483/277673-175026-jerry.jpg"
                alt="photo"
              />
            </div>
            <div class="text-center py-8 sm:py-6">
              <p class="text-xl text-gray-700 font-bold mb-2">Jerry</p>
              <p class="text-base text-gray-400 font-normal">Founder</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

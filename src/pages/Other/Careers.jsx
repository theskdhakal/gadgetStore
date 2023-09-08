import React from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";

export const Careers = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-center">
          Stay tuned for exciting career opportunities as we grow and expand our
          team at
        </h2>
        <h1 className="text-center bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text text-4xl font-bold">
          GadgetVerse
        </h1>
      </div>
    </MainLayout>
  );
};

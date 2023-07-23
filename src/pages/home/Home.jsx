import React from "react";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";
import { Caroussel } from "../../component/caroussel/Caroussel";

export const Home = () => {
  return (
    <MainLayout>
      <div>
        Welcome to universe of all gagdets!
        <Caroussel />
      </div>
    </MainLayout>
  );
};

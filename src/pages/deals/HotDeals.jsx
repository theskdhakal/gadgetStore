import React from "react";
import deal1 from "../../component/assets/image/promo/deal1.webp";
import deal2 from "../../component/assets/image/promo/deal2.webp";
import { Caroussel } from "../../component/caroussel/Caroussel";
import { MainLayout } from "../../component/layout/main-layout/MainLayout";

export const HotDeals = () => {
  const customCarouselHeight = { height: "10vh" };

  const carouselSlides = [
    {
      style: {
        height: "10vh",
        background: `url(${deal1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },

    {
      style: {
        height: "10vh",
        background: `url(${deal2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },
  ];
  return;
  <MainLayout>
    <div className="py-3">
      <Caroussel carouselStyle={customCarouselHeight} slides={carouselSlides} />
    </div>
  </MainLayout>;
};

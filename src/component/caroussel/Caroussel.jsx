// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../assets/image/logo.JPG";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Caroussel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={logo} />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={logo} />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={logo} />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={logo} />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

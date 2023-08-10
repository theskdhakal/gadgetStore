// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Caroussel = ({ slides, carouselStyle }) => {
  return (
    <div className="caroussel " style={carouselStyle}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 8500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={slide.style}></SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
};

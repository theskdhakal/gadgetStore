// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import games from "../assets/image/games.webp";
import laptops from "../assets/image/laptops.webp";
import phones from "../assets/image/phones.avif";
import tv from "../assets/image/tv.jpg";
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

export const Caroussel = () => {
  return (
    <div className="caroussel " style={{ height: "60vh" }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide
          style={{
            height: "60vh",
            background: `url(${phones})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            height: "60vh",
            background: `url(${laptops})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            height: "60vh",
            background: `url(${tv})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            height: "60vh",
            background: `url(${games})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

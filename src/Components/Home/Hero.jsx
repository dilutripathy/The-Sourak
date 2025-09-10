import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const Hero1 =
    "https://cdn.pixabay.com/photo/2022/04/13/18/43/villa-7130905_1280.png";
  const Hero2 =
    "https://cdn.pixabay.com/photo/2022/05/02/20/52/bedroom-7170424_1280.png";
  return (
    <div>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={Hero1}
            alt="Front pic"
            className="w-full h-[200px] md:h-[350px] lg:h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Hero2}
            alt="2 front pic"
            className="w-full h-[200px] md:h-[350px] lg:h-[500px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;

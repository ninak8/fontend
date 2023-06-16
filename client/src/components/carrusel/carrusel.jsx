import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import data from "./images.json";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";

export default function Carousel() {
  SwiperCore.use([Autoplay]);

  return (
    <div className="containerCar">
      <div className="carri">
        <Swiper
          slidesPerView={1}
          // spaceBetween={30}
          pagination={true}
          scrollbar={{ draggable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {data.img.map((link, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={link} alt={i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="movilOne">
        <Swiper
          slidesPerView={1}
          // spaceBetween={30}
          pagination={true}
          scrollbar={{ draggable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {data.img.map((link, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={link} alt={i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

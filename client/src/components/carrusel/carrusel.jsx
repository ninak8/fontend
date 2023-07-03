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
  // const desktop = ["https://i.ibb.co/qjJWp7x/My-project-1-1.png"];
  // const movil = ["https://i.ibb.co/h97QSNP/1687468880566.jpg"];
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
              <SwiperSlide key={link}>
                <img src={link} alt={i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="tablet">
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
          {data.tablet.map((link, i) => {
            return (
              <SwiperSlide key={link}>
                <img src={link} alt={i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="movilMovil">
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
          {data.movil.map((link, i) => {
            return (
              <SwiperSlide key={link}>
                <img src={link} alt={i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

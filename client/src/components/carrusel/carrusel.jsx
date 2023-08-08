import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";

export default function Carousel({ images }) {
  SwiperCore.use([Autoplay]);
  const pc = images.filter((elem) => elem.name === "PC");
  const tb = images.filter((elem) => elem.name === "TB");
  const mv = images.filter((elem) => elem.name === "MV");

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
          {pc?.map((elem) =>
            elem.image.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={img} />
              </SwiperSlide>
            ))
          )}
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
          {tb?.map((elem) =>
            elem.image.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={img} />
              </SwiperSlide>
            ))
          )}
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
          {mv?.map((elem) =>
            elem.image.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={img} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
}

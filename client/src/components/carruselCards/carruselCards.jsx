import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import Card from "../card/card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function Carrusel(props) {
  // const featured = useSelector((state) => state.featured);
  // console.log(products);
  return (
    <div className="carrusel">
      <div className="title">
        <div>
          <span>DESTACADOS</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
          </svg>
        </div>
        <a href="/catalogs/all">
          <p>VER TODO</p>
        </a>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {props.featured.map((elem, id) => {
          return (
            <SwiperSlide key={id}>
              <Card
                name={elem.name}
                id={elem.id}
                img={elem.image[0]}
                score={elem.score}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

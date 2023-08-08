import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Card from "../card/card";
import "./styles.css";

export default function Carrusel(props) {
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
      <div className="desktop">
        <Swiper
          slidesPerView={5}
          spaceBetween={5}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {props.featured.map((elem, i) => {
            return (
              <SwiperSlide key={i}>
                <Card
                  name={elem.name}
                  id={elem.id}
                  img={elem.image[0]}
                  max={elem.price}
                  score={elem.score}
                  tags={elem.tags}
                  category={elem.category}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="responsiveThree">
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
              <SwiperSlide key={elem.id}>
                <Card
                  name={elem.name}
                  id={elem.id}
                  img={elem.image[0]}
                  max={elem.price}
                  score={elem.score}
                  tags={elem.tags}
                  category={elem.category}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="responsiveFour">
        <Swiper
          slidesPerView={3}
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
              <SwiperSlide key={elem.id}>
                <Card
                  name={elem.name}
                  id={elem.id}
                  img={elem.image[0]}
                  max={elem.price}
                  score={elem.score}
                  tags={elem.tags}
                  category={elem.category}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="responsiveTwo">
        <Swiper
          slidesPerView={2}
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
              <SwiperSlide key={elem.id}>
                <Card
                  name={elem.name}
                  max={elem.price}
                  id={elem.id}
                  img={elem.image[0]}
                  score={elem.score}
                  tags={elem.tags}
                  category={elem.category}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="responsiveOne">
        <Swiper
          slidesPerView={1}
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
              <SwiperSlide key={elem.id}>
                <Card
                  name={elem.name}
                  id={elem.id}
                  max={elem.price}
                  img={elem.image[0]}
                  score={elem.score}
                  tags={elem.tags}
                  category={elem.category}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

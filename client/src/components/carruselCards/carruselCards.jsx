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
                  img={elem.image}
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
                  img={elem.image}
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
                  img={elem.image}
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
                  img={elem.image}
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
                  img={elem.image}
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

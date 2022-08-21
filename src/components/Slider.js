import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Pagination, Autoplay, EffectFade } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        dir = "rtl"
        modules = {[Pagination, Autoplay, EffectFade ]}
        loop = {true}
        effect = 'fade'
        autoplay = {{
          delay: 1500
        }}
        pagination = {{
            clickable: true,
        }}
        className = "mySwiper"
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/1440x300/0d6efd" alt="#"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1440x300/fd7e14" alt="#"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1440x300/198754" alt="#"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1440x300/6610f2" alt="#"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

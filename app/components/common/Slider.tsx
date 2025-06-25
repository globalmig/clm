"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="w-full max-w-[1456px] h-96 relative">
      <Swiper
        spaceBetween={12}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-3xl"
      >
        <SwiperSlide className="">
          <Image src="/images/main/certificates.webp" alt="" fill className="object-cover" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src="/images/main/certificates (1).webp" alt="" fill className="object-cover" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src="/images/main/certificates (2).webp" alt="" fill className="object-cover" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src="/images/main/certificates (3).webp" alt="" fill className="object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

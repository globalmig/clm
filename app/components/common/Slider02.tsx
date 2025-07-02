"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

interface SliderProps {
  images: { images: string }[];
}

export default function Slider02({ images }: SliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  // 이미지가 없으면 기본 메시지 표시
  if (!images || images.length === 0) {
    return (
      <div className="w-full max-w-[1440px] mx-auto  ">
        <div className="h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center bg-gray-200 rounded-3xl">
          <p className="text-gray-500 text-sm sm:text-base">이미지가 없습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto my-6 sm:my-8 lg:my-10  ">
      {/* 메인 슬라이더 */}
      <div className="w-full h-64 sm:h-64 md:h-80 lg:h-[500px] xl:h-[700px] mb-2 sm:mb-4">
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
              "--swiper-navigation-size": "20px",
            } as React.CSSProperties
          }
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay, Pagination]}
          className="mySwiper2 rounded-2xl md:rounded-t-3xl md:rounded-b-none h-full border"
        >
          {images.map((imageObj, index) => (
            <SwiperSlide key={index} className="h-full">
              <Image src={imageObj.images} alt={`Slide ${index + 1}`} width={1000} height={700} className="w-full h-auto max-w-[1440px] max-h-[700px] object-contain" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 썸네일 슬라이더 */}
      <div className="h-0 md:h-24 lg:h-32 xl:h-40">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={8}
          slidesPerView={2.5}
          freeMode={true}
          watchSlidesProgress={true}
          breakpoints={{
            320: {
              slidesPerView: 2.5,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 12,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 12,
            },
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper rounded-b-3xl h-full "
        >
          {images.map((imageObj, index) => (
            <SwiperSlide key={index} className="h-full ">
              <Image
                src={imageObj.images}
                alt={`Thumbnail ${index + 1}`}
                width={1000} height={0}
                className="w-full h-full object-contain cursor-pointer rounded-lg sm:rounded-xl transition-opacity hover:opacity-80 border-2 shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

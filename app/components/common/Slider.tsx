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
    <div className="w-full max-w-[1456px] h-[600px] relative">
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
        className="mySwiper rounded-3xl h-full flex items-center"
      >
        <SwiperSlide className="!flex !items-center !justify-center h-full">
          <Image
            src="/images/main/바이알자동라벨러(CAR-V150).jpg"
            alt=""
            width={1000}
            height={600}
            className="object-contain"
            style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide className="!flex !items-center !justify-center h-full">
          <Image
            src="/images/main/삼면자동라벨러(CAS-3SIDE).jpg"
            alt=""
            width={1000}
            height={600}
            className="object-contain"
            style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide className="!flex !items-center !justify-center h-full">
          <Image
            src="/images/main/상면인쇄&상면자동라벨러(CAU&PAU).jpg"
            alt=""
            width={1000}
            height={600}
            className="object-contain"
            style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide className="!flex !items-center !justify-center h-full">
          <Image
            src="/images/main/상면자동라벨러(CAU-150).jpg"
            alt=""
            width={1000}
            height={600}
            className="object-contain"
            style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide className="!flex !items-center !justify-center h-full">
          <Image
            src="/images/main/상하면자동라벨러(CAUD-150).jpg"
            alt=""
            width={1000}
            height={600}
            className="object-contain"
            style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide className="!flex !items-center !justify-center h-full">
          <Image
            src="/images/main/시린지자동라벨러(CAU-T150).jpg"
            alt=""
            width={1000}
            height={600}
            className="object-contain"
            style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide className="!flex !items-center !justify-center h-full">
          <Image
            src="/images/main/양면자동라벨러(CASS-150).jpg"
            alt=""
            width={1000}
            height={600}
            className="object-contain"
            style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide className="!flex !items-center !justify-center h-full">
          <Image
            src="/images/main/원형반자동라벨러(CMR-150).jpg"
            alt=""
            width={1000}
            height={600}
            className="object-contain"
            style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide className="!flex !items-center !justify-center h-full">
          <Image
            src="/images/main/원형자동라벨러(CAR-150).jpg"
            alt=""
            width={1000}
            height={600}
            className="object-contain"
            style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide className="!flex !items-center !justify-center h-full">
          <Image
            src="/images/main/파우치탁상형라벨러(CPT-150).jpg"
            alt=""
            width={1000}
            height={600}
            className="object-contain"
            style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide className="!flex !items-center !justify-center h-full">
          <Image
            src="/images/main/하면자동라벨러(CAD-150).jpg"
            alt=""
            width={1000}
            height={600}
            className="object-contain"
            style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

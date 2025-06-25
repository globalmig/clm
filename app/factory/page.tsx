import React from "react";
import Slider02 from "../components/common/Slider02";

const ImgData = [
  { images: "/images/factory/factory (1).webp" },
  { images: "/images/factory/factory (2).webp" },
  { images: "/images/factory/factory (3).webp" },
  { images: "/images/factory/factory (4).webp" },
  { images: "/images/factory/factory (5).webp" },
  { images: "/images/factory/factory (6).webp" },
  { images: "/images/factory/factory (7).webp" },
  { images: "/images/factory/factory (8).webp" },
];

export default function Factory() {
  return (
    <div className="my-20 flex flex-col justify-center items-center w-full max-w-[1440px] px-4 mx-auto">
      <h1 className="text-3xl font-bold text-center w-full border-b mb-6 pb-6 ">공장사진</h1>
      <Slider02 images={ImgData} />
    </div>
  );
}

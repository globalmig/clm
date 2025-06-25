import React from "react";
import Image from "next/image";
import Slider02 from "../components/common/Slider02";

const ImgData = [
  { images: "/images/gallery/certificates.webp" },
  { images: "/images/gallery/certificates (1).webp" },
  { images: "/images/gallery/certificates (3).webp" },
  { images: "/images/gallery/certificates (5).webp" },
  { images: "/images/gallery/certificates (6).webp" },
  { images: "/images/gallery/certificates (7).webp" },
  { images: "/images/gallery/certificates (8).webp" },
  { images: "/images/gallery/certificates (9).webp" },
  { images: "/images/gallery/certificates (10).webp" },
  { images: "/images/gallery/certificates (11).webp" },
  { images: "/images/gallery/certificates (12).webp" },
  { images: "/images/gallery/certificates (13).webp" },
  { images: "/images/gallery/certificates (14).webp" },
  { images: "/images/gallery/certificates (15).webp" },
  { images: "/images/gallery/certificates (16).webp" },
  { images: "/images/gallery/certificates (17).webp" },
  { images: "/images/gallery/certificates (18).webp" },
  { images: "/images/gallery/certificates (19).webp" },
  { images: "/images/gallery/certificates (20).webp" },
  { images: "/images/gallery/certificates (22).webp" },
  { images: "/images/gallery/certificates (23).webp" },
  { images: "/images/gallery/certificates (24).webp" },
  { images: "/images/gallery/certificates (25).webp" },
  { images: "/images/gallery/certificates (26).webp" },
  { images: "/images/gallery/certificates (27).webp" },
  { images: "/images/gallery/certificates (30).webp" },
];

export default function Gallery() {
  return (
    <div className="my-20 flex flex-col justify-center items-center w-full max-w-[1440px] px-4 mx-auto">
      <h1 className="text-3xl font-bold text-center w-full border-b mb-6 pb-6 ">시공갤러리</h1>
      <div className="w-full max-w-[1440px] hidden md:block transform duration-500 ease-in-out">
        <Slider02 images={ImgData} />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 border-0 md:border-t pt-10 md:pt-20">
        {ImgData.map((item, index) => (
          <div key={index} className="relative w-full h-[400px] lg:hover:scale-125 hover:shadow-2xl hover:z-10 transform ease-in-out duration-300">
            <Image src={item.images} alt={`시공현장사진 ${index + 1}`} fill className="object-cover rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}

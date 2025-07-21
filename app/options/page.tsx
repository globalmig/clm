import React from "react";
import Image from "next/image";

const ImgData = [
  { images: "/images/main/바이알자동라벨러(CAR-V150).jpg", title: "바이알 자동 라벨러 (CAR-V150)", speed: "Max 15m/min, 50~100ea/min" },
  { images: "/images/main/삼면자동라벨러(CAS-3SIDE).jpg", title: "삼면자동라벨러(CAS-3SIDE)", speed: "Max 15m/min, 30~50ea/min" },
  { images: "/images/main/상면반자동라벨러(CMP-150).jpg", title: "상면반자동라벨러(CMP-150)", speed: "Max 4m/min, 15~25ea/min" },
  { images: "/images/main/상면인쇄&상면자동라벨러(CAU&PAU).jpg", title: "상면인쇄&상면자동라벨러(CAU&PAU)", speed: "Max 15m/min, 30~50ea/min" },
  { images: "/images/main/상면인쇄라벨러(PAU-TTP2410).jpg", title: "상면인쇄라벨러(PAU-TTP2410)", speed: "Max 15m/min, 20~35ea/min" },
  { images: "/images/main/상면자동라벨러(CAU-150).jpg", title: "상면자동라벨러(CAU-150)", speed: "Max 15m/min, 30~80ea/min" },
  { images: "/images/main/상하면자동라벨러(CAUD-150).jpg", title: "상하면자동라벨러(CAUD-150)", speed: "Max 10m/min, 50~80ea/min" },
  { images: "/images/main/시린지자동라벨러(CAU-T150).jpg", title: "시린지자동라벨러(CAU-T150)", speed: "Max 10m/min, 30~50ea/min" },
  { images: "/images/main/양면자동라벨러(CASS-150).jpg", title: "양면자동라벨러(CASS-150)", speed: "Max 10m/min, 30~60ea/min" },
  { images: "/images/main/원형반자동라벨러(CMR-150).jpg", title: "원형반자동라벨러(CMR-150)", speed: "Max 8m/min, 20~30ea/min" },
  { images: "/images/main/원형자동라벨러(CAR-150).jpg", title: "원형자동라벨러(CAR-150)", speed: "Max 25m/min, 40~60ea/min" },
  { images: "/images/main/파우치탁상형라벨러(CPT-150).jpg", title: "파우치탁상형라벨러(CPT-150)", speed: "Max 13m/min, 20~40ea/min" },
  { images: "/images/main/하면자동라벨러(CAD-150).jpg", title: "하면자동라벨러(CAD-150)", speed: "Max 10m/min, 50~80ea/min" },
];

export default function Options() {
  return (
    <div className="my-20 flex flex-col justify-center items-center w-full max-w-[1440px] px-4 mx-auto">
      <h1 className="text-3xl font-bold text-center w-full border-b mb-6 pb-6 ">옵션 제품</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ImgData.map((item, index) => (
          <div key={index} className="item text-center p-4 rounded-lg shadow border h-[320px] flex flex-col justify-between">
            <div className="relative w-full h-[300px] mb-2">
              <Image src={item.images} alt={item.title} fill className="object-contain" />
            </div>
            <div>
              <p className="font-bold text-sm">{item.title}</p>
              <p className="text-zinc-500 text-xs">{item.speed}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

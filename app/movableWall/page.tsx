import React from "react";
import { IoCall } from "react-icons/io5";
import ContactBtn from "../components/common/ContactBtn";
import Image from "next/image";

const btnData = [{ icon: <IoCall />, alt: "유선문의", text: "유선문의", link: "/call" }];

const imgList = [
  { img: "/images/movable/certificates (1).webp", alt: "이동식방음벽- RPP/E.G.I/스틸", key: "0" },
  { img: "/images/movable/certificates (2).webp", alt: "이동식방음벽- RPP/E.G.I/스틸", key: "1" },
  { img: "/images/movable/certificates (3).webp", alt: "이동식방음벽- RPP/E.G.I/스틸", key: "2" },
  { img: "/images/movable/certificates (4).webp", alt: "이동식방음벽- RPP/E.G.I/스틸", key: "3" },
  { img: "/images/movable/certificates (5).webp", alt: "이동식방음벽- RPP/E.G.I/스틸", key: "4" },
];

export default function MovableWall() {
  return (
    <div className="my-20 flex flex-col justify-center items-center w-full max-w-[1440px]  mx-auto">
      <div className="flex flex-col border-b w-full justify-center items-center">
        <h1 className="text-3xl font-bold text-center w-full mb-4 ">이동식방음벽- RPP/E.G.I/스틸</h1>
        <p className="pb-10">지반에 문제가 있어 안전한 방음벽을 설치 하기 힘들때 설치가 가능한 '이동식 방음벽' RPP, E.G.I, 스틸방음벽 3종류의 방음벽이 시공가능합니다.</p>
      </div>
      <div className="itemList w-full flex flex-col items-center gap-2 pt-10 px-4">
        <div className="w-full max-w-[1440px]   gap-2 mb-4 ">
          {btnData.map((btn, index) => (
            <ContactBtn icon={btn.icon} alt={btn.alt} text={btn.text} link={btn.link} key={index} />
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1440px] mb-8 border-b-2 pb-8 md:pb-20 px-4">
        {imgList.map((item) => (
          <Image src={item.img} alt={item.alt} width={0} height={0} sizes="100vw" className="w-full h-auto object-contain mb-4 rounded-3xl" key={item.key} />
        ))}
      </div>
    </div>
  );
}

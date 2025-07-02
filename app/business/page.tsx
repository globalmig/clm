import React from "react";
import ContactBtn from "../components/common/ContactBtn";
import Image from "next/image";

// import react-ions section
import { IoChatboxEllipses } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";

// TODO: 링크 수정
const btnData = [
  { icon: <IoChatboxEllipses />, alt: "견적문의", text: "견적문의", link: "/call" },
  { icon: <IoCall />, alt: "유선문의", text: "유선문의", link: "/call" },
  { icon: <FaMapMarkedAlt />, alt: "오시는길", text: "오시는길", link: "/location" },
];

const imgList = [
  { title: "이동식방음벽- RPP/E.G.I/스틸", img: "/images/business/certificates (7).webp", alt: "이동식방음벽- RPP/E.G.I/스틸", key: "0" },
  { title: "1E.G.I 휀스", img: "/images/business/certificates (13).webp", alt: "1E.G.I 휀스", key: "1" },
  { title: "1RPP 방음벽 - 비계식", img: "/images/business/certificates (3).webp", alt: "1RPP 방음벽 - 비계식", key: "2" },
  { title: "1RPP 방음벽 - 자립식", img: "/images/business/certificates (2).webp", alt: "1RPP 방음벽 - 자립식", key: "3" },
  { title: "스틸방음벽 - 자립식", img: "/images/business/certificates (4).webp", alt: "스틸방음벽", key: "4" },
  { title: "스틸방음벽 - 비계식", img: "/images/business/certificates (6).webp", alt: "스틸방음벽 - 비계식", key: "5" },
];

export default function Business() {
  return (
    <div className="my-20 flex flex-col justify-center items-center w-full max-w-[1440px] px-4 mx-auto">
      <h1 className="text-3xl font-bold text-center w-full border-b mb-6 pb-6 ">시공분야</h1>
      <div className="itemList w-full flex flex-col items-center gap-2">
        <div className="w-full max-w-[1440px]  md:grid grid-cols-3 gap-2 mb-4 ">
          {btnData.map((btn, index) => (
            <ContactBtn icon={btn.icon} alt={btn.alt} text={btn.text} link={btn.link} key={index} />
          ))}
        </div>
      </div>
      {imgList.map((item) => (
        <div key={item.key} className="w-full max-w-[1440px] mb-8 border-b-2 pb-8 md:pb-20">
          <p className="mb-2 text-lg md:text-3xl font-semibold text-center py-2 md:py-10 transform ease-in-out duration-500">{item.title}</p>
          <Image src={item.img} alt={item.alt} width={1000} height={700} sizes="100vw" className="w-full h-auto max-h-[700px] object-cover rounded-3xl" />
        </div>
      ))}
    </div>
  );
}

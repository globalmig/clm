import Image from "next/image";
import Gnb from "./components/common/Gnb";
import Slider from "./components/common/Slider";
import GalleryMini from "./components/common/GalleryMini";
import { link } from "fs";
import GoogleMap from "./components/common/GoogleMap";
import Link from "next/link";

const sectionsData = [
  {
    title: "공장사진",
    link: "/factory",
    content: "대창강건 공장 현장 및 자재관리",
    images: ["/images/main/certificates (10).webp", "/images/main/certificates (11).webp", "/images/main/certificates (12).webp"],
  },
  {
    title: "시공분야",
    link: "/business",
    content: ["이동식방음벽 | E.G.I 휀스 | RPP 방음벽 "],

    images: ["/images/main/business (1).png", "/images/main/business (2).png", "/images/main/business (3).png"],
  },
  {
    title: "이동식 방음벽",
    link: "/movableWall",
    content: "이동식 방음벽 설치",
    subcontent: "지반에 문제가 있어 안전한 방음벽을 설치 하기 힘들때 설치가 가능한 '이동식 방음벽' RPP, E.G.I, 스틸방음벽 3종류의 방음벽이 시공가능합니다.",
    images: ["/images/main/certificates (9).webp", "/images/main/certificates (8).webp", "/images/main/certificates (13).webp"],
  },
  {
    title: "자재매입 및 판매",
    link: "/materials",
    content: ["EGI휀스", "스틸방음판"],
    subcontent: [
      " 공사현장, 공장 등 내부차폐 및 날림먼지 방지를 목적으로 설치하는 경제성이 뛰어난 휀스이다. * 파손 시 부분보수가 간편하여 경제적이고 주위 경관과 잘 어울린다. * 설치가 간단하고, 제품이 견고하며, 용도에 맞게 제작 설치가 쉽다. * 내식성을 높인 제품으로 일반적으로 도금 부식이 적고, 평활하므로 내구성과 안정성을 갖고 있다.",
      "[제품규격] 500*2000*30T * 건설현장 및 토목현장에서 적합한 가설방음벽이다. * 공사장에서 발생하는 각종 소음 및 자비사용 시 발생하는 파편의 방호역할을 한다. * 경량으로 설치 및 보수가 간편하며, 스틸로 만들어져 견고하므로 재사용이 가능하다.",
    ],
    images: ["/images/main/certificates (1).png", "/images/main/certificates (2).png", "/images/main/certificates.png"],
  },
  {
    title: "시공갤러리",
    link: "/gallery",
    content: "(주)대창강건의 작업현장 사진",
    images: ["/images/main/certificates (5).webp", "/images/main/certificates (6).webp", "/images/main/certificates (7).webp"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full max-w-[1440px] mx-auto">
        <Slider />
        <div className="px-4 ">
          <div className="w-full text-center py-10  ">
            <p>각종 안전휀스 방음벽 전문</p>
            <p>안녕하세요 저희 (주) 대창강건은 가설방음벽, EGI 휀스, 홀딩도어, 각종 울타리, 휀스, 방음벽, 가드레일 및 다양한 시공 및 해체를 주 사업분야로 운영 중인 가설울타리 전문 기업입니다.</p>
            <p>또한 EGI판, RPP방음판, 가설방음판, 단관파이프, H-BEAM지주, 클램프, 연결핀등 중고 가설울타리자재를 좋은 가격으로 판매, 매입도 하고 있습니다.</p>
            <p>수년간의 다양한 현장경험과 풍부한 사업운영 노하우로 고객님께 100% 만족을 드리기 위하여 최선을 다할 것을 약속드립니다.</p>
          </div>
          {sectionsData.map((list) => (
            <section className="section01">
              <GalleryMini title={list.title} link={list.link} images={list.images} content={list.content} subcontent={list.subcontent} />
            </section>
          ))}
        </div>
        <Link href="/location">
          <div className="group w-full max-w-[1440px] mx-auto flex justify-between items-center border-b border-zinc-300 pb-4 px-4">
            <h2 className="text-2xl font-bold text-center">오시는길</h2>
            <button className="text-zinc-500 text-base group-hover:text-sky-950 group-hover:text-lg transform duration-200 ease-in-out">더보기 {">"}</button>
          </div>
        </Link>
        <div className=" my-6 rounded-2xl">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

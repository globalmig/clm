"use client";
import Slider from "./components/common/Slider";

import GoogleMap from "./components/common/GoogleMap";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const sectionsData = [
  {
    title: "제품소개",
    link: "/products",
    content: ["하면자동라벨러(CAD-150)", " 상면인쇄&상면자동라벨러(CAU&PAU)", "양면자동라벨러(CASS-150)"],
    subcontent: ["하면자동라벨러(CAD-150)", " 상면인쇄&상면자동라벨러(CAU&PAU)", "양면자동라벨러(CASS-150)"],
    images: ["/images/main/하면자동라벨러(CAD-150).jpg", "/images/main/상면인쇄&상면자동라벨러(CAU&PAU).jpg", "/images/main/양면자동라벨러(CASS-150).jpg"],
  },
];

const videoList = ["/videos/1.mp4", "/videos/2.mp4", "/videos/3.mp4", "/videos/4.mp4", "/videos/5.mp4", "/videos/6.mp4", "/videos/7.mp4"];

export default function Home() {
  const companyRef = useRef<HTMLDivElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch((e) => console.warn("자동 재생 실패:", e));
    }
  }, [currentVideoIndex]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoList.length);
  };

  useEffect(() => {
    // ✅ 커스텀 이벤트 수신
    const handler = () => {
      companyRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      // 주소창에 #company 추가 (선택적)
      history.replaceState(null, "", "/#company");
    };

    window.addEventListener("scroll-to-company", handler);

    // ✅ 최초 접속 시 #company로 직접 들어온 경우 처리
    if (window.location.hash === "#company") {
      setTimeout(() => {
        companyRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        history.replaceState(null, "", window.location.pathname);
      }, 100);
    }

    return () => {
      window.removeEventListener("scroll-to-company", handler);
    };
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border border-zinc-300 rounded-3xl overflow-hidden h-[200px] md:h-[400px] transform transition-transform duration-500 ease-in-out mt-8">
          <div className="w-full md:w-[50%]">
            <video
              ref={videoRef}
              src={videoList[currentVideoIndex]}
              autoPlay
              loop={false} // loop 제거 (연속 재생 위해)
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="w-full h-full object-cover"
            />
            
            {/* <Image src="/images/clm_hero.png" alt="Main Image" width={950} height={800} className="w-full h-full object-cover" /> */}
          </div>
          <div className="w-full hidden md:flex md:w-[50%] ">
            <Slider />
          </div>
        </div>

        {/* 인사말 & 연혁 */}
        <div className="my-20">
          <div className="group w-full flex justify-between items-center border-b border-zinc-300 pb-4 mb-8">
            <h2 className="text-2xl font-bold">회사소개</h2>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10" ref={companyRef} id="company">
            <div className="w-full mt-4 md:mt-20 md:w-[40%] h-full flex justify-center items-center">
              <Image src="/images/products/상면인쇄&상면자동라벨러(CAU&PAU).jpg" alt="상면인쇄&상면자동라벨러(CAU&PAU)" width={900} height={900} className="mx-auto mb-4 w-full h-full  object-cover" />
            </div>
            <div className="w-full md:w-[55%] text-start">
              {/* 인사말 */}
              <div className="w-full text-start">
                <h3 className="text-3xl font-bold  py-6 md:pt-20">인사말</h3>
                <p className="text-sm md:text-base text-zinc-500">
                  ㈜씨엘엠은 다년간의 노하우로 라벨러를 제조하며 창의적인 기술력으로 제품개발을 하고 있습니다.
                  <br className="hidden md:block" /> 반자동라벨러, 자동라벨러, 프린터인쇄라벨러, 특주주문형 라벨러를 고객 사양에 적합하게 제조합니다. <br />
                  <br />
                  <strong className="text-sky-500">정직,정돈,정확</strong> 사훈으로 전 직원이 합력하여 착한 가격과 기술력으로 제조하고 있습니다.
                  <br />
                  앞으로 많은 사람들이 일을 할 수 있도록 일자리를 만들기 위해서 창의적인 발상으로 제품을 개발하고 <br className="hidden md:block" />
                  업그레이드하고 있습니다.
                  <br />
                  <br />
                  최선을 다해 최고의 기술력으로 문제를 해결하겠습니다.
                  <br />
                  <br /> 감사합니다.
                </p>
              </div>

              {/* 연혁 */}
              <div className="w-full mt-10 border-t border-zinc-300 pt-10 md:pt-20">
                <h3 className="text-3xl font-bold mb-4">연혁</h3>
                <div className="flex gap-4">
                  <div className="w-full sm:w-[10%] flex flex-col gap-2">
                    <p className="text-sm font-bold text-zinc-700">2014.09.01</p>
                    <p className="text-sm font-bold text-zinc-700">2018.12</p>
                    <p className="text-sm font-bold text-zinc-700">2019.09</p>
                    <p className="text-sm font-bold text-zinc-700">2020.07.01</p>
                  </div>
                  <div className="w-full sm:w-[90%] text-start flex flex-col gap-2">
                    <p className="text-sm text-zinc-500">씨엘엠(CLM) 회사설립, 개인사업자</p>
                    <p className="text-sm text-zinc-500">대륭20차 분양 입주</p>
                    <p className="text-sm text-zinc-500">회사 확장 매입(현대지식산업센터)</p>
                    <p className="text-sm text-zinc-500">법인 회사로 전환, 주식회사 씨엘엠</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 제품소개 */}
        <section className="my-20">
          <Link href="/products">
            <div className="group w-full flex justify-between items-center border-b border-zinc-300 pb-4 mb-8">
              <h2 className="text-2xl font-bold">제품소개</h2>
              <button className="text-zinc-500 text-base group-hover:text-sky-950 group-hover:text-lg transition-all">더보기 {">"}</button>
            </div>
            {sectionsData.map((item, index) => (
              <div key={index} className="mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
                  {item.images.map((img, i) => (
                    <div key={i} className="flex flex-col items-center text-center border rounded-3xl overflow-hidden p-4 h-full">
                      <Image src={img} alt={item.content[i] || `제품 이미지 ${i + 1}`} width={400} height={300} className="w-full h-[400px] object-cover mb-2" />
                      <p className="text-base font-bold text-zinc-600 mt-7">{item.content[i]}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Link>
        </section>

        {/* 오시는 길 */}
        <Link href="/location">
          <div className="group w-full flex justify-between items-center border-b border-zinc-300 pb-4 mb-4">
            <h2 className="text-2xl font-bold">오시는길</h2>
          </div>
        </Link>
        <div className="my-6 rounded-2xl">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

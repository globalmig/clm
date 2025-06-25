import React from "react";
import Slider02 from "../components/common/Slider02";
import { title } from "process";
import Image from "next/image";

const materialData = [
  {
    title: "EGI휀스",
    size: "",
    content: [
      "공사현장, 공장 등 내부차폐 및 날림먼지 방지를 목적으로 설치하는 경제성이 뛰어난 휀스이다.",
      "파손 시 부분보수가 간편하여 경제적이고 주위 경관과 잘 어울린다.",
      "설치가 간단하고, 제품이 견고하며, 용도에 맞게 제작 설치가 쉽다.",
      "내식성을 높인 제품으로 일반적으로 도금 부식이 적고, 평활하므로 내구성과 안정성을 갖고 있다.",
    ],
    images: [{ images: "/images/materials/slider/1/certificates (19).png" }, { images: "images/materials/slider/1/certificates (20).png" }],
  },
  {
    title: "스틸방음판",
    size: "[제품규격] 500*2000*30T",
    content: [
      " 건설현장 및 토목현장에서 적합한 가설방음벽이다.",
      "공사장에서 발생하는 각종 소음 및 자비사용 시 발생하는 파편의 방호역할을 한다.",
      "경량으로 설치 및 보수가 간편하며, 스틸로 만들어져 견고하므로 재사용이 가능하다.",
    ],
    images: [{ images: "/images/materials/slider/2/certificates (8).png" }, { images: "images/materials/slider/2/certificates (25).png" }],
  },
  {
    title: "RPP방음판",
    size: "",
    content: [
      "소음이나 날림먼지가 많이 발생하는 공사현장, 공장 등 일시적으로 설치하는 경제성이 뛰어난 방음벽이다.",
      "파손 시 재활용이 가능한 친환경 제품이다.",
      "방음판 자체가 완전 평면이므로 디자인적으로 미려하다.",
      "대형 그래픽을 활용하여 기업이미지 광고가 가능하다.",
      "제품 경량화로 반입, 반출, 설치가 간편하고 공기 단축 효과가 뛰어나다.",
    ],
    images: [
      { images: "/images/materials/slider/3/certificates (22).png" },
      { images: "/images/materials/slider/3/certificates (23).png" },
      { images: "/images/materials/slider/3/certificates (24).png" },
    ],
  },
  {
    title: "H-BEAM",
    size: "",
    content: [
      "H형강은 단면의 성능이 우수하고 조합 및 접합이 쉬워 구조용 강재로 이용된다.",
      "H형강은 기둥재에 적합하여 주상복합형 빌딩, 고층빌딩, 공장, 토목용, 교량 등에 널리 사용된다.",
      "구조체의 최적 설계가 쉬우며, 조립 및 시공성이 우수하고 다양한 용도로 사용 가능하다.",
    ],
    images: [
      { images: "/images/materials/slider/4/certificates (1).webp" },
      { images: "/images/materials/slider/4/certificates (2).webp" },
      { images: "/images/materials/slider/4/certificates (3).png" },
      { images: "/images/materials/slider/4/certificates.webp" },
    ],
  },
  {
    title: "단관파이프",
    size: "[제품규격] Ø48.1*1.8T / Ø48.1*2.3T",
    content: [
      "건축물 외부 비계설치 작업대로 사용하는 것이 대부분이며,   외부와 차단각으로 사용 또는 구조물 벽면형틀 지지용으로도 많이 사용되고 있다.  그 뿐만 아니라 휀스 설치 시 뼈대를 이루는 것 또한 단관비계의 역할이다.",
      "도금 강판으로 사용함으로써 뛰어난 부착성과 매끄러운 표면 및 부식을 최대한 억제하여 뛰어난 내구성을 자랑한다. ",
      "파이프와 부속철물(크램프, 연결핀)을 사용하여 폭이나 높이를 자유롭게 조절할 수 있고,   용도와 설치장소에 따라 선택적으로 사용 할 수 있다.",
      "크램프와 연결핀으로 단단하게 고정해 안정성이 높으며, 내구성이 뛰어나고 조립 및 해체가 쉽다.  운반 보관이 편리하여 경제성이 높다.",
    ],
    images: [{ images: "/images/materials/slider/5/certificates (14).png" }, { images: "/images/materials/slider/5/certificates (15).png" }],
  },
];

const materialData2 = [
  {
    title: "반크램프",
    size: "[제품규격] Ø48.6*1/2",
    content: ["가시설 비계 안전시설 설치시 철골에 연결하여 사용한다."],
    image: "/images/materials/slider/6.png",
  },
  {
    title: "이동식크램프(슬라이드)",
    size: "",
    content: ["H-바의 부자재로서 원하는 높이에 맞춰 사용할 수 있다"],
    image: "/images/materials/slider/7.png",
  },
  {
    title: "EGI후크(B/N)",
    size: "",
    content: ["EGI 휀스용 부자재이며, 단관파이프와 휀스를 연결한다"],
    image: "/images/materials/slider/8.png",
  },
  {
    title: "양개조이너",
    size: "",
    content: ["RPP 가설방음판의 부자재이며, 휀스와 휀스를 연결하여 단속력을 강화해 준다."],
    image: "/images/materials/slider/9_10.png",
  },
  {
    title: "단관핀(연결핀)",
    size: "[제품규격] Ø48.6",
    content: ["관단의 내부에 끼워서 두 개의 단관파이프를 서로 연결하는 핀으로서, 두 관의 내부에 끼워서 시계방향으로 70˚ 회전시켜 연결한다."],
    image: "/images/materials/slider/9_10.png",
  },
  {
    title: "자동크램프",
    size: "",
    content: ["단관파이프를 대각선으로 연결하는데 사용하며, 그 밖의 다양한 각도로 자유자재로 활용할 수 있다."],
    image: "/images/materials/slider/11.png",
  },
  {
    title: "고정크램프",
    size: "[제품규격] Ø48.6*Ø48.6",
    content: ["단관파이프를 직각으로 연결하는데 사용하며, 크램프 조작 시 뚜껑을 제치고 양쪽에 부착된 2개의 너트를 조인다."],
    image: "/images/materials/slider/12.png",
  },
  {
    title: "홀딩도어",
    size: "",
    content: [
      "작업장 주변의 날림 먼지로부터 차단, 또는 가설재의 용도로 사용된다.",
      "보행자의 통행안전을 확보함으로써 안전사고를 미리 방지하는 역할을 한다.",
      "설치가 간단하고 견고하며, 용도에 맞게 제작 설치가 가능하다.",
      "내식성을 높인 제품으로 도금 부식이 적고 균일하며 평활하므로 뛰어난 내구성과 안정성을 갖고 있다.",
    ],
    image: "/images/materials/slider/13.webp",
  },
  {
    title: "양개도어",
    size: "",
    content: [
      "작업장 주변의 날림 먼지로부터 차단, 또는 가설재의 용도로 사용된다.",
      "보행자의 통행안전을 확보함으로써 안전사고를 미리 방지하는 역할을 한다.",
      "설치가 간단하고 견고하며, 용도에 맞게 제작 설치가 가능하다.",
      "내식성을 높인 제품으로 도금 부식이 적고 균일하며 평활하므로 뛰어난 내구성과 안정성을 갖고 있다.",
    ],
    image: "/images/materials/slider/14.webp",
  },
];
export default function Materials() {
  return (
    <div className="my-20 flex flex-col justify-center items-center w-full max-w-[1440px] px-4 mx-auto ">
      <h1 className="text-3xl font-bold text-center w-full border-b mb-6 pb-6 ">자재 매입 및 판매</h1>
      {materialData.map((section, index) => (
        <div key={index} className="mb-16 border-b  w-full max-w-[1440px]">
          <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
          {section.size && <p className="mb-2 text-sm text-gray-500">{section.size}</p>}
          <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
            {section.content.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <Slider02 images={section.images} />
        </div>
      ))}
      {materialData2.map((section, index) => (
        <div key={index} className="mb-16 border-b w-full pb-20">
          <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
          {section.size && <p className="mb-2 text-sm text-gray-500">{section.size}</p>}
          <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
            {section.content.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <div className="relative w-full h-[500px] md:h-[800px] rounded-3xl mt-10">
            <Image src={section.image} alt="" fill className="object-cover rounded-3xl" />
          </div>
        </div>
      ))}
    </div>
  );
}

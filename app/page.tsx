import Slider from "./components/common/Slider";
import GalleryMini from "./components/common/GalleryMini";
import GoogleMap from "./components/common/GoogleMap";
import Link from "next/link";

const sectionsData = [
  {
    title: "제품소개",
    link: "/products",
    content: "",
    subcontent: "",
    images: ["/images/main/하면자동라벨러(CAD-150).jpg", "/images/main/상면인쇄&상면자동라벨러(CAU&PAU).jpg", "/images/main/양면자동라벨러(CASS-150).jpg"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full max-w-[1440px] mx-auto">
        <Slider />
        <div className="px-4 ">
          <div className="w-full text-center py-10  ">
            <p>
              <strong className="text-xl">씨엘엠(CLM)</strong>
              <br />은 산업 현장의 효율성과 안전성을 극대화하는 산업용 기계 및 설비 전문 제조 기업입니다. <br />
              다년간 축적된 기술력과 정밀한 설계 능력을 바탕으로, 다양한 산업 분야에 최적화된 맞춤형 기계를 개발·공급하고 있습니다. <br />
              우리는 "기계 그 이상의 가치"를 제공하기 위해 노력합니다. 단순한 장비를 넘어, 고객의 생산성과 품질 향상을 이끄는 스마트한 솔루션을 제안하며, <br />
              지속적인 기술 개발과 품질 관리를 통해, 고객의 신뢰를 최우선 가치로 삼는 씨엘엠은 오늘보다 더 나은 내일을 위한 산업 혁신의 파트너가 되겠습니다.
            </p>
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

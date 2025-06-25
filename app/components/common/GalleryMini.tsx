"use client"; // Next.js의 클라이언트 컴포넌트일 경우 필요
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface GalleryMiniProps {
  title: string;
  content?: string | string[];
  subcontent?: string | string[];
  link: string;
  images: string[]; // 이미지 URL 배열
}

export default function GalleryMini(props: GalleryMiniProps) {
  return (
    <div className="mt-20 mb-32">
      <Link href={props.link}>
        <div className="group w-full max-w-[1440px] mx-auto flex justify-between items-center border-b border-zinc-300 pb-4">
          <h2 className="text-2xl font-bold text-center">{props.title}</h2>
          <button className="text-zinc-500 text-base group-hover:text-sky-950 group-hover:text-lg transform duration-200 ease-in-out">더보기 {">"}</button>
        </div>

        <div className="flex justify-between gap-4 flex-wrap mt-4">
          {props.images.map((imgSrc, index) => (
            <div key={index} className="w-full sm:w-[48%] md:w-[32%]">
              <Image
                src={imgSrc}
                alt={`Gallery Image ${index + 1}`}
                width={800}
                height={800}
                layout="responsive" // 핵심: 비율 맞춤
                className="rounded-xl object-cover hover:scale-105 transform ease-in-out duration-200 hover:shadow-xl hover:border"
              />
            </div>
          ))}
        </div>

        {/* content와 subcontent를 배열로 처리 */}
        <div className="mt-4">
          {(() => {
            // content를 배열로 정규화
            const contentArray: string[] = Array.isArray(props.content) ? props.content : props.content ? [props.content] : [];
            const subcontentArray: string[] = Array.isArray(props.subcontent) ? props.subcontent : props.subcontent ? [props.subcontent] : [];

            return contentArray.map((contentItem: string, index: number) => (
              <div key={index} className="mb-2">
                <p className="text-xl">{contentItem}</p>
                {subcontentArray[index] && <p className="text-zinc-600 mb-6">{subcontentArray[index]}</p>}
              </div>
            ));
          })()}
        </div>
      </Link>
    </div>
  );
}

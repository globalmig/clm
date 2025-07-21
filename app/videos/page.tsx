"use client";
import React, { useState } from "react";

// TODO: api 연결
const videoList = [
  {
    title: "바이알자동라벨러",
    video: "/images/videos/바이알자동라벨러.mp4",
    alt: "바이알자동라벨러",
    key: "0",
  },
  {
    title: "상측면자동라벨러",
    video: "/images/videos/상측면자동라벨러.mp4",
    alt: "상측면자동라벨러",
    key: "1",
  },
];

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState("바이알자동라벨러");

  const currentVideo = videoList.find((v) => v.title === selectedVideo);

  return (
    <div className="my-20 flex flex-col justify-center items-center w-full max-w-[1440px] px-4 mx-auto">
      <h1 className="text-3xl font-bold text-center w-full border-b mb-6 pb-6">제품 영상</h1>

      <div className="flex flex-wrap gap-4 mb-10">
        {videoList.map((item) => (
          <button key={item.key} className={`border rounded-xl px-4 py-1 ${selectedVideo === item.title ? "bg-black text-white" : ""}`} onClick={() => setSelectedVideo(item.title)}>
            {item.title}
          </button>
        ))}
      </div>

      {/* 선택된 영상 보여주기 */}
      {currentVideo && (
        <div className="w-full max-w-[1440px] mb-8 border-b-2 pb-8 md:pb-20">
          <p className="mb-2 text-lg md:text-3xl font-semibold text-center py-2 md:py-10">{currentVideo.title}</p>
          <video src={currentVideo.video} controls playsInline muted className="w-full max-h-[700px] rounded-3xl object-cover" />
        </div>
      )}
    </div>
  );
}

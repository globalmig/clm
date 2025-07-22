"use client";
import React, { useEffect, useState } from "react";
import type { Product } from "@/type/product";
import axios from "axios";

export default function Videos() {
  const [videoList, setVideoList] = useState<Product[]>([]);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Product[]>("/api/product_video");
        setVideoList(res.data);
        if (res.data.length > 0) {
          setSelectedVideo(res.data[0].title); // 첫 번째 영상 자동 선택
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchData();
  }, []);

  const currentVideo = videoList.find((v) => v.title === selectedVideo);

  return (
    <div className="my-20 flex flex-col justify-center items-center w-full max-w-[1440px] pb-20 px-4 mx-auto">
      <h1 className="text-3xl font-bold text-center w-full border-b mb-6 pb-6">제품 영상</h1>

      {videoList.length === 0 ? (
        <p className="text-gray-500 text-lg py-20">준비중입니다.</p>
      ) : (
        <>
          <div className="flex flex-wrap gap-4 mb-10">
            {videoList.map((item, idx) => (
              <button key={idx} className={`border rounded-xl px-4 py-1 ${selectedVideo === item.title ? "bg-black text-white" : ""}`} onClick={() => setSelectedVideo(item.title)}>
                {item.title}
              </button>
            ))}
          </div>

          {currentVideo && (
            <div className="w-full max-w-[1440px] mb-8 border-b-2 pb-8 md:pb-20">
              <p className="mb-2 text-lg md:text-3xl font-semibold text-center py-2 md:py-10">{currentVideo.title}</p>
              <video src={currentVideo.file_url} controls playsInline muted className="w-full max-h-[700px] rounded-3xl object-cover" />
            </div>
          )}
        </>
      )}
    </div>
  );
}

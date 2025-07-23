"use client";
import React, { useEffect } from "react";

export default function CallPage() {
  useEffect(() => {
    window.location.href = "tel:0224692370";
  }, []);

  return (
    <div className="my-20 flex flex-col justify-center items-center w-full max-w-[1440px] px-4 mx-auto h-[600px]">
      <p className="text-center text-lg md:text-xl font-semibold text-gray-800 px-4 py-3 rounded-lg shadow-sm gap-10 flex flex-col">
        <p className="text-green-700 font-bold">주식회사 씨엘엠 입니다.</p>
        <p className="ml-2">
          📞
          <a href="tel:01040594871" className="underline underline-offset-2 text-blue-600">
            02-2169-2370
          </a>
        </p>
        <p className="block md:inline mt-2 md:mt-0">
          전화연결은 <span className="font-medium ">모바일</span>에서 가능합니다.
        </p>
      </p>
    </div>
  );
}

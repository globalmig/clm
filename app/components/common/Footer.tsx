import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-black w-full py-10">
      <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-center px-4 py-6 text-zinc-400">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-2xl font-bold pb-2">(주)씨엘엠</p>
          <p className="text-sm">
            (주)씨엘엠 정득주 | 서울특별시 금천구 두산로 70, 비동 3층 327호(독산동,현대지식산업센터)
            <br />
            사업자등록번호 : 620-88-01679 | 전화번호 : 02-2469-2370
          </p>
          <p>이메일 : jerryjeong2012@daum.net</p>
          <Link href="/manager" className="text-sm text-zinc-300 hover:text-white transition-colors duration-200">
            관리자 페이지
          </Link>
        </div>

        <div className=" text-xs flex flex-col justify-center text-center gap-1 pt-4 border-t border-zinc-700 mt-4">
          <p>© 2025 씨엘엠. All rights reserved.</p>
          <a href="https://m-mig.com/homepage-development" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Designed & Developed by Globalmig
          </a>
        </div>
      </div>
    </div>
  );
}

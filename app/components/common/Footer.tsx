import React from "react";

export default function Footer() {
  return (
    <div className="bg-black w-full py-10">
      <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-center px-4 py-6 text-zinc-400">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-2xl font-bold pb-2">(주)대창강건</p>
          <p className="text-sm">
            (주)대창강건 표문은 경기도 광주시 도척면 도척윗로 392-44
            <br />
            사업자등록번호 : 129-86-91844 | 전화번호 : 031-797-4870
          </p>
          <p>이메일 : daechang4871@naver.com</p>
        </div>

        <div className=" text-xs flex flex-col justify-center text-center gap-1 pt-4 border-t border-zinc-700 mt-4">
          <p>© 2025 대창강건. All rights reserved.</p>
          <a href="https://mig.kr/portfolio/3/list" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Designed & Developed by Globalmig
          </a>
        </div>
      </div>
    </div>
  );
}

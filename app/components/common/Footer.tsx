import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black w-full py-10">
      <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-center px-4 py-6 text-zinc-400">
        <div className="flex flex-col gap-2 items-center">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2 mb-4">
            <Image src="/images/logo.gif" alt="CLM Logo" width={50} height={50} />
            <div>
              <p>(주)씨엘엠</p>
              <p className="text-xs text-center text-zinc-500">CLM CO.LTD</p>
            </div>
          </Link>

          <p className="text-sm text-center">
            주식회사 씨엘엠 대표이사 : 정득주
            <br />
            사업자등록번호 : 620-88-01679 | 이메일 : jerryjeong2012@daum.net
            <br /> 전화번호 : 02-2169-2370 | FAX : 02-2169-2371
          </p>

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

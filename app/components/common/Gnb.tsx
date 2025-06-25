import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Gnb() {
  return (
    <div className="">
      <div className="w-full max-w-[1440px] mx-auto border-b mb-4  h-24 flex items-center px-4 justify-between ">
        <Link href="/" className="text-2xl font-bold flex items-center gap-4">
          <Image src={"/images/main/logo2.png"} alt="대창강건 로고" width={50} height={50} className="rounded-xl" />
          (주)대창강건
        </Link>
        <ul className="hidden lg:flex gap-10 ">
          <li>
            <Link href="/">홈</Link>
          </li>
          <li>
            <Link href="/factory">공장사진</Link>
          </li>
          <li>
            <Link href="/business">시공분야</Link>
          </li>
          <li>
            <Link href="/movableWall">이동식방음벽</Link>
          </li>
          <li>
            <Link href="/materials">자재매입 및 판매</Link>
          </li>
          <li>
            <Link href="/gallery">시공갤러리</Link>
          </li>
          <li>
            <Link href="/location">오시는길</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

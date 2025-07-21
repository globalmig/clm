"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Gnb() {
  const [isOpen, setIsOpen] = useState(false);

  // 모바일 메뉴 열기/닫기 토글
  const toggleMenu = () => setIsOpen(!isOpen);

  // 메뉴 열렸을 때 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="border-b mb-4">
      <div className="w-full max-w-[1440px] mx-auto h-24 flex items-center justify-between px-4">
        {/* 로고 */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-4">
          <Image src="/images/logo.gif" alt="CLM Logo" width={40} height={40} />
          씨엘엠
        </Link>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden lg:flex gap-10">
          <li>
            <Link href="/">홈</Link>
          </li>
          <li>
            <Link href="/products">제품소개</Link>
          </li>
          <li>
            <Link href="/options">옵션제품</Link>
          </li>
          <li>
            <Link href="/videos">제품영상</Link>
          </li>
          {/* <li>
            <Link href="/movableWall">납품실적</Link>
          </li> */}

          <li>
            <Link href="/board">고객 게시판</Link>
          </li>
        </ul>

        {/* 모바일 햄버거 버튼 */}
        <button className="lg:hidden text-2xl" onClick={toggleMenu} aria-label="모바일 메뉴 열기">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <nav className="lg:hidden absolute top-24 left-0 w-full bg-white z-50 shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg">
            <li>
              <Link href="/" onClick={toggleMenu}>
                홈
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={toggleMenu}>
                제품소개
              </Link>
            </li>
            {/* <li>
              <Link href="/movableWall" onClick={toggleMenu}>
                납품실적
              </Link>
            </li> */}
            <li>
              <Link href="/options" onClick={toggleMenu}>
                옵션제품
              </Link>
            </li>
            <li>
              <Link href="/videos" onClick={toggleMenu}>
                제품영상
              </Link>
            </li>
            <li>
              <Link href="/board" onClick={toggleMenu}>
                고객 게시판
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

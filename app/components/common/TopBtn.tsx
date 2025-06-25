"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed w-20 h-20 md:w-28 md:h-28 bottom-36 md:bottom-44 right-10 p-3 rounded-full bg-white border-2 text-white shadow-lg hover:border-none hover:bg-green-700 transition z-50 group"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={40} className="w-full text-black group-hover:text-white transition" />
        </button>
      )}
    </>
  );
}

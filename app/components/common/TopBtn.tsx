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
          className="fixed right-4 bottom-24 sm:right-6 sm:bottom-28 md:right-10 md:bottom-32
                     z-50 bg-white border-2 rounded-full shadow-lg transition-all duration-300
                     hover:bg-green-700 hover:border-transparent group
                     w-16 h-16"
          aria-label="Scroll to top"
        >
          <FaArrowUp
            className="text-black group-hover:text-white transition-all
                       text-2xl  mx-auto"
          />
        </button>
      )}
    </>
  );
}

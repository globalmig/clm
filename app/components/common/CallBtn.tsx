import React from "react";
import { IoCall } from "react-icons/io5";
import Link from "next/link";

export default function CallBtn() {
  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 md:right-10 md:bottom-10 z-50">
      <Link href="/call">
        <div
          className="bg-green-900 hover:bg-green-700 rounded-full shadow-2xl flex items-center justify-center
          w-16 h-16  transition-all duration-300 ease-in-out"
        >
          <IoCall
            className="text-white
              text-2xl"
          />
        </div>
      </Link>
    </div>
  );
}

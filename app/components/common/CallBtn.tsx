import React from "react";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import Link from "next/link";

export default function CallBtn() {
  return (
    <div className="bg-green-900 hover:bg-green-700 rounded-full fixed right-10 bottom-10 z-50 shadow-2xl transform duration-300 ease-in-out">
      <Link href="/call">
        <div className="relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28">
          <IoCall color="white" size={40} className="absolute" />
        </div>
      </Link>
    </div>
  );
}

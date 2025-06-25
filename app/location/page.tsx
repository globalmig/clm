import React from "react";
import GoogleMap from "../components/common/GoogleMap";

export default function Location() {
  return (
    <div className="my-20 flex flex-col justify-center items-center w-full max-w-[1440px] px-4 mx-auto h-[]">
      <h1 className="text-3xl font-bold text-center w-full border-b mb-6 pb-6 ">오시는길</h1>
      <div className="w-full mb-20">
        <GoogleMap />
      </div>
    </div>
  );
}

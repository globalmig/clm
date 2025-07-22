import React from "react";

export default function GoogleMap() {
  return (
    <div className="px-4">
      <div className="w-full aspect-[4/3] h-96 rounded-3xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.651850793448!2d126.89301651172343!3d37.46894122960141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b61d70fb64ec9%3A0xe42546932906e7f8!2z7ZiE64yA7KeA7Iud7IKw7JeF7IS87YSw!5e0!3m2!1sko!2skr!4v1753057493401!5m2!1sko!2skr"
          className="w-full h-full border-0 rounded-3xl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex gap-4 mt-4 border rounded-lg p-4 bg-white  mb-4 md:mb-10">
        <p className="border-r-2 text-center w-[40%] text-xs md:text-base">오시는길</p>
        <p className=" w-[60%] text-start text-xs md:text-base">서울 금천구 두산로 70 B동 327호(현대지식산업센터)</p>
      </div>
    </div>
  );
}

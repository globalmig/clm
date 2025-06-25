import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  icon: string | React.ReactElement;
  alt: string;
  text: string;
  link: string;
}

export default function ContactBtn({ icon, alt, text, link }: Props) {
  return (
    <Link href={link}>
      <div className="flex mb-2 ">
        <button className="bg-slate-800 gap-4 text-white w-full flex items-center justify-center rounded-xl h-16 hover:bg-green-900  transform duration-300 ease-in-out">
          {typeof icon === "string" ? <Image src={icon} alt={alt} width={50} height={50} className="" /> : React.cloneElement(icon, { className: "", width: 50, height: 50, alt })}
          <p>{text}</p>
        </button>
      </div>
    </Link>
  );
}

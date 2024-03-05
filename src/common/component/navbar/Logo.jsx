import React from "react";
import Image from "../element/Image";

export default function Logo() {
  return (
    <div className="w-[79px] h-auto overflow-hidden ">
      <Image
        className="w-[50%]  relative h-auto object-cover  rounded-3xl"
        src="/Aset/Logo.webp"
        alt="Image"
        width={400}
        height={400}
        priority
      />
    </div>
  );
}

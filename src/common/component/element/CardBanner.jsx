import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import Image from "@/common/component/element/Image";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import ButtonWarp from "./ButtonWarp";

export default function CardBanner({title, className = ''}) {
  return (
    <div className={clsx(className,`  relative`)}>
      <div className="w-full h-auto lg:h-[500px] px-5 relative overflow-hidden flex-col rounded-3xl flex justify-center items-center bg-neutral-300/50 dark:bg-neutral-800/50 py-20 lg:py-40">
        <Image
          src="/Aset/Gradient.png"
          alt="image"
          width={400}
          height={400}
          priority
          className="w-full h-full object-cover z-[-9] absolute inset-0"
        />
        <div className="grid lg:grid-cols-2 w-full">
        <div className="flex flex-col">
        <h1 className="text-4xl md:text-7xl py-5 text-start bg-clip-text bg-gradient-to-r dark:from-white from-black from-50% dark:to-[#b1b1b1] to-[#292929]   md:w-[80%] text-transparent font-bold">
          {title}
        </h1>
        <Link href='https://dapps.flexgpu.app' target="__blank" className="w-auto">
        <ButtonWarp label='Dapps'  />
        </Link>
        </div>
        <div className="w-full">
        <Image
          src="/Aset/Dapps.png"
          alt="image"
          width={400}
          height={400}
          priority
          className="w-full h-full object-cover"
        />
        </div>
        </div>
        {/* <div className="w-full flex flex-col items-center md:flex-row justify-center gap-3">
          <Link href="/contact">
            <ButtonSpot title="Hire Us" />
          </Link>
          <Link href="/contact">
            <ButtonSpot title="Book A Meeting" />
          </Link>
        </div> */}
      </div>
      <div className="absolute  z-[-9] glowbg w-[200px] md:w-[300px] h-[300px] top-[50px]"></div>
    </div>
  );
}

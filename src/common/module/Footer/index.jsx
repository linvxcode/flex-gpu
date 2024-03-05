import React from "react";
import { FooterItem } from "@/common/constant/FooterItem";
import { FaMedium } from "react-icons/fa6";
import { FaTwitter, FaLinkedin, FaDiscord,FaTelegram,FaGithub   } from "react-icons/fa";
import Link from "next/link";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import TextAnimated from "@/common/component/element/TextAnimated";
import Logo from "@/common/component/navbar/Logo";
import Image from "@/common/component/element/Image";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 py-10 px-8 h-auto w-full max-w-[1500px] place-content-center md:px-5 place-items-start md:place-items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full gap-1 flex flex-col justify-center items-center lg:mx-auto">
            <div className="w-auto lg:w-[150px] lg:mx-auto h-auto overflow-hidden ">
              <Image
                className="w-auto lg:w-[50%] lg:mx-auto relative h-auto object-cover  rounded-3xl"
                src="/Aset/Logo.webp"
                alt="Image"
                width={400}
                height={400}
                priority
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <h1 className="w-[80%] text-center text-base font-medium">
              Revolutionizing Blockchain with GPU Computing
              </h1>
            </div>
          </div>
          <div className="gap-5 flex py-5 justify-center items-center w-full">
            <Link href='https://t.me/FlexGPU' target="__blank">
            <FaTelegram  size={30} />
            </Link>
            <Link href='https://twitter.com/FlexGpu' target="__blank">
            <FaTwitter size={30} />
            </Link>
            <Link href='https://medium.com/@flexgpu' target="__blank">
            <FaMedium size={30} />
            </Link>
            <Link href="https://github.com/FlexGPU" target="__blank">
            <FaGithub  size={30} />
            </Link>
          </div>
        </div>
        {FooterItem?.map((item, index) => (
          <ComponentTransition
            delay={index * 0.1}
            className="flex flex-col"
            key={index}
          >
            <h1 className="text-2xl font-bold py-3 px-2 md:px-2">
              {item.title}
            </h1>
            <div className="md:px-2 md:py-2 px-2 py-[4px] flex">
              <Link href={item.child_1.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={index * 0.2}
                >
                  {item.child_1.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2 md:py-2 px-2 py-[4px] flex">
              <Link href={item.child_2.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_2.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2 md:py-2 px-2 py-[4px] flex">
              <Link href={item.child_3.href} className="">
                <TextAnimated
                  delay={1}
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                >
                  {item.child_3.title}
                </TextAnimated>
              </Link>
            </div>
          </ComponentTransition>
        ))}
      </div>

    </div>
  );
};

export default Footer;

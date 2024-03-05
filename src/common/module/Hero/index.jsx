"use client";
import Buttons from "@/common/component/element/Buttons";
import ImgScale from "@/common/module/Hero/component/ImgScale";
import Rails from "@/common/component/element/Rails";
import React from "react";
import { motion, useScroll } from "framer-motion";
import Image from "@/common/component/element/Image";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { HeroImage } from "@/common/constant/HeroImage";
import { Parallax } from "@/common/constant/Parallax";
import H1 from "@/common/component/element/H1";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import ButtonWarp from "@/common/component/element/ButtonWarp";
import Link from "next/link";

export const translateVariantText = {
  initial: {
    opacity: 0,
    y: 150,
    height: "10px",
  },
  animate: {
    opacity: 1,
    y: 0,
    height: "250px",
    transition: {
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 3,
    },
  },
};

export const tranlateVariant = {
  initial: {
    opacity: 0,
    y: 150,
    // height: '10px'
  },
  animate: {
    opacity: 1,
    y: 0,
    // height: 'auto',
    transition: {
      delay: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 2,
    },
  },
};

const Hero = () => {
  const { scrollY } = useScroll();
  const { c, r, ry, rz, scale, t, y } = Parallax(scrollY);

  return (
    <div className="h-auto md:mb-20 max-w-[1500px] px-5 lg:px-10  relative ">
      <div className="flex flex-col justify-center md:top-0 mt-28 lg:mt-52  items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="border-[1px] rounded-full border-[#5515df] py-2 px-5 mb-2">
            <h1>New Era in GPU-centric computing</h1>
          </div>
          <H1
            className=" xl:w-[80%] 2xl:w-[80%] !leading-[0.95em] items-center flex overflow-hidden dark:bg-gradient-to-r from-white from-50% to-[#9c9c9c] bg-text bg-clip-text text-transparent text-center text-4xl sm:text-5xl md:text-7xl w-full  font-bold pb-1"
            title="Revolutionizing Blockchain with GPU Computing"
          />

          <p className="lg:w-[70%] text-center  lg:text-xl mt-2 dark:text-neutral-300 text-neutral-700">
            FlexGPU recognizes the pivotal role that Graphics Processing Units
            (GPUs) play in enhancing computational efficiency. Leveraging the
            unparalleled processing power of GPUs
          </p>

          <motion.div className="flex max-md:flex-col w-full items-center justify-center gap-5 py-5">
            <Link href='https://docs.flexgpu.app/welcome-to-flexgpu/introducing' target="__blank">
            <ButtonWarp label='Get Started'  />
            </Link>
          </motion.div>
        </div>

        <div className=" absolute w-[90%] top-[20%] h-[300px] z-[-99] ">
          <Rails />
          <div className="bg-gradient-to-b from-[#fff] dark:from-[#0F0E0E] from-20% to-transparent absolute inset-0 "></div>
          <div className="bg-gradient-to-l from-[#fff] dark:from-[#0F0E0E] from-1% to-transparent to-30% absolute inset-0"></div>
          <div className="bg-gradient-to-r from-[#fff] dark:from-[#0F0E0E] from-1% to-transparent to-30% absolute inset-0"></div>
          <div className="bg-gradient-to-t from-[#fff] dark:from-[#0F0E0E] from-1% to-transparent to-30% absolute inset-0"></div>
        </div>

        <motion.div
          className="w-[100%] h-full xl:mt-10 mt-32 sm:mt-28 flex gap-1 lg:px-10 overflow-hidden "
          style={{
            translateY: t,
            translateX: c,
            rotateX: r,
            position: "relative",
            transformPerspective: 819,
            rotateZ: rz,
            rotateY: ry,
          }}
        >
          {HeroImage.map((item, index) => (
            <ComponentTransition
              delay={index * 0.1}
              key={index}
              className=" overflow-hidden rounded-xl w-full"
            >
              <Image
                alt="Hero"
                className="overflow-hidden w-full h-auto"
                height={550}
                src={item.img}
                width={550}
                priority
              />
            </ComponentTransition>
          ))}
        </motion.div>

        {/* <ImgScale /> */}
      <div className="absolute top-[130px] z-[-9] glowbg w-[100px] md:w-[300px] h-[200px]  left-0 "></div>

      </div>
    </div>
  );
};

export default Hero;
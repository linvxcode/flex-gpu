"use client";
import React, { useState } from "react";
import ComponentTransition from "./ComponentTransition";
import Image from "./Image";
import { motion } from "framer-motion";
import ButtonArrow from "./ButtonArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Card({ Content }) {
  const [isBtnHover, setIsBtnHover] = useState(null);

  const handleMouseEnter = (index) => {
    setIsBtnHover(index);
  };

  const handleMouseLeave = () => {
    setIsBtnHover(null);
  };

  return (
    <div className="w-full  flex justify-center  items-center px-5">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="cursor-grab z-[99] !px-5 lg:!px-20 relative w-full  flex gap-5 max-md:flex-col md:overflow-x-scroll md:overflow-y-hidden no-scrollbar py-10"
      >
        {Content.map((item, index) => (
          <SwiperSlide key={index} className="pb-10 lg:pb-20 overflow-hidden ">
            <ComponentTransition
              delay={index * 0.1}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="w-full h-auto lg:h-[420px]  group flex  bg-gradient-to-b from-[#EEEEEE] dark:from-[#1d1b1b] to-transparent  relative group z-[9]  overflow-hidden rounded-3xl flex-col items-start justify-start text-start p-6"
            >
              <motion.div
                animate={{
                  borderRadius: isBtnHover === index ? 0 : 500,
                  width: isBtnHover === index ? 700 : 100,
                  height: isBtnHover === index ? 500 : 100,
                }}
                transition={{
                  type: "tween",
                  ease: [0.8, 0.2, 0, 1],
                  duration: 1,
                }}
                className="absolute w-[100px] top-0 right-[-10%] h-[100px] z-[-9] bg-[#461cff] "
              ></motion.div>
              {item.icon}
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  heigth={400}
                />
              )}
              <h1
                className={`text-2xl dark:text-white text-black  transition-all duration-300 font-semibold group-hover:text-white`}
              >
                {item.title}
              </h1>
              <p
                className={`mt-2 dark:text-white text-black   transition-all duration-300 group-hover:text-white`}
              >
                {item.desc}
              </p>
              {item.link && (
                <div className="py-3">
                  <ButtonArrow title="Read More" href={item.link} />
                </div>
              )}
            </ComponentTransition>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

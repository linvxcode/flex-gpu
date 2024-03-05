"use client";
import React, { useState } from "react";
import ComponentTransition from "./ComponentTransition";
import Image from "./Image";
import { motion } from "framer-motion";
import ButtonArrow from "./ButtonArrow";

export default function Card({ Content }) {
  const [isBtnHover, setIsBtnHover] = useState(false);

  const handleMouseEnter = (index) => {
    setIsBtnHover(index);
  };

  const handleMouseLeave = () => {
    setIsBtnHover(null);
  };

  return (
    <div className="w-full overflow-hidden  flex justify-start items-start">
      <div className="flex gap-5 max-md:flex-col md:overflow-x-scroll md:overflow-y-hidden no-scrollbar py-10">
        {Content.map((item, index) => (
          <ComponentTransition
            delay={index * 0.1}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="md:min-w-[350px] h-auto max-md:w-full group flex  bg-gradient-to-b from-[#EEEEEE] dark:from-[#1d1b1b] to-transparent  relative group z-[9]  overflow-hidden rounded-3xl flex-col items-start justify-start text-start p-6"
          >
            {/* <div className="absolute w-[100px] top-[80%] h-[100px] left-[-20%] z-[-9] group-hover:lg:w-[100%] group-hover:lg:h-[100%] inset-0 rounded-full group-hover:lg:rounded-none transition-all duration-500 bg-[#461cff] group-hover:lg:translate-y-[0%]"></div> */}
            <motion.div
              animate={{
                borderRadius: isBtnHover === index ? 0 : 500,
                width: isBtnHover === index ? 500 : 100,
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
              <Image src={item.img} alt={item.title} width={400} heigth={400} />
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
        ))}
      </div>
    </div>
  );
}

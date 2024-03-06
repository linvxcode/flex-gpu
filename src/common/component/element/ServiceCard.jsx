import React, { useState } from "react";
import ComponentTransition from "./ComponentTransition";
import SectionHeading from "./SectionHeading";
import H1 from "./H1";
import ButtonArrow from "./ButtonArrow";
import { ServiceItem } from "@/common/constant/Service";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

export default function ServiceCard() {
  const [indexItem, setIndexItem] = useState(0);

  const handleChange = (index) => {
    setIndexItem(index);
  };
  return (
    <div className="w-full ">
      <div className="w-full flex flex-col max-lg:gap-10 justify-center items-center">
        <div className="w-full flex  justify-center items-start">
          <div className="flex flex-row flex-wrap gap-2 lg:gap-5 w-auto py-5 lg:py-10">
            {ServiceItem.map((item, index) => (
              <ComponentTransition
                delay={index * 0.1}
                key={index}
                className="w-auto flex "
              >
                <motion.button
                  whileTap={{
                    scale: 0.9,
                  }}
                  className={clsx(
                    index === indexItem
                      ? " dark:text-black text-white"
                      : "dark:text-black text-white",
                    "w-auto lg:px-5 flex  justify-center items-center  rounded-full relative overflow-hidden "
                  )}
                  onClick={() => handleChange(index)}
                >
                  <div
                    className={clsx(
                      index === indexItem
                        ? "bg-[#5515df]  "
                        : "bg-[#0F0E0E] dark:bg-[#FFFFF7]",
                      `w-auto rounded-full p-2   flex justify-center items-center`
                    )}
                  >
                    {item.icon}
                  </div>

                  <h1 className="relative flex-nowrap max-lg:hidden">
                    {item.title}
                  </h1>{" "}
                  <div
                    className={clsx(
                      index === indexItem
                        ? "bg-[#5515df]"
                        : " dark:bg-white bg-[#0F0E0E]",
                      "absolute  transition-all duration-300 inset-0 z-[-5]"
                    )}
                  ></div>
                </motion.button>
              </ComponentTransition>
            ))}
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            key={indexItem}
            initial={{
              x: 50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: 50,
              opacity: 0,
            }}
          >
            <ComponentTransition className="w-full h-auto lg:h-[500px] overflow-hidden flex flex-col justify-start items-start px-5 lg:px-10   py-10 lg:py-20 bg-gradient-to-b from-[#dbdbdb7a] dark:from-[#1414147a] dark:to-[#141414] rounded-3xl">
              <div className="w-auto rounded-full p-2  bg-[#0F0E0E] dark:bg-[#FFFFF7] flex justify-center items-center">
                {ServiceItem[indexItem].icon}
              </div>
              <H1
                className="md:mt-5 mt-10  !font-semibold !justify-start !text-4xl text-start "
                title={ServiceItem[indexItem].title}
                textColor="white"
              />
              <H1
                className="md:mt-5 mt-10  !justify-start !text-base text-start "
                title={ServiceItem[indexItem].desc}
                textColor="normal"
              />

              <div className="w-full px-2 relative max-lg:py-10 lg:top-[60px]">
                <ButtonArrow
                  title="Read More"
                  href={ServiceItem[indexItem].link}
                />
              </div>
            </ComponentTransition>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

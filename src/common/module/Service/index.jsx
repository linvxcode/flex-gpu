"use client";
import SectionHeading from "@/common/component/element/SectionHeading";
import React from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

import ComponentTransition from "@/common/component/element/ComponentTransition";
import ServiceCard from "@/common/component/element/ServiceCard";

const Service = () => {
  return (
    <div className="h-auto max-w-[1500px] relative px-5 lg:px-10 xl:px-20 pb-20 flex justify-start w-full flex-col">
      <ComponentTransition className="flex justify-center ">
        <SectionHeading
          title="Our Service"
          icon={<MdOutlineMiscellaneousServices size={30} />}
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="flex w-full justify-center items-center flex-col py-5"
      >
        <h1 className="text-3xl md:text-5xl py-2 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f]  bg-text md:w-[50%] text-transparent font-bold">
        Discover our wide range of tailored services.
        </h1>

      </ComponentTransition>
      <ServiceCard />
      <div className="absolute top-[130px] z-[-9] glowbg w-[100px] md:w-[300px] h-[200px]  left-0 "></div>
      <div className="absolute top-[730px] z-[-9] glowbg w-[100px] md:w-[300px] h-[200px]  left-[90%] "></div>

    </div>
  );
};

export default Service;

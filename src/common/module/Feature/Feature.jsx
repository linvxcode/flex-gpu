import Card from "@/common/component/element/Card";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import SectionHeading from "@/common/component/element/SectionHeading";
import React from "react";
import { AiFillSliders } from "react-icons/ai";
import { FeatureItem } from "@/common/constant/FeatureItem";

export default function Feature() {
  return (
    <div className="h-auto max-w-[1500px] px-5 lg:px-10 xl:px-20 pb-20 flex justify-start w-full flex-col">
      <ComponentTransition className="flex justify-center py-5">
        <SectionHeading
          title="Our Feature"
          icon={<AiFillSliders size={30} />}
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="flex w-full justify-center items-center flex-col"
      >
        <h1 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f]  bg-text md:w-[50%] text-transparent font-bold">
          We deliver an impressive range of features.
        </h1>
        <p className="text-base md:text-2xl text-center text-neutral-500 dark:text-neutral-300">
          Innovative service for seamless digital transformation.
        </p>
      </ComponentTransition>
      <Card Content={FeatureItem} />
    </div>
  );
}

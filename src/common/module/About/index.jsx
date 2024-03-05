import React from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import SectionHeading from "@/common/component/element/SectionHeading";
import { IoIosPeople } from "react-icons/io";
import H1 from "@/common/component/element/H1";

const About = () => {
  return (
    <div className="h-auto max-w-[1500px] relative px-5 lg:px-10 xl:px-20 pb-20 flex justify-start w-full flex-col">
      <ComponentTransition className="flex justify-center ">
        <SectionHeading
          title="About Us"
          icon={<IoIosPeople size={30} />}
        />
      </ComponentTransition>
      {/* <ComponentTransition
        delay={0.1}
        className="flex w-full justify-center items-center flex-col py-5"
      >
        <h1 className="text-3xl md:text-5xl py-2 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f]  bg-text md:w-[50%] text-transparent font-bold">
        Discover About Us
        </h1>

      </ComponentTransition> */}
      <div className='w-full py-8'>
        <ComponentTransition  className="w-full h-auto overflow-hidden flex flex-col justify-start items-center px-5 lg:px-10  pt-5 pb-20 bg-gradient-to-b from-[#dbdbdb7a] dark:from-[#1414147a] dark:to-[#141414] rounded-3xl">

          <H1
            className="md:mt-5 mt-10  !font-semibold !justify-start !text-4xl text-start "
            title='Vision'
            textColor="white"
          />
          <H1
            className="md:mt-5 mt-10  !justify-center !text-base lg:!text-xl font-medium text-start lg:text-center "
            title='In the fast-evolving landscape of technology, where innovation propels us toward uncharted territories, FlexGPU stands at the forefront as a visionary force, heralding a new era in GPU-centric computing. The vision for FlexGPU is a testament to a future where the immense power of Graphics Processing Units (GPUs) converges with a purpose: to redefine hosting, artificial intelligence, and high-performance computing services.'
            textColor="normal"
          />

        </ComponentTransition>

    </div>
      <div className="absolute top-[130px] z-[-9] glowbg w-[100px] md:w-[300px] h-[200px]  left-0 "></div>

    </div>
  );
};

export default About;

import React from 'react'
import ComponentTransition from './ComponentTransition'
import SectionHeading from './SectionHeading'
import H1 from './H1'
import ButtonArrow from './ButtonArrow'
import { ServiceItem } from '@/common/constant/Service'

export default function ServiceCard() {
  return (
    <div className='w-full gap-5 grid lg:grid-cols-2 py-2'>
        {ServiceItem.map((item, index) => (
        <ComponentTransition key={index} className="w-full h-auto lg:h-[500px] overflow-hidden flex flex-col justify-start items-start px-5 lg:px-10   py-10 lg:py-20 bg-gradient-to-b from-[#dbdbdb7a] dark:from-[#1414147a] dark:to-[#141414] rounded-3xl">
          {/* <SectionHeading
            title={item.title}
            className="!w-auto rounded-full !justify-start  !px-5 !text-black bg-[#FFFFF7] "
          /> */}
          <div className='w-auto rounded-full p-2  bg-[#0F0E0E] dark:bg-[#FFFFF7] flex justify-center items-center'>
          {item.icon}
          </div>
          <H1
            className="md:mt-5 mt-10  !font-semibold !justify-start !text-4xl text-start "
            title={item.title}
            textColor="white"
          />
          <H1
            className="md:mt-5 mt-10  !justify-start !text-base text-start "
            title={item.desc}
            textColor="normal"
          />

          <div className="w-full px-2 relative max-lg:py-10 lg:top-[60px]">
            <ButtonArrow title="Read More" href={item.link} />
          </div>
        </ComponentTransition>
        ))}

    </div>
  )
}


import { TbCloudComputing } from "react-icons/tb";
import { BsGpuCard } from "react-icons/bs";
import { MdOutlinePrivateConnectivity } from "react-icons/md";
import { AiOutlineCloudServer } from "react-icons/ai";
import { GiMining } from "react-icons/gi";


export const ServiceItem = [
  {
    title: 'Rent GPU',
    desc: "Rent GPU service opens the doors to unparalleled computing power. Whether you're engaging in high-performance computing, complex simulations, or data-intensive applications, FlexGPU provides on-demand access to state-of-the-art Graphics Processing Units, ensuring that your projects are executed with speed and efficiency.",
    link: 'https://docs.flexgpu.app/product/rent-gpu',
    icon : <BsGpuCard className="h-10 w-10  dark:text-black text-white group-hover:text-white " />
  },
  {
    title: 'Private Node',
    desc: "FlexGPU introduces the Private Node Service, a revolutionary hosting solution that takes your computing experience to the next level. Explore the key features and advantages of FlexGPU's Private Node Service",
    link: 'https://docs.flexgpu.app/product/private-node',
    icon : <MdOutlinePrivateConnectivity className="h-10 w-10  dark:text-black text-white group-hover:text-white " />
  },
  {
    title: 'Anonymous Hosting',
    desc: "FlexGPU redefines the hosting experience with a revolutionary feature—Anonymous Hosting. This distinctive offering places privacy at the forefront, enabling users to deploy applications and services in a secure environment without compromising their identity. Explore the key features of FlexGPU's Anonymous Hosting",
    link: 'https://docs.flexgpu.app/product/anonymous-hosting',
    icon : <AiOutlineCloudServer className="h-10 w-10  dark:text-black text-white group-hover:text-white " />
  },
  {
    title: 'Cloud Dekstop',
    desc: "As of my last knowledge update in January 2022, I don't have specific information about a service named 'Cloud Desktop' from FlexGPU. However, I can provide a general understanding of what a 'Cloud Desktop' service typically involves, and you may want to verify this information directly from FlexGPU's official documentation or support channels for the most accurate details.",
    link: 'https://docs.flexgpu.app/product/cloud-dekstop',
    icon : <TbCloudComputing className="h-10 w-10  dark:text-black text-white group-hover:text-white " />
  },
  {
    title: 'GPU Mining',
    desc: "FlexGPU introduces a sustainable and efficient approach to cryptocurrency mining with the 'GPU Mining with Personal Computer Idle Power Software.' This innovative solution enables users to harness the idle power of their personal computers, contributing to mining operations while ensuring energy efficiency. FlexGPU envisions a future where cryptocurrency mining aligns with environmental sustainability.",
    link: 'https://docs.flexgpu.app/product/gpu-mining',
    icon : <GiMining  className="h-10 w-10  dark:text-black text-white group-hover:text-white " />
  },
 

];


import arrow from "@/app/assets/arrow.png";
import Image from "next/image";

export default function Extension (){
    return (
        <div className="extension py-[140px] px-[220px] flex items-center justify-center bg-[#043873] w-[1921px] h-[759px] gap-[60px]">
            <div className="flex flex-col gap-[60px] w-[697] h-[294px]">
       <h1 className="font-Inter text-white text-[72px] leading-[87.14px] font-bold">Use as Extension</h1>
       <p className="font-Inter font-normal text-lg leading-[30px] text-white ">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
       </p>
       <button className=" p-[10px] w-[201px] h-[63px] bg-[#4F9CF9] rounded-[10px] text-lg font-Inter font-normal text-white">Let's Go <Image src={arrow} alt="arrow" height='10' width="10" className="inline"></Image></button>
       </div>
       <div className="container w-[686px] h-[479px] bg-[#C4DEFD] "></div>
       </div>
    )
}
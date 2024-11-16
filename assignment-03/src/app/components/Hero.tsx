import arrow from "@/app/assets/arrow.png"
import Image from "next/image"

export default function Hero() {
    return(
    <div className="w-[1920px] h-[829px] bg-[#043873] py-[120px] px-[320px] flex items-center gap-1">
 <div className="text flex flex-col gap-[60px]">
    <h1 className="font-Inter text-white text-[64px] leading-[77.5px] font-bold tracking-[-2px]">Get More Done with whitepace</h1>
    <p className="font-Inter font-normal text-lg leading-[30px] text-white ">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
    <button className=" p-[10px] w-[216px] h-[63px] bg-[#4F9CF9] rounded-[10px] text-lg font-Inter font-normal text-white">Try Whitepace free <Image src={arrow} alt="arrow" height='10' width="10" className="inline"/></button>
 </div>
 <div className="container w-[824px] h-[549px] bg-[#C4DEFD] "></div>
    </div>)
}
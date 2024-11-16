import arrow from "@/app/assets/arrow.png";
import Image from "next/image";
import element from "@/app/assets/Element.jpg"

export default function Management () {
    return (
<div className="w-[1920px] h-[1588px] bg-[#FFFFFF] flex flex-col top-[921px] py-[140px] px-[200px] gap-[60px]">
   {/* Upper Section */}
    <div className="sec-1 flex items-center gap-[80-px]">
    <div className="container w-[672px] h-[411px] flex flex-col gap-[60px]">
       <h1 className="font-Inter text-black text-[72px] leading-[87.14px] font-bold">Project Management</h1>
       <p className="font-Inter font-normal text-lg leading-[25px] text-black ">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
       <button className=" p-[10px] w-[201px] h-[63px] bg-[#4F9CF9] rounded-[10px] text-lg font-Inter font-normal text-white">Get Started <Image src={arrow} alt="arrow" height='10' width="10" className="inline"></Image></button>
    </div>
    <div className="container w-[824px] h-[549px] bg-[#C4DEFD] "></div>
       </div>
       {/* Lower Section */}
       <div className="sec-2 flex gap-[60px] items-center">
 <Image src={element} alt="Design" width={710} height={661}></Image>
   <div className="container w-[670px] h-[249px] flex flex-col gap-[60px]">
       <h1 className="font-Inter text-black text-[72px] leading-[87.14px] font-bold">Work Together</h1>
       <p className="font-Inter font-normal text-lg leading-[25px] text-black ">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
       <button className=" p-[10px] w-[201px] h-[63px] bg-[#4F9CF9] rounded-[10px] text-lg font-Inter font-normal text-white">Get Started <Image src={arrow} alt="arrow" height='10' width="10" className="inline"/></button>
   </div>
       </div>
       </div>
    )
}
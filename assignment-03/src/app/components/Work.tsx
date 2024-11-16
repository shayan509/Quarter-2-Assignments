import arrow from "@/app/assets/arrow.png";
import Image from "next/image";


export default function Work () {
    return (
        <div className="bg-[#043873] w-[1920px] h-[504px] flex items-center py-[140px] px-[220px]">
   <div className="text flex flex-col items-center gap-[60px] w-[1482px] h-[294px]">
    <h1 className="text-white text-[72px] leading-[81.14px] font-Inter font-bold">Your work, everywhere you are</h1>
    <p className="font-Inter font-normal text-lg leading-[30px] text-center text-white">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
    <button className=" p-[10px] w-[195px] h-[63px] bg-[#4F9CF9] rounded-[8px] text-lg font-Inter font-medium text-white">Try Taskey <Image src={arrow} alt="arrow" height='10' width="10" className="inline"></Image></button>
   </div>
        </div>
    )
}
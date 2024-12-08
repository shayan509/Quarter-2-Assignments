import Image from "next/image";
import React from "react";

export default function Hero() {
    return (
        <div className="bg-white flex gap-4">
            <Image src={"/Frame 768.png"} alt="" width={217} height={344} className="ml-36 mt-12 "></Image>
            {/* <div className="bg-[rgba(0,0,0,1)] w-[0.5px] h-96"></div> */}
            <Image src={"/Line 4.png"} alt="" width={1} height={384}></Image>
            <Image src={"/iphone.png"} alt="" width={892} height={344} className="ml-3 mt-12"></Image>
        </div>
    )
}
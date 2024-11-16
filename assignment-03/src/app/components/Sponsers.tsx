import Image from "next/image";
import SponsorsImage from "@/app/assets/sponsors.png";

export default function Sponsors() {
    return (
        // Main Div
        <div className="Sponsors w-[1920px] h-[538px] flex flex-col items-center justify-center gap-[100px]">
            {/* Sponsors Heading */}
            <h1 className="text-black font-Inter text-[72px] leading-[87.14px] font-bold text-center ">
                Our Sponsors
            </h1>
            {/* Sponsors Image */}
                <Image 
                    src={SponsorsImage} 
                    alt="Logos of our sponsors" 
                    width={1482} 
                    height={72} 
                    className="items-center"
                />
            </div>
    );
}

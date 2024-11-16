import arrow from "@/app/assets/arrow.png";
import Image from "next/image";

export default function Customize() {
    return (
        <div className="w-[1920px] h-[812px] bg-white flex items-center justify-between py-[140px] px-[220px] gap-[92px]">
            {/* Left Blue Box */}
            <div className="bg-[#4F9CF9] w-[714px] h-[592px]"></div>

            {/* Right Text Section */}
            <div className="flex flex-col gap-[40px] max-w-[669px]">
                <h1 className="font-Inter text-black text-[64px] leading-[77px] font-bold">
                    Customise it to your needs
                </h1>
                <p className="font-Inter font-normal text-[18px] leading-[28px] text-black">
                    Customise the app with plugins, custom themes, and multiple text editors 
                    (Rich Text or Markdown). Or create your own scripts and plugins using the 
                    Extension API.
                </p>
                <button className="flex items-center justify-center gap-[8px] px-[24px] py-[12px] w-[171px] h-[63px] bg-[#4F9CF9] rounded-[8px] text-[18px] font-Inter font-medium text-white">
                    Get Started
                    <Image src={arrow} alt="arrow" width={16} height={16} />
                </button>
            </div>
        </div>
    );
}

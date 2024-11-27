import Image from "next/image";
import line from "@/app/assets/Line 9.png";
import modelpic from "@/app/assets/Rectangle 2.png";
import star from "@/app/assets/Vector (1).png";
import vercachi from "@/app/assets//versachi.png";
import zara from "@/app/assets/zara-logo-1 1.png";
import calvin from "@/app/assets/calvin klein.png";
import prada from "@/app/assets/prada-logo-1 1.png";
import gucci from "@/app/assets/gucci-logo-1 1.png";

export default function Hero() {
  return (
    <div className="bg-[#F2F0F1] flex flex-col gap-[26px] w-[390px] md:h-[90vh] h-[853px] md:w-screen">
      {/* Main container for hero section */}
      <div className="md:flex md:justify-between">
        
        {/* Left side: Text and call-to-action (CTA) */}
        <div className="flex flex-col gap-6 md:ml-8 md:gap-8">
          {/* Heading */}
          <h1 className="pl-4 w-[315px] md:text-[64px] md:leading-[64px] md:w-[577px] md:h-[173px] h-[93px] mt-[37px] text-[36px] leading-[34px] font-bold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          {/* Subtitle */}
          <p className="text-[14px] md:text-[16px] md:leading-[22px] md:w-[545px] md:h-[33px] leading-[20px] w-[358px] h-[50px] ml-4">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          {/* Shop Now button */}
          <button className="bg-black w-[358px] md:w-[210px] md:h-[52px] h-[52px] mx-4 text-center text-base leading-[21.4px] rounded-[62px] py-[16px] px-[54px] text-white font-medium">
            Shop Now
          </button>

          {/* Statistics section */}
          <div className="flex flex-col md:gap-0 md:hidden gap-4 items-center">
            {/* First row of statistics */}
            <div className="flex w-full px-6 justify-between md:flex-row">
              {/* Statistic 1: International Brands */}
              <div>
                <h2 className="text-[24px] leading-[32.4px] font-bold text-black">
                  200+
                </h2>
                <p className="text-[12px] text-gray-600">International Brands</p>
              </div>
              {/* Divider line */}
              <Image src={line} alt={""} />
              {/* Statistic 2: High-Quality Products */}
              <div>
                <h2 className="text-[24px] leading-[32.4px] font-bold text-black">
                  2,000+
                </h2>
                <p className="text-[12px] text-gray-600">High-Quality Products</p>
              </div>
            </div>
 <Image src={line} alt='' className="hidden md:block"></Image>
            {/* Second row of statistics */}
            <div className="text-center">
              <h2 className="text-[24px] leading-[32.4px] font-bold text-black">
                30,000+
              </h2>
              <p className="text-[12px] text-gray-600">Happy Customers</p>
            </div>
          </div>
          {/* Statistics section (hidden on mobile, visible on desktop) */}
<div className="hidden md:flex md:items-center md:justify-between gap-8 w-full px-6">
  {/* Statistic 1: International Brands */}
  <div className="text-center">
    <h2 className="text-[24px] leading-[32.4px] font-bold text-black">
      200+
    </h2>
    <p className="text-[12px] text-gray-600">International Brands</p>
  </div>

  {/* Divider line */}
  <Image src={line} alt="" className="w-px h-10" />

  {/* Statistic 2: High-Quality Products */}
  <div className="text-center">
    <h2 className="text-[24px] leading-[32.4px] font-bold text-black">
      2,000+
    </h2>
    <p className="text-[12px] text-gray-600">High-Quality Products</p>
  </div>

  {/* Divider line */}
  <Image src={line} alt="" className="w-px h-10" />

  {/* Statistic 3: Happy Customers */}
  <div className="text-center">
    <h2 className="text-[24px] leading-[32.4px] font-bold text-black">
      30,000+
    </h2>
    <p className="text-[12px] text-gray-600">Happy Customers</p>
  </div>
</div>

        </div>

        

        {/* Right side: Model image and brand logos */}
        <div className="relative">
          {/* Main model image */}
          <Image src={modelpic} alt={""}/>

          {/* Brand logos section */}
          <div className="bg-black flex flex-wrap md:hidden items-center justify-center gap-4 w-[390px] h-[146px]">
            <Image src={vercachi} alt={""} className="h-[24px]" />
            <Image src={zara} alt={""} className="h-[24px]" />
            <Image src={gucci} alt={""} className="h-[24px]" />
            <Image src={prada} alt={""} className="h-[24px]" />
            <Image src={calvin} alt={""} className="h-[24px]" />
          </div>

          {/* Decorative stars */}
          <Image
            src={star}
            alt={""}
            className="absolute top-[110px] left-[20px]"
          />
          <Image
            src={star}
            alt={""}
            className="absolute top-[20px] left-[270px]"
          />
        </div>
      </div>
      {/* Brand logos for pc */}
      <div className="brandspc hidden md:flex md:w-full md:h-[146px] md:items-center md:justify-around md:gap-4 bg-black">
      <Image src={vercachi} alt={""} className="h-[24px]" />
            <Image src={zara} alt={""} className="h-[24px]" />
            <Image src={gucci} alt={""} className="h-[24px]" />
            <Image src={prada} alt={""} className="h-[24px]" />
            <Image src={calvin} alt={""} className="h-[24px]" />
      </div>
    </div>
  );
}

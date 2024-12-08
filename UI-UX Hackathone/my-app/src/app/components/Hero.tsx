import Image from "next/image";

export default function HeroSec() {
  return (
    <div className="HeroSec bg-Herobg mt-8 xl:flex xl:justify-between xl:items-center xl:h-[1000px] px-16">
      {/* Text Section */}
      <div className="text">
        <h1 className="font-Poppins font-medium text-6xl leading-[96px] text-[#000000]">
          Rocket single seater
        </h1>
        <div className="mt-6">
          <p className="font-Poppins text-2xl leading-[36px] text-[#000000]">
            Shop Now
          </p>
          <div className="bg-black w-[121px] h-[2px] mt-2"></div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative">
        <Image
          src="/sofa1.png"
          alt="Rocket single seater"
          width={853}
          height={900}
          className="object-cover"
        />
      </div>
    </div>
  );
}

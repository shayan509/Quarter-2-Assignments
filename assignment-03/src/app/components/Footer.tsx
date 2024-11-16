import Image from "next/image";
import logo from "@/app/assets/Logo.png";

export default function Footer() {
  return (
    <div className="w-[1920px] h-[461px] bg-[#043873] text-white font-Inter">
      {/* Footer Content */}
      <div className="flex justify-between px-[220px] pt-[140px] pb-[32px]">
        {/* Column 1 */}
        <div className="flex flex-col gap-[15px] max-w-[300px]">
          <Image src={logo} alt="logo" />
          <p className="text-lg font-normal leading-[30px]">
            whitespace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-[15px]">
          <p className="text-lg font-bold leading-[20px]">Product</p>
          <p className="text-base font-normal text-[#FEE492] leading-[20px]">Overview</p>
          <p className="text-base font-normal leading-[20px]">Pricing</p>
          <p className="text-base font-normal leading-[20px]">Customer Stories</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-[15px]">
          <p className="text-lg font-bold leading-[20px]">Resources</p>
          <p className="text-base font-normal leading-[20px]">Blog</p>
          <p className="text-base font-normal leading-[20px]">Guides & Tutorials</p>
          <p className="text-base font-normal leading-[20px]">Help Center</p>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-[15px]">
          <p className="text-lg font-bold leading-[20px]">Company</p>
          <p className="text-base font-normal leading-[20px]">About Us</p>
          <p className="text-base font-normal leading-[20px]">Careers</p>
          <p className="text-base font-normal leading-[20px]">Media Kit</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-white opacity-20 mx-[220px]"></div>
      <div className="text-center pt-[20px] pb-[20px] text-sm">
        ©2021 Whitespace LLC.
      </div>
    </div>
  );
}

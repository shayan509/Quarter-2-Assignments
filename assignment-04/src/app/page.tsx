import Image from "next/image";
import hamburgermenu from "@/app/assets/Vector.png";
import icongroup from "@/app/assets/Frame 5.png";
import iconspc from "@/app/assets/iconspc.png";
import Hero from "./components/Herosec";
import Clothes from "./components/Clothes";
import Footer from "./components/Footer";
import Link from "next/link";
import "../app/css/satoshi.css";

export default function Home() {
  return (
    <div className="Homepage relative w-full bg-white flex flex-col overflow-x-hidden">
      {/* Top Banner */}
      <div className="bg-black w-full h-[34px] md:h-14 flex items-center justify-center">
        <p className="text-white text-[12px] md:text-[14px] md:leading-[18.9px] leading-[16.2px]">
          Sign up and get 20% off your first order.{" "}
          <span className="font-bold underline">Sign Up Now</span>
        </p>
      </div>

      {/* Navbar for phones */}
      <nav className="PhoneNav flex items-center justify-between px-4 py-3 md:hidden">
        {/* Menu Icon */}
        <div className="flex gap-4 items-center">
          <Image
            src={hamburgermenu}
            alt="Menu Icon"
            className="h-6 w-6 cursor-pointer"
          />
          {/* Logo */}
          <h1 className="Satoshi-Bold text-[25.2px] text-black font-bold" 
          style={{fontFamily: "Satoshi-Bold"}}>SHOP.CO</h1>
        </div>
        {/* Navigation Icons */}
        <Image
          src={icongroup}
          alt="Navigation Icons"
          className="h-6 w-auto cursor-pointer"
        />
      </nav>

      {/* Navbar for Desktops */}
      <nav className="DesktopNav hidden md:flex items-center justify-center gap-4 md:h-[70px]">
        <h1 className="text-black text-[32px] leading-[38.4px] font-bold">
          SHOP.CO
        </h1>
        <div className="Navigationlinks flex gap-4 text-gray-600 text-base leading-[16.9px]">
          <Link href="">Shop</Link>
          <Link href="">On Sale</Link>
          <Link href="">New Arrivals</Link>
          <Link href="">Brands</Link>
        </div>
        {/* Search Bar */}
        <div className="relative flex-1 max-w-lg">
          <input
            type="text"
            className="w-full py-2 px-10 rounded-full border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for products..."
          />
          <svg
            className="absolute top-1/2 left-4 w-5 h-5 text-gray-500 transform -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19a8 8 0 100-16 8 8 0 000 16zm10 2l-4-4"
            />
          </svg>
        </div>
        <Image src={iconspc} alt="Search Icon" />
      </nav>

      {/* Main Content */}
      <Hero />
      <Clothes />
      <Footer />
    </div>
  );
}

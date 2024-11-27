import instalogo from "@/app/assets/instalogo.png";
import fblogo from "@/app/assets/fblogo.png";
import twitter from "@/app/assets/twitterlogo.png";
import githublogo from "@/app/assets/githublogo.png";
import Image from "next/image";
import linex from "@/app/assets/Line x.png";
import payment from "@/app/assets/payment.png";

export default function Footer() {
  return (
    <div className="bg-[#F0F0F0] flex flex-col gap-6 md:gap-12 w-full md:px-12 py-8">
      {/* Top Section */}
      <div className="md:flex md:justify-between md:items-start">
        {/* Logo and Description */}
        <div className="flex flex-col gap-4 ml-4 md:text-left">
          <h1 className="text-black text-[33.45px] md:text-[40.15px] font-bold">SHOP.CO</h1>
          <p className="text-[rgba(0,0,0,0.8)] w-[375px] h-[40px] text-sm leading-[20px] md:w-[250px]">
            We have clothes that suit your style and make you proud to wear. From women to men.
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-start md:justify-start gap-4">
            <Image src={twitter} alt="Twitter Logo" />
            <Image src={instalogo} alt="Instagram Logo" />
            <Image src={fblogo} alt="Facebook Logo" />
            <Image src={githublogo} alt="GitHub Logo" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-x-6 ml-4 gap-y-8 md:grid-cols-4 md:gap-x-12 mt-6 md:mt-0 text-left">
          {/* Column 1: Company */}
          <div>
            <h2 className="text-black font-medium text-[14px] tracking-wider mb-4">COMPANY</h2>
            <ul className="text-[rgba(0,0,0,0.8)] text-sm space-y-3 leading-[16px]">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          {/* Column 2: Help */}
          <div>
            <h2 className="text-black font-medium text-[14px] tracking-wider mb-4">HELP</h2>
            <ul className="text-[rgba(0,0,0,0.8)] text-sm space-y-3 leading-[16px]">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Column 3: FAQ */}
          <div>
            <h2 className="text-black font-medium text-[14px] tracking-wider mb-4">FAQ</h2>
            <ul className="text-[rgba(0,0,0,0.8)] text-sm space-y-3 leading-[16px]">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h2 className="text-black font-medium text-[14px] tracking-wider mb-4">RESOURCES</h2>
            <ul className="text-[rgba(0,0,0,0.8)] text-sm space-y-3 leading-[16px]">
              <li>Free eBook</li>
              <li>Development Tutorials</li>
              <li>How-to Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <Image src={linex} alt="Divider Line" className="mx-auto w-full max-w-[800px]" />

      {/* Bottom Section */}
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center mt-4 md:mt-8">
        {/* Copyright Text */}
        <p className="text-[rgba(0,0,0,0.8)] text-sm text-center md:text-left">
          Shop.co © 2000-2023, All Rights Reserved
        </p>

        {/* Payment Methods */}
        <Image
          src={payment}
          alt="Payment Methods"
          className="mt-4 md:mt-0 w-[180px] md:w-[280px] h-auto"
        />
      </div>
    </div>
  );
}

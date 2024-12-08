"use client";

import Link from "next/link";
import "@/app/globals.css";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Visible for md and larger */}
      <div className="hidden md:flex xl:justify-center md:justify-around xl:ml-[200px] md:mt-5 xl:gap-20 xl:h-[100px] xl:items-center">
        {/* Nav Links */}
        <div className="Navlinks md:flex md:gap-6 xl:gap-20">
          <Link href={"/"} className="Navlink">
            Home
          </Link>
          <Link href={"/Shop"} className="Navlink">
            Shop
          </Link>
          <Link href={"/About"} className="Navlink">
            About
          </Link>
          <Link href={"/Contact"} className="Navlink">
            Contact
          </Link>
        </div>
        {/* Nav Icons */}
        <div className="Navicons flex gap-8 xl:ml-12">
          <Link href={"/Account"}>
            <Image
              src={"/account.png"}
              alt="Account"
              width={28}
              height={28}
              className="Navicon"
            />
          </Link>
          <Link href={"/Search"}>
            <Image
              src={"/search.png"}
              alt="Search"
              width={28}
              height={28}
              className="Navicon"
            />
          </Link>
          <Link href={"/Favorites"}>
            <Image
              src={"/heart.png"}
              alt="Favorites"
              width={28}
              height={28}
              className="Navicon"
            />
          </Link>
          <Link href={"/Cart"}>
            <Image
              src={"/cart.png"}
              alt="Cart"
              width={28}
              height={28}
              className="Navicon"
            />
          </Link>
        </div>
      </div>

      {/* Visible for smaller screens (below md) */}
      <div className="flex md:hidden justify-between mt-4 ml-6 items-center h-[60px] px-4">
        {/* Burger Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <Image
            src={"/hamburger.png"}
            alt="Menu"
            width={48}
            height={48}
            className="cursor-pointer"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-lg z-50">
          <div className="flex flex-col gap-4 p-4">
            <Link
              href={"/"}
              className="Navlink"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href={"/Shop"}
              className="Navlink"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href={"/About"}
              className="Navlink"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href={"/Contact"}
              className="Navlink"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex gap-4 mt-4">
              <Link href={"/Account"}>
                <Image
                  src={"/account.png"}
                  alt="Account"
                  width={28}
                  height={28}
                  className="Navicon"
                />
              </Link>
              <Link href={"/Search"}>
                <Image
                  src={"/search.png"}
                  alt="Search"
                  width={28}
                  height={28}
                  className="Navicon"
                />
              </Link>
              <Link href={"/Favorites"}>
                <Image
                  src={"/heart.png"}
                  alt="Favorites"
                  width={28}
                  height={28}
                  className="Navicon"
                />
              </Link>
              <Link href={"/Cart"}>
                <Image
                  src={"/cart.png"}
                  alt="Cart"
                  width={28}
                  height={28}
                  className="Navicon"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

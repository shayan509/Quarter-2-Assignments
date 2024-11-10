'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import fb from "@/app/assests/fb.png";
import insta from "@/app/assests/imsta.png";
import gmail from "@/app/assests/gmail.png";
import github from "@/app/assests/github-6980894_1280.png";
import menuopen from "@/app/assests/menuopen.png";
import menuclose from "@/app/assests/menuclose.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="Navbar-container w-full py-4 px-6 flex justify-between items-center shadow-md ">
      {/* Logo/Brand Name */}
      <div className="text-3xl font-bold">
        <Link href="/">Shayan's Portfolio</Link>
      </div>

      {/* Hamburger Button for Mobile */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <button className="focus:outline-none">
          {isMenuOpen ? (
            <Image src={menuclose} alt="Close Menu" width={32} height={32} />
          ) : (
            <Image src={menuopen} alt="Open Menu" width={32} height={32} />
          )}
        </button>
      </div>

      {/* Links and Social Icons for Desktop */}
      <div className="hidden md:flex items-center gap-8 text-lg">
        <Link href="/" className="hover:text-blue-600 transition duration-200">Home</Link>
        <Link href="/About" className="hover:text-blue-600 transition duration-200">About</Link>
        <Link href="/Contact" className="hover:text-blue-600 transition duration-200">Contact</Link>
        <div className="flex gap-6 ">
          <Link href="https://www.facebook.com/shayan.imran.3720/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Image src={fb} alt="Facebook" width={32} height={32} className="transition-transform duration-200 transform hover:scale-110" />
          </Link>
          <Link href="https://www.instagram.com/shayanimran2/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Image src={insta} alt="Instagram" width={32} height={32} className="transition-transform duration-200 transform hover:scale-110" />
          </Link>
          <Link href="mailto:si757289@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
            <Image src={gmail} alt="Gmail" width={32} height={32} className="transition-transform duration-200 transform hover:scale-110" />
          </Link>
          <Link href="https://github.com/shayan509" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Image src={github} alt="GitHub" width={32} height={32} className="transition-transform duration-200 transform hover:scale-110" />
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
          <div className="fixed inset-y-0 left-0 w-64 bg-blue-700 p-6 shadow-lg z-50 transform transition-transform duration-300">
            <div className="flex flex-col gap-6 mt-8">
              <Link href="/" className="text-lg hover:text-blue-300" onClick={toggleMenu}>Home</Link>
              <Link href="/About" className="text-lg hover:text-blue-300" onClick={toggleMenu}>About</Link>
              <Link href="/Contact" className="text-lg hover:text-blue-300" onClick={toggleMenu}>Contact</Link>
              <div className="flex gap-4 mt-4 flex-col">
                <Link href="https://www.facebook.com/shayan.imran.3720/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Image src={fb} alt="Facebook" width={32} height={32} />
                </Link>
                <Link href="https://www.instagram.com/shayanimran2/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Image src={insta} alt="Instagram" width={32} height={32} />
                </Link>
                <Link href="mailto:si757289@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
                  <Image src={gmail} alt="Gmail" width={32} height={32} />
                </Link>
                <Link href="https://github.com/shayan509" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Image src={github} alt="GitHub" width={32} height={32} />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

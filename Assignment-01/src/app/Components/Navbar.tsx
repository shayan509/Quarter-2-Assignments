"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const  [isOpen , setIsOpen] = useState(false)
    return (
        <nav className="bg-gray-800 w-screen text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-bold bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                    My Website
                </a>
                <div className="hidden md:flex space-x-4">
                    <Link href={"/"} className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                        Home
                    </Link>
                    <Link href={"/About"} className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                        About
                    </Link>
                    <Link href={"/Projects"} className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                        Projects
                    </Link>
                    <Link href={"/Contacts"} className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                        Contacts
                    </Link>
                    <Link href={"/Jobs"} className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                        Jobs
                    </Link>
                    <Link href={"/Jobs/Programming"} className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                        Programming
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => {
             setIsOpen(!isOpen);
                    }}></button>
                </div>
            </div>
        </nav>
    )
}

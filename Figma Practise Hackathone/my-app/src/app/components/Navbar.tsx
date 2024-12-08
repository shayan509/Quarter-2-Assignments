import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full mt-8 h-[60px] flex items-center justify-center border-b">
      <div className="w-[1170px] flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-Inter font-bold text-2xl">Exclusive</h1>

        {/* Navigation Links */}
        <div className="flex gap-10">
          <Link href="/" className="font-Poppins text-base">
            Home
          </Link>
          <Link href="/contact" className="font-Poppins text-base">
            Contact
          </Link>
          <Link href="/about" className="font-Poppins text-base">
            About
          </Link>
          <Link href="/signup" className="font-Poppins text-base">
            Sign Up
          </Link>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center gap-6">
          {/* Search Box */}
          <div className="relative bg-[#F5F5F5] w-[300px] h-[38px] flex items-center px-4 rounded-md">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none w-full font-Poppins text-sm placeholder-gray-500"
            />
            <Image
              src="/Searchicon.png"
              alt="search"
              width={20}
              height={20}
              className="ml-2"
            />
          </div>

          {/* Icons */}
          <Image src="/heart.png" alt="Wishlist" width={24} height={24} />
          <Image src="/Cart.png" alt="Cart" width={24} height={24} />
        </div>
      </div>
    </nav>
  );
}

















//         <nav className="  gap-[148px] w-[1170px] h-[38px] m-[88px] left-[135px] items-center flex justify-between ">
//         <div className="flex items-center text-center gap-[190px]">
//         <h1 className="font-Inter font-bold text-2xl leading-[24px]">Exclusive</h1>
//         <div className="flex gap-[48px]">
//          <Link href="/" className="font-Poppins text-base text-center">Home</Link>
//          <Link href="/" className="font-Poppins text-base text-center">Contact</Link>
//          <Link href="/" className="font-Poppins text-base text-center">About</Link>
//          <Link href="/" className="font-Poppins text-base text-center">Sign up</Link>
    
//         </div>
//          <div className="bg-[#F5F5F5] ">
//             <p>What are you looking for?</p>
//             <Image src="/Searchicon.png" alt="search" width={24} height={24}></Image>
//          </div>
//         </div>
//         <div className="">
     
//         </div>
//             </nav>
//         )
//     } <nav className="  gap-[148px] w-[1170px] h-[38px] m-[88px] left-[135px] items-center flex justify-between ">
//     <div className="flex items-center text-center gap-[190px]">
//     <h1 className="font-Inter font-bold text-2xl leading-[24px]">Exclusive</h1>
//     <div className="flex gap-[48px]">
//      <Link href="/" className="font-Poppins text-base text-center">Home</Link>
//      <Link href="/" className="font-Poppins text-base text-center">Contact</Link>
//      <Link href="/" className="font-Poppins text-base text-center">About</Link>
//      <Link href="/" className="font-Poppins text-base text-center">Sign up</Link>

//     </div>
//      <div className="bg-[#F5F5F5] ">
//         <p>What are you looking for?</p>
//         <Image src="/Searchicon.png" alt="search" width={24} height={24}></Image>
//      </div>
//     </div>
//     <div className="">
 
//     </div>
//         </nav>
//     )
// }
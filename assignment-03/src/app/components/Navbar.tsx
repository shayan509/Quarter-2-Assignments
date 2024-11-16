import logo from "@/app/assets/Logo.png"
import Image from "next/image"
import Link from "next/link"

export default function Navbar(){
    return (
     <nav className="h-[92px] bg-[#043873] w-[1920px] flex justify-between py-[16px] px-[220px] items-center ">
    <div className="logo">
      <Image src={logo} alt="Company-logo"></Image>        
    </div>
    <div className="links flex items-center gap-[60px]">
        <div className="navigation w-[549px] text-white font-medium font-DMsans text-lg gap-[32px] flex gap">
            <Link href="#">Products</Link>
            <Link href="#">Solutions</Link>
            <Link href="#">Resources</Link>
            <Link href="#">Pricing</Link>
        </div>
        <div className="Button font-Inter font-medium">
            <button className="w-[126px] h-[60px] bg-[#FFE492] font rounded-lg  px-[40px] 
            py-[16px]">Login</button>
        </div>
    </div>
     </nav>
    )
}
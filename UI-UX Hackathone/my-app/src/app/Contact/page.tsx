import Contactcontent from "../components/Contactcontent"
import Navbar from "../components/Navbar"
import Image from "next/image"

export default function Contact() {
    return (
        <div className="flex bg-white flex-col">
         <Navbar></Navbar>
         {/* Banner */}
         <div className="banner bg-cover flex flex-col w-screen items-center justify-center bg-center bg-[url('/shopbanner.png')] h-[316px] ">
          <Image src={"/logo.png"} alt="" width={77} height={77}></Image>
          <h1 className="font-Poppins font-medium text-5xl leading-[72px]">Contact</h1>
          <Image src={"/homenContact.png"} alt="" width={121} height={24}></Image>
           </div>

           {/* Get in touch with us */}
           <Contactcontent></Contactcontent>

                {/* More Info */}
<div className="bg-[#FAF4F4] w-full flex flex-wrap justify-around items-start gap-8 px-4 py-16">
  {/* Delivery */}
  <div className="delivery flex flex-col gap-4 max-w-[300px] text-center lg:text-left">
    <h1 className="font-Poppins font-medium text-2xl lg:text-3xl xl:text-4xl">Free Delivery</h1>
    <p className="text-[#9F9F9F] font-Poppins font-normal text-base lg:text-lg xl:text-2xl">
      For all orders over $50, consectetur adipiscing elit.
    </p>
  </div>

  {/* Return */}
  <div className="delivery flex flex-col gap-4 max-w-[300px] text-center lg:text-left">
    <h1 className="font-Poppins font-medium text-2xl lg:text-3xl xl:text-4xl">90 Day Return</h1>
    <p className="text-[#9F9F9F] font-Poppins font-normal text-base lg:text-lg xl:text-2xl">
      If goods have problems, consectetur adipiscing elit.
    </p>
  </div>

  {/* Payment */}
  <div className="delivery flex flex-col gap-4 max-w-[300px] text-center lg:text-left">
    <h1 className="font-Poppins font-medium text-2xl lg:text-3xl xl:text-4xl">Secure Payment</h1>
    <p className="text-[#9F9F9F] font-Poppins font-normal text-base lg:text-lg xl:text-2xl">
      100% secure payment, consectetur adipiscing elit.
    </p>
  </div>
</div>
        </div>
    )
}
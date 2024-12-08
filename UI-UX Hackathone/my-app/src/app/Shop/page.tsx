import Image from "next/image";
import Shopproducts from "../components/Shopproducts";
import Navbar from "../components/Navbar";

export default function ShopPage() {
    return (
        <div className="flex flex-col gap-14 py-10 bg-white overflow-x-hidden " >
            <Navbar />
           <div className="banner bg-cover flex flex-col w-screen items-center justify-center bg-center bg-[url('/shopbanner.png')] h-[316px] ">
          <Image src={"/logo.png"} alt="" width={77} height={77}></Image>
          <h1 className="font-Poppins font-medium text-5xl leading-[72px]">Shop</h1>
          <Image src={"/homenshop.png"} alt="" width={121} height={24}></Image>
           </div>
         
       {/* Adjustor */}
<div className="flex py-4 flex-col lg:flex-row xl:flex-row bg-[#9F9F9F]  lg:justify-around xl:justify-around justify-center items-center gap-4 lg:gap-8 xl:gap-12 px-4">
  {/* First Side */}
  <div className="1stside flex flex-wrap gap-4 items-center justify-center lg:justify-start xl:justify-start">
    <Image src={"/icon1.png"} alt="" width={85} height={30} />
    <Image src={"/icon2.png"} alt="" width={28} height={28} />
    <Image src={"/icon3.png"} alt="" width={24} height={24} />
    <Image src={"/showingresult.png"} alt="" width={237} height={37} />
  </div>

  {/* Second Side */}
  <div className="2ndside flex flex-wrap gap-4 items-center justify-center lg:justify-end xl:justify-end">
    <Image src={"/show.png"} alt="" width={126} height={55} />
    <Image src={"/sortby.png"} alt="" width={288} height={55} />
  </div>
</div>
    <Shopproducts></Shopproducts>
    {/* More Products  */}
    <Image src={"/Morepage.png"} alt="" className="mx-auto" width={392} height={60}></Image>
        
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
    );
}

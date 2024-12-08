import Navbar from "../components/Navbar";
import Image from "next/image";


export default function Cart() {
    return (
        <div className="flex flex-col">
            <Navbar></Navbar>
            {/* Banner */}
            <div className="banner bg-cover flex flex-col w-screen items-center justify-center bg-center bg-[url('/shopbanner.png')] h-[316px] ">
                <Image src={"/logo.png"} alt="" width={77} height={77}></Image>
                <h1 className="font-Poppins font-medium text-5xl leading-[72px]">Cart</h1>
                <Image src={"/homencart.png"} alt="" width={121} height={24}></Image>
            </div>

            {/* Main Cart */}
            <div className="flex flex-col lg:flex-row items-center gap-8 p-8 justify-around">
      {/* Items */}
<div className="items flex flex-col gap-10">
  <div className="listing grid grid-cols-5 bg-[#FFF9E5] py-4 text-center">
    <p className="font-Poppins text-base font-medium hidden md:block">Product Image</p>
    <p className="font-Poppins text-base font-medium">Product</p>
    <p className="font-Poppins text-base font-medium">Price</p>
    <p className="font-Poppins text-base font-medium">Quantity</p>
    <p className="font-Poppins text-base font-medium">Subtotal</p>
  </div>
  
  <div className="grid grid-cols-5 py-4 items-center border-t border-b">
    <div className="hidden md:block">
      <Image src="/productimg.png" alt="Product Image" width={106} height={106} />
    </div>
    <p className="text-[#9F9F9F] font-Poppins text-base">Asgaard Sofa</p>
    <p className="text-[#9F9F9F] font-Poppins text-base">Rs. 250,000.00</p>
    <p className="text-center">1</p>
    <p className="text-black text-end font-Poppins text-base">Rs. 250,000.00</p>
  </div>
</div>



                {/* Cart Totals */}
                <div className="flex flex-col bg-[#FFF9E5] p-12  items-center justify-center gap-16 h-full">
                    <h3 className="font-Poppins font-semibold text-4xl">Cart Totals</h3>

                    <span className="font-Poppins font-medium text-base flex justify-between w-full max-w-sm">
                        Subtotal
                        <p className="font-Poppins font-medium text-base text-[#9F9F9F]">Rs. 250,000.00</p>
                    </span>

                    <span className="font-Poppins font-medium text-base flex justify-between w-full max-w-sm">
                        Total
                        <p className="font-Poppins font-medium text-base text-[#B88E2F]">Rs. 250,000.00</p>
                    </span>

                    <button className="font-Poppins font-normal text-xl border-black border-2 rounded-2xl py-6 px-36">
                        Check out
                    </button>
                </div>

            </div>
           
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
        </div>);
}
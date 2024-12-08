import Image from "next/image";

export default function Offer() {
  return (
    <div className="bg-black w-screen flex items-center h-[48px] overflow-hidden">
    <div className=" flex gap-[231px] ml-96">
{/* Offer Text */}
 <div className="flex items-center gap-[8px]">
   <p className="text-white font-Poppins text-sm">
     Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
   </p>
   <p className="text-white font-Poppins text-sm font-bold underline cursor-pointer">
     ShopNow
   </p>
 </div>
 {/* Language Selector */}
 <div className="flex items-center gap-[8px]">
   <p className="text-white font-Poppins text-sm">English</p>
   <Image src={"/DropDown.png"} alt="Language Dropdown" width={24} height={24} />
</div>
    </div>
    </div>
  );
}


// {/* <div className="flex items-center justify-around w-full">
// {/* Offer Text */}
// <div className="flex items-center gap-[8px]">
//   <p className="text-white font-Poppins text-sm">
//     Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
//   </p>
//   <p className="text-white font-Poppins text-sm font-bold underline cursor-pointer">
//     ShopNow
//   </p>
// </div>

// {/* Language Selector */}
// <div className="flex items-center gap-[8px]">
//   <p className="text-white font-Poppins text-sm">English</p>
//   <Image src={"/DropDown.png"} alt="Language Dropdown" width={24} height={24} />
// </div>
// </div> */}
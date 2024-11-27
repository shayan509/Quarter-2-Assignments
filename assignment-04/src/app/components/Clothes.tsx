import Image from "next/image";

// Importing assets for images used in the components
import blackshirt from "@/app/assets/blackshirt.png";
import bluejeans from "@/app/assets/bluejeans.png";
import rating1 from "@/app/assets/rating1.png";
import rating2 from "@/app/assets/rating2.png";
import offer1 from "@/app/assets/offer1.png";
import linex from "@/app/assets/Line x.png";
import greenshirt from "@/app/assets/greenshirt.png";
import blackjeans from "@/app/assets/blackjeans.png";
import rating3 from "@/app/assets/rating3.png";
import rating4 from "@/app/assets/rating4.png";
import orangeshirt from "@/app/assets/orangeshirt.png";
import casualclothes from "@/app/assets/casualclothes.png";
import formalclothes from "@/app/assets/formalclothes.png";
import partyclothes from "@/app/assets/partyclothes.png";
import gymclothes from "@/app/assets/gymclothes.png";
import review from "@/app/assets/review.png";
import okicon from "@/app/assets/okicon.png";
import emailicon from "@/app/assets/emailicon.png";
import Checkedshirt from "@/app/assets/Checkedshirt.png";
import Orangeshirt2 from "@/app/assets/Orangeshirt2.png";
import Shorts from "@/app/assets/shorts.png";
import Fadedjeans from "@/app/assets/Fadedjeans.png";

export default function Clothes() {
    return (
        <div className="bg-white w-[390px] mt-52 md:mt-10 h-auto flex flex-col md:w-screen gap-3 md:gap-5">
            {/* Section Title: New Arrivals */}
            <h1 className="text-black font-bold md:text-[46px] md:leading-[57.6px] mt-6 text-[32px] leading-[38.4px] text-center">
                NEW ARRIVALS
            </h1>

            {/* Horizontal scrolling container for new arrivals */}
            <div className="scroll-container overflow-x-auto">
                <div className="Newarrivals flex justify-between md:justify-around">
                    {/* Item 1: Black Shirt */}
                    <div className="item-1 flex flex-col gap-2">
                        <div className="bg-[#F0EEED] mt-6 rounded-[13.24px] w-[198px] h-auto mx-2">
                            <Image src={blackshirt} alt={""} />
                        </div>
                        <h4 className="text-black text-[14px] font-bold ml-2">
                            T-SHIRT WITH TAPE DETAILS
                        </h4>
                        <Image src={rating1} alt="rating" className="ml-2"></Image>
                        <h3 className="text-[20px] leading-[27px] text-black ml-2 font-bold">
                            $120
                        </h3>
                    </div>

                    {/* Item 2: Blue Jeans */}
                    <div className="item2 flex flex-col gap-2">
                        <div className="bg-[#F0EEED] mt-6 rounded-[13.24px] w-[198px] h-auto mx-3">
                            <Image src={bluejeans} alt={""} />
                        </div>
                        <h4 className="text-black text-[14px] font-bold ml-2">
                            SKINNY FIT JEANS
                        </h4>
                        <Image src={rating2} alt="rating" className="ml-2"></Image>
                        <div className="pricing flex gap-2 ml-2">
                            <h3 className="text-black text-[20px] font-bold">
                                $240
                            </h3>
                            <h3 className="text-[rgba(0,0,0,0.4)] text-[20px] font-bold line-through">
                                $260
                            </h3>
                            <Image src={offer1} alt="offer"></Image>
                        </div>
                    </div>
                      {/* Item 3: Checked Shirt */}
                      <div className="item-1 flex flex-col gap-2">
                        <div className="bg-[#F0EEED] mt-6 rounded-[13.24px] w-[198px] h-auto mx-2">
                            <Image src={Checkedshirt} alt={""} />
                        </div>
                        <h4 className="text-black text-[14px] font-bold ml-2">
                        CHECKERED SHIRT
                        </h4>
                        <Image src={rating1} alt="rating" className="ml-2"></Image>
                        <h3 className="text-[20px] leading-[27px] text-black ml-2 font-bold">
                            $180
                        </h3>
                    </div>

                    {/* Item 4: Orange Striped Shirt */}
                    <div className="item2 flex flex-col gap-2">
                        <div className="bg-[#F0EEED] mt-6 rounded-[13.24px] w-[198px] h-auto mx-3">
                            <Image src={Orangeshirt2} alt={""} />
                        </div>
                        <h4 className="text-black text-[14px] font-bold ml-2">
                        SLEEVE STRIPED T-SHIRT
                        </h4>
                        <Image src={rating1} alt="rating" className="ml-2"></Image>
                        <div className="pricing flex gap-2 ml-2">
                            <h3 className="text-black text-[20px] font-bold">
                                $130
                            </h3>
                            <h3 className="text-[rgba(0,0,0,0.4)] text-[20px] font-bold line-through">
                                $160
                            </h3>
                            <Image src={offer1} alt="offer"></Image>
                        </div>
                    </div>
                </div>
            </div>

            {/* View All Button for New Arrivals */}
            <button className="border-gray-400 border-[1px] md:w-[218px] md:h-[52px] w-[358px] h-[46px] rounded-[62px] py-[10px] px-[54px] m-auto font-medium text-[14px] md:text-[16px] md:leading-[21.6px] leading-[18.9px]">
                View All
            </button>

            {/* Divider Line */}
            <Image src={linex} alt="" className="mt-8 md:mt-2 mx-auto md:w-[1240px] h-[1px]"></Image>

            {/* Section Title: Top Selling */}
            <h1 className="text-black font-bold mt-6 text-[32px] md:text-[48px] md:leading-[57.6px] leading-[38.4px] text-center">
                TOP SELLING
            </h1>

            {/* Horizontal scrolling container for top selling items */}
            <div className="scroll-container overflow-x-auto">
                <div className="Topselling flex justify-between md:justify-around">
                    {/* Item 1: Green Shirt */}
                    <div className="item-1 flex flex-col gap-2">
                        <div className="bg-[#F0EEED] mt-6 rounded-[13.24px] w-[198px] h-auto mx-2">
                            <Image src={greenshirt} alt={""} />
                        </div>
                        <h4 className="text-black text-[14px] font-bold ml-2">
                            Vertical Striped Shirt
                        </h4>
                        <Image src={rating3} alt="rating" className="ml-2"></Image>
                        <div className="pricing flex gap-2 ml-2">
                            <h3 className="text-black text-[20px] font-bold">
                                $212
                            </h3>
                            <h3 className="text-[rgba(0,0,0,0.4)] text-[20px] font-bold line-through">
                                $235
                            </h3>
                            <Image src={offer1} alt="offer"></Image>
                        </div>
                    </div>

                    {/* Item 2: Orange Shirt */}
                    <div className="item2 flex flex-col gap-2">
                        <div className="bg-[#F0EEED] mt-6 rounded-[13.24px] w-[198px] h-auto mx-3">
                            <Image src={orangeshirt} alt={""} />
                        </div>
                        <h4 className="text-black text-[14px] font-bold ml-2">
                            Courage Graphic T-shirt
                        </h4>
                        <Image src={rating4} alt="rating" className="ml-2"></Image>
                        <h3 className="text-[20px] leading-[27px] text-black ml-2 font-bold">
                            $145
                        </h3>
                    </div>
                     {/* Item 3: Shorts */}
                     <div className="item-1 flex flex-col gap-2">
                        <div className="bg-[#F0EEED] mt-6 rounded-[13.24px] w-[198px] h-auto mx-2">
                            <Image src={Shorts} alt={""} />
                        </div>
                        <h4 className="text-black text-[14px] font-bold ml-2">
                        LOOSE FIT BERMUDA SHORTS
                        </h4>
                        <Image src={rating3} alt="rating" className="ml-2"></Image>
                        <h3 className="text-[20px] leading-[27px] text-black ml-2 font-bold">
                            $80
                        </h3>
                    </div>

                    {/* Item 4: FadedJeans */}
                    <div className="item2 flex flex-col gap-2">
                        <div className="bg-[#F0EEED] mt-6 rounded-[13.24px] w-[198px] h-auto mx-3">
                            <Image src={Fadedjeans} alt={""} />
                        </div>
                        <h4 className="text-black text-[14px] font-bold ml-2">
                        FADED SKINNY JEANS
                        </h4>
                        <Image src={rating4} alt="rating" className="ml-2"></Image>
                        <h3 className="text-[20px] leading-[27px] text-black ml-2 font-bold">
                            $210
                        </h3>
                    </div>
                </div>
            </div>

            {/* View All Button for Top Selling */}
            <button className="border-gray-400 border-[1px] w-[358px] md:w-[218px] md:h-[52px] h-[46px] rounded-[62px] py-[10px] px-[54px] m-auto font-medium text-[14px] md:text-[16px] md:leading-[21.6px] leading-[18.9px]">
                View All
            </button>

            {/* Browse by Dress Style Section */}
<div className="BrowseByStyle w-[358px] h-[975px] md:w-[1239px] md:h-auto mx-auto gap-4 mt-12 bg-[#F0F0F0] rounded-[20px] flex flex-col items-center py-8">
  {/* Section Title */}
  <h1 className="text-black font-bold text-[24px] md:text-[32px] leading-[36px] text-center mb-6">
    BROWSE BY DRESS STYLE
  </h1>

  {/* Images Grid */}
  <div className="flex flex-col  gap-6 md:grid md:grid-cols-2 md:grid-rows-2 md:items-center md:justify-center ">
    {/* Image 1: Casual */}
      <Image src={casualclothes} alt="Casual Style" className="md:w-[548px] md:h-[289px]"/>
        

    {/* Image 2: Formal */}
          <Image src={formalclothes} alt="Formal Style" className="md:w-[548px] md:h-[289px]"/>
      


    {/* Image 3: Party */}
    
      <Image src={partyclothes} alt="Party Style" className="md:w-[548px] md:h-[289px]" />
      
       {/* Image 4: Gym */}
    
      <Image src={gymclothes} alt="Gym Style"  className="md:w-[548px] md:h-[289px]"/>
     
    
  </div>
</div>


            {/* Customer Reviews Section */}
            <div className="happycustomer flex flex-col gap-4 md:gap-6 mt-12 ml-4 ">
                <h1 className="text-[32px] md:text-[48px] md:leading-[57.6px] leading-[36px] font-bold md:ml-10">
                    OUR HAPPY CUSTOMERS
                </h1>
                {/* Customer Reviews */}
                <div className="md:flex md:justify-around">
                {/* Review Box 1 */}
                <div className="reviewbox1 border-gray-400 border-[1px] rounded-[20px] w-[358px] h-auto p-6 flex flex-col gap-6">
                    <Image src={review} alt=""></Image>
                    <div className="flex gap-2">
                        <h5 className="text-black font-bold text-base leading-[22px]">
                            Sarah M.
                        </h5>
                        <Image src={okicon} alt=""></Image>
                    </div>
                    <p className="text-black font-normal text-sm leading-[20px]">
                        "I'm blown away by the quality and style of the clothes
                        I received from Shop.co. From casual wear to elegant
                        dresses, every piece I've bought has exceeded my
                        expectations.”
                    </p>
                </div>

                {/* Review Box 2 */}
                <div className="reviewbox2 hidden border-gray-400 border-[1px] rounded-[20px] w-[358px] h-auto p-6 md:flex flex-col gap-6">
                    <Image src={review} alt=""></Image>
                    <div className="flex gap-2">
                        <h5 className="text-black font-bold text-base leading-[22px]">
                        Alex K.
                        </h5>
                        <Image src={okicon} alt=""></Image>
                    </div>
                    <p className="text-black font-normal text-sm leading-[20px]">
                    "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
                    </p>
                </div>

                {/* Review Box 3  */}
                
                <div className="reviewbox3 hidden border-gray-400 border-[1px] rounded-[20px] w-[358px] h-auto p-6 md:flex flex-col gap-6 ">
                    <Image src={review} alt=""></Image>
                    <div className="flex gap-2">
                        <h5 className="text-black font-bold text-base leading-[22px]">
                            James L.
                        </h5>
                        <Image src={okicon} alt=""></Image>
                    </div>
                    <p className="text-black font-normal text-sm leading-[20px]">
                    "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
                    </p>
                </div>
                </div>
            </div>

            {/* Newsletter Subscription Section */}
           
<div className="updates bg-black w-full max-w-[358px] flex flex-col justify-between items-center gap-6 mt-12 mx-auto h-[293px] p-6 rounded-[20px] md:max-w-[1240px] md:h-[180px] md:flex-row md:items-center md:justify-between">
    <h1 className="font-bold text-white text-[32px] leading-[35px] text-center md:text-[40px] md:leading-[45px] md:w-[551px]">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
    </h1>
    <div className="w-full flex flex-col gap-4 md:flex md:flex-col md:items-center md:gap-6">
        {/* Input Field */}
        <div className="flex items-center bg-white rounded-[62px] w-full max-w-[311px] h-[42px] px-4 gap-2 mx-auto md:max-w-[349px] md:h-[46px]">
            <Image
                src={emailicon}
                alt="Email Icon"
                className="w-5 h-5"
            />
            <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent text-black text-sm font-normal leading-[18px] flex-1 outline-none"
            />
        </div>
        {/* Button */}
        <button className="bg-white text-black font-bold text-[14px] leading-[18px] px-[33px] py-[10px] rounded-[62px] w-full max-w-[311px] h-[42px] mx-auto md:max-w-[349px] md:h-[46px] md:text-[16px] md:leading-[21.6px] hover:bg-slate-300">
            Subscribe to Newsletter
        </button>
    </div>
</div>

        </div>
    );
}

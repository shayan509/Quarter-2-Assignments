export interface TopProducts {
    name: string;
    price: string;
    image: string;
    id: number;
  }
  
  import Image from "next/image";
  
  export default function Toppicks() {
    const TopProducts: TopProducts[] = [
      {
        name: "Trenton modular sofa_3",
        price: "Rs. 25,000.00",
        image: "/singlesofa.png",
        id: 1,
      },
      {
        name: "Granite dining table with dining chair",
        price: "Rs. 25,000.00",
        image: "/dining1.png",
        id: 2,
      },
      {
        name: "Outdoor bar table and stool",
        price: "Rs. 25,000.00",
        image: "/dining2.png",
        id: 3,
      },
      {
        name: "Plain console with teak mirror",
        price: "Rs. 25,000.00",
        image: "/mirror.png",
        id: 4,
      },
    ];
  
    return (
      <div className="Toppicks bg-white flex flex-col items-center py-8 justify-around gap-8 px-4 xl:h-[777px]">
        {/* Header Text */}
        <div className="header text-center gap-4">
          <h1 className="font-Poppins font-medium text-2xl md:text-3xl xl:text-4xl leading-[54px]">
            Top Picks For You
          </h1>
          <p className="font-Poppins font-medium text-sm md:text-base  text-[#9F9F9F]">
            Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
        </div>
  
        {/* Top Products */}
        <div className="flex flex-wrap justify-center gap-8">
          {TopProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="flex flex-col items-center gap-4"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={287}
                  height={287}
                  className="object-cover"
                />
                <div className="text flex flex-col items-center gap-2">
                  <p className="font-Poppins font-normal text-base text-center">
                    {product.name}
                  </p>
                  <p className="font-Poppins font-medium text-xl md:text-2xl leading-[36px]">
                    {product.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
  
        {/* View All Button */}
        <div className="flex flex-col items-center gap-3">
          <p className="font-Poppins font-medium text-xl md:text-2xl">View all</p>
          <div className="bg-black h-0.5 w-[115px]"></div>
        </div>
      </div>
    );
  }
  
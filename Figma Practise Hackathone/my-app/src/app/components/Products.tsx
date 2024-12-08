import Image from "next/image";

// Define the product type
export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  Beforprice?: number;
  rating: number;
}

export default function Products() {
  // Step 2: Define products array with proper typing
  const products: Product[] = [
    {
      id: 1,
      image: "/gampad.png",
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      Beforprice: 160,
      rating: 88,
    },
    {
      id: 2,
      image: "/keyboard.png",
      name: "AK-900 Wired Keyboard",
      price: 960,
      Beforprice: 1160,
      rating: 75,
    },
    {
      id: 3,
      image: "/lcd.png",
      name: "IPS LCD Gaming Monitor",
      price: 370,
      Beforprice: 400,
      rating: 99,
    },
    {
      id: 4,
      image: "/chair.png",
      name: "S-Series Comfort Chair",
      price: 375,
      Beforprice: 400,
      rating: 99,
    },
  ];

  return (
    <div className="bg-white mt-28 px-36 w-full overflow-x-auto">
      {/* Flash Sales Header */}
      <div className="flex items-center justify-between border-b pb-4">
        {/* Left Section */}
        <div className="flex gap-12 items-center">
          <div className="flex flex-col items-start">
            <Image src="/today.png" alt="today" width={100} height={40} />
            <h1 className="font-semibold text-4xl leading-[48px]">Flash Sales</h1>
          </div>
          <Image src="/time.png" alt="time" width={302} height={50} />
        </div>
        <div className="flex items-center">
          <Image src="/lr.png" alt="arrows" width={100} height={46} />
        </div>
      </div>

      {/* Products */}
      <div className="flex items-center gap-7 mt-10">
        {products.map((product) => (
        //   product
          <div className={`product${product.id} flex flex-col gap-4`}>
            {/* product Image */}
            <Image src={product.image} alt="product" width={270} height={250}></Image>
            {/* Product Name */}
            <p className="font-medium text-base text-black">{product.name}</p>      
          {/* Product Pricing */}
          <span className="flex gap-3 font-medium text-base">
              <p className="text-[rgba(219,68,68,1)]">${product.price}</p> <p className="line-through text-gray-400">${product.Beforprice}</p>
          </span>
          {/* Product Rating */}
          <span className="flex gap-3">
            <Image src={"/Five star.png"} alt="rating" width={100} height={20} className=""/> <p className="text-gray-400 text-sm font-semibold">({product.rating})</p>
          </span>
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="mt-16 flex justify-center">
        <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
          View All Products
        </button>
      </div>
    </div>
  );
}

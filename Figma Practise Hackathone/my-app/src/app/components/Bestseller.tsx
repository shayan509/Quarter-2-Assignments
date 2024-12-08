import Image from "next/image";
import { Product } from "./Products";

export default function Bestseller() {
  let products: Product[] = [
    {
      id: 1,
      image: "/Jacket.png",
      name: "The north coat",
      price: 260,
      Beforprice: 360,
      rating: 65,
    },
    {
      id: 2,
      image: "/Bag.png",
      name: "Gucci duffle bag",
      price: 260,
      Beforprice: 960,
      rating: 1160,
    },
    {
      id: 3,
      image: "/cooler.png",
      name: "RGB liquid CPU Cooler",
      price: 160,
      Beforprice: 170,
      rating: 65,
    },
    {
      id: 4,
      image: "/table.png",
      name: "Small BookShelf",
      price: 360,
      rating: 65,
    },
  ];

  return (
    <div className="Bestseller mt-32 flex flex-col gap-9 w-full ">
      {/* header */}
      <div className="header flex justify-around items-end">
        <Image
          src={"/Bestseller.png"}
          alt=""
          width={379}
          height={108}
          className=""
        ></Image>
        <button className="w-40 h-14 bg-[rgba(219,68,68,1)] text-white py-5 px-12 rounded">
          View All
        </button>
      </div>

      {/* Best selling products */}
      <div className="flex items-center justify-center gap-7 mt-10">
        {products.map((product) => (
          // product
          <div key={product.id} className={`product${product.id} flex flex-col gap-4`}>
            {/* product Image */}
            <Image
              src={product.image}
              alt="product"
              width={270}
              height={250}
            ></Image>

            {/* Product Name */}
            <p className="font-medium text-base text-black">{product.name}</p>

            {/* Product Pricing */}
            <span className="flex gap-3 font-medium text-base">
              <p className="text-[rgba(219,68,68,1)]">${product.price}</p>
              {product.Beforprice && (
                <p className="line-through text-gray-400">${product.Beforprice}</p>
              )}
            </span>

            {/* Product Rating */}
            <span className="flex gap-3">
              <Image
                src={"/Five star.png"}
                alt="rating"
                width={100}
                height={20}
                className=""
              />
              <p className="text-gray-400 text-sm font-semibold">
                ({product.rating})
              </p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

import { TopProducts } from "./Toppicks";
import Image from "next/image";


export default function Shopproducts() {
    const Products: TopProducts[] = [{
        name : "Trenton modular sofa_3",
        image : "/Shoproducts/r1c1.png",
        price : "Rs. 25,000.00",
        id : 0
    },{
        name : "Granite dining table with dining chair",
        image : "/Shoproducts/r1c2.png",
        price : "Rs. 25,000.00",
        id : 1
    },{
        name : "Outdoor bar table and stool",
        image : "/Shoproducts/r1c3.png",
        price : "Rs. 25,000.00",
        id : 2
    },{
        name : "Plain console with teak mirror",
        image : "/Shoproducts/r1c4.png",
        price : "Rs. 25,000.00",
        id : 3
    },{
        name : "Grain coffee table",
        image : "/Shoproducts/r2c1.png",
        price : "Rs. 15,000.00",
        id : 4
    },{
        name : "Kent coffee table",
        image : "/Shoproducts/r2c2.png",
        price : "Rs. 225,000.00",
        id : 5
    },{
        name : "Round coffee table_color 2",
        image : "/Shoproducts/r2c3.png",
        price : "Rs. 251,000.00",
        id : 6
    },{
        name : "Reclaimed teak coffee table",
        image : "/Shoproducts/r2c4.png",
        price : "Rs. 25,200.00",
        id : 7
    },{
        name : "Plain console_",
        image : "/Shoproducts/r3c1.png",
        price : "Rs. 258,200.00",
        id : 8
    } ,{
        name : "Reclaimed teak Sideboard",
        image : "/Shoproducts/r3c2.png",
        price : "Rs. 20,000.00",
        id : 9
    } ,{
        name : "SJP_0825 ",
        image : "/Shoproducts/r3c3.png",
        price : "Rs. 200,000.00",
        id : 10
    } ,{
        name : "Bella chair and table",
        image : "/Shoproducts/r3c4.png",
        price : "Rs. 100,000.00",
        id : 11
    } ,{
        name : "Granite square side table",
        image : "/Shoproducts/r4c1.png",
        price : "Rs. 25,000.00",
        id : 12
    } ,{
        name : "Asgard Sofa",
        image : "/Shoproducts/r4c2.png",
        price : "Rs. 258,800.00",
        id : 13
    }, {
        name : "Maya sofa three seater",
        image : "/Shoproducts/r4c3.png",
        price : "Rs. 250,000.00",
        id : 14
    } , {
        name : "Outdoor sofa set",
        image : "/Shoproducts/r4c4.png",
        price : "Rs. 115,000.00",
        id : 15
    }];
    
    return (
   <div className="ShopProducts flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Products.map((product) => {
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
    )
}
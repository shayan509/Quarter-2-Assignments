import Image from "next/image";
import Hero from "@/app/components/Hero"
import Products from "./components/Products";
import Category from "./components/Category";
import Bestseller from "./components/Bestseller";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
 <Hero/>
<Products/>
<Category/>
<Bestseller></Bestseller>
    </div>
  )
}

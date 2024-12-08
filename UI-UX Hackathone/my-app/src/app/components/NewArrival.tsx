import Image from "next/image";

export default function NewArrival() {
    return (
        <div className="NewArrival bg-Herobg py-8  md:py-10 flex flex-col justify-around xl:flex-row items-center">
            <Image src={"/bigsofa1.png"} alt="" width={800} height={800}></Image>
            <div className="text flex flex-col items-center gap-3">
                <h3 className="font-Poppins font-medium text-2xl">New Arrivals</h3>
                <h1 className="font-Poppins font-bold text-5xl leading-[72px]">Asgaard sofa</h1>
            <button className="bg-Herobg border-[1px] w-64 h-16 border-black font-Poppins font-normal text-xl">Order Now</button>
            </div>
        </div>
    );
}
import Image from "next/image";

export default function TablenBead() {
  return (
    <div className="TablenBead bg-[#FAF4F4] p-12 md:flex md:items-center md:justify-center xl:flex xl:justify-around xl:items-center xl:h-[672px] justify-center">
      
      {/* 1 */}
      <div className="table1 flex flex-col items-center  gap-6 md:flex-row md:items-start xl:flex-col xl:items-center justify-center">
        <Image src="/table.png" alt="Table" width={400} height={100} />
        <div className="text flex flex-col items-center gap-6">
          <p className="font-Poppins font-medium text-4xl leading-[54px]">Side Table</p>
          <div className="flex flex-col gap-3 items-center">
            <p className="font-Poppins font-medium text-2xl leading-[36px]">View all</p>
            <div className="bg-black h-0.5 w-[121px]"></div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="bed flex flex-col mt-10 items-center gap-6 md:flex-row md:items-start xl:flex-col xl:items-center justify-center">
        <Image src="/bead.png" alt="Bead" width={450} height={100} />
        <div className="text flex flex-col items-center gap-6">
          <p className="font-Poppins font-medium text-4xl leading-[54px]">Side Bead</p>
          <div className="flex flex-col gap-3 items-center">
            <p className="font-Poppins font-medium text-2xl leading-[36px]">View all</p>
            <div className="bg-black h-0.5 w-[121px]"></div>
          </div>
        </div>
      </div>

    </div>
  );
}

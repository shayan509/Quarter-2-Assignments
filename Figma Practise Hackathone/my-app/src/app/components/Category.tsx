import Image from "next/image"

export default function Category() {
    return (
        <div className="w-full flex flex-col gap-14 mt-20 border-b-[0.5px] border-[rgba(0,0,0,1)]">
            {/* Category header */}
            <div className="flex justify-around">
                {/* title/heading */}

                <Image src={"/Category.png"} alt="" width={379} height={108}></Image>

                {/* Arrows  has to be changed */}
                <Image src={"/lr.png"} alt="" width={20} height={20} className=""></Image>

            </div>
              <div className="flex justify-center mb-28  ">
            {/* Category  Selection*/}
            <Image src={"/categoryselect.png"} alt="" width={1170} height={45}></Image>
            </div>
        </div>
    )
}
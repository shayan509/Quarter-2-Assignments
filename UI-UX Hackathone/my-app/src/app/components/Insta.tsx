export default function Insta() {
    return (
        <div className="Insta py-28 xl:h-[450px] bg-white bg-cover bg-center bg-[url('/instabg.png')] flex justify-center items-center">
            <div className="text-center flex flex-col justify-center items-center gap-4">
                <h2 className="font-Poppins font-bold text-6xl leading-[90px]">
                    Our Instagram
                </h2>
                <p className="font-Poppins font-normal text-2xl">
                    Follow our store on Instagram
                </p>
                <button className="w-64 h-16 bg-white text-black rounded-[50px] border border-black">
                    Follow Us
                </button>
            </div>
        </div>
    );
}


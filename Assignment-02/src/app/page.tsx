
import Link from "next/link";

export default function Home() {
  return (
    <div className="Page bg-bgcolor text-white">
      {/* Navbar */}
      <div className="Navbar flex justify-around items-center p-5 bg-bgcolor">
        <div className="pl-4 flex">
          <h3 className="text-3xl font-bold font-Montserrat mr-14">BrandName</h3>
          <div className="flex font-bold mt-2 font-Montserrat gap-6">
          <Link href="">Home</Link>
          <Link href="">Pricing</Link>
          <Link href="">Product</Link>
          <Link href="">Contact</Link>
        </div>
        </div>
       
        <div className=" font-Montserrat font-bold flex gap-3">
          <button className="p-2">Login</button>
          <button className="p-2 bg-blue-500 rounded text-white">Join Us</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container  mx-auto text-center mt-32">
        <h5 className="text-blue-400 font-Montserrat font-bold font-uppercase">Welcome</h5>
        <h1 className="text-6xl font-Montserrat font-bold my-5">
          Selling on the <br /> internet like a pro
        </h1>
        <p className="text-lg max-w-xl font-Montserrat font-normal mx-auto mb-10">
          We know how large objects will act, but things on a small scale just do not act that way.
        </p>
        <div className="flex font-Montserrat font-bold justify-center gap-5 pb-20">
          <button className="px-6 py-3 bg-blue-500 rounded text-white">Get Quote Now</button>
          <button className="px-6 py-3 border border-blue-500 rounded text-blue-500">Learn More</button>
        </div>
        {/* Horizontal Divs */}
        <div className="flex row justify-center gap-5 pb-20">
          <div className="bg-h3 flex flex-col w-80 h-72 gap-3 rounded">
            <div className="bg-div1box w-20 h-24 rounded-lg my-6 mx-5"></div>
            <h5 className="font-Montserrat font-bold text-black text-base text-left ml-5 mb-2">training Courses</h5>
            <div className="w-12 h-1 bg-div1box ml-5"></div>
            <p className="font-Montserrat font-normal text-black px-11 pb-6 text-sm">The gradual accumulation of
              information about atomic and
              small-scale behaviour...</p>
          </div>
          <div className="bg-h3 flex flex-col w-80 h-72 gap-3 rounded">
            <div className="bg-div2box w-20 h-24 rounded-lg my-6 mx-5"></div>
            <h5 className="font-Montserrat font-bold text-black text-base text-left ml-5 mb-2">2.769 online courses</h5>
            <div className="w-12 h-1 bg-div2box ml-5"></div>
            <p className="font-Montserrat font-normal px-11 pb-6 text-black text-sm">The gradual accumulation of
              information about atomic and
              small-scale behaviour...</p>
          </div>
          <div className="bg-blue-500 flex flex-col w-80 h-72 gap-3 rounded">
            <div className="bg-white w-20 h-24 rounded-lg my-6 mx-5"></div>
            <h5 className="font-Montserrat font-bold text-h3 text-base text-left ml-5 mb-2">training Courses</h5>
            <div className="w-12 h-1 bg-white ml-5 "></div>
            <p className="font-Montserrat font-normal px-11 pb-6 text-h3 text-sm">The gradual accumulation of
              information about atomic and
              small-scale behaviour...</p>
          </div>
          </div>
        </div>
      </div>
  );
}

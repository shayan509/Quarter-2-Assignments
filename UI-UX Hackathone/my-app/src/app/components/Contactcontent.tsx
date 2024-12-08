import Image from "next/image";
export default function Contactcontent() {
  return (
    <section className="bg-[#FAF4F4] px-4 lg:px-16 py-12">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-Poppins text-2xl lg:text-4xl font-semibold">
            Get In Touch With Us
          </h1>
          <p className="text-[#9F9F9F] text-sm lg:text-base mt-4 text-center">
            For More Information About Our Product & Services, Please Feel Free
            To Drop Us An Email. Our Staff Will Always Be There To Help You Out.
            Do Not Hesitate!
          </p>
        </div>

        <div className="flex flex-wrap justify-between items-start gap-12">
          {/* Left Column */}
          <div className="flex-1 space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <Image src="/address.png" alt="" width={30} height={30} className=""></Image>
              <div>
                <h2 className="font-Poppins font-medium text-lg">Address</h2>
                <p className="text-[#9F9F9F] text-sm">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
            <Image src="/phone.png" alt="" width={30} height={30} className=""></Image>
              <div>
                <h2 className="font-Poppins font-medium text-lg">Phone</h2>
                <p className="text-[#9F9F9F] text-sm">
                  Mobile: (+84) 546-6789 <br />
                  Hotline: (+84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start gap-4">
            <Image src="/clock.png" alt="" width={30} height={30} className=""></Image>
              <div>
                <h2 className="font-Poppins font-medium text-lg">
                  Working Time
                </h2>
                <p className="text-[#9F9F9F] text-sm">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Contact Form) */}
          <div className="flex-1">
            <form className="space-y-14">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@asdf.com"
                  className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is optional"
                  className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! I’d like to ask about..."
                  rows={4}
                  className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

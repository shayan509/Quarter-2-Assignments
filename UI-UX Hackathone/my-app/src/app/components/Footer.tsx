import React from "react";

export default function Footer() {
    return (
        <footer className="bg-white w-full px-4 lg:px-16 py-12">

            {/* Footer Content */}
            <div className="mt-16 flex flex-wrap justify-between items-start gap-8 text-sm lg:text-base">
                {/* Contact Information */}
                <div className="flex-1  max-w-[300px]">
                    
                    <p className="text-[#9F9F9F] font-Poppins mt-2">
                        400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
                    </p>
                </div>

                {/* Links */}
                <div className="flex-1 max-w-[300px]">
                    <h2 className="text-[#9F9F9F] font-Poppins font-medium text-lg">Links</h2>
                    <ul className="mt-2 space-y-14">
                        <li className=" font-Poppins">Home</li>
                        <li className=" font-Poppins">Shop</li>
                        <li className=" font-Poppins">About</li>
                        <li className=" font-Poppins">Contact</li>
                    </ul>
                </div>

                {/* Help */}
                <div className="flex-1  max-w-[300px]">
                    <h2 className="text-[#9F9F9F] font-Poppins font-medium text-lg">Help</h2>
                    <ul className="text-black mt-2 space-y-14">
                        <li className=" font-Poppins">Payment Options</li>
                        <li className=" font-Poppins">Returns</li>
                        <li className=" font-Poppins">Privacy Policies</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="flex-1 max-w-[300px]">
                    <h2 className="font-Poppins font-medium text-[#9F9F9F] text-lg">Newsletter</h2>
                    <div className="flex items-center mt-2">
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="flex-1 p-2  border-black border-b-2 rounded-l-md text-sm"
                        />
                        <button className=" text-black border-b-2 border-black px-4 py-2 rounded-r-md">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-12 text-center text-[#9F9F9F] font-Poppins text-sm">
                2022 Meubeli House. All rights reserved.
            </div>
        </footer>
    );
}

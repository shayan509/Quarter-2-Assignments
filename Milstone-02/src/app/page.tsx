import image from "@/app/assests/myimg2.png";
import Image from "next/image";
import Skills from "./Components/Skill-section";
import Projects from "./Components/Projects section";

export default function Home() {
  return (
    <div className="Total-Content flex flex-col gap-20 p-4">
      {/* Main Content Section */}
      <div className="main-Content flex flex-col md:flex-row justify-center items-center mt-20 gap-12 text-center md:text-left">
        <div className="text flex flex-col gap-6">
          <div>
            <h1 className="text-5xl font-bold">
              Hello, I'm <br />
            </h1>
            <h1 className="text-5xl font-bold text-blue-600 leading-tight">
              Muhammad
            </h1>
            <h1 className="text-5xl font-bold text-blue-600">Shayan Imran</h1>
          </div>
          <p className="text-2xl text-gray-700 font-medium">
            A fresh and passionate
            <br /> full-stack developer
          </p>
        </div>
        
        {/* Profile Image with Shadow and Rounded Corners */}
        <div className="My-image">
          <Image
            src={image}
            alt="My Image"
            width={250}  // Adjusted width
            height={250} // Adjusted height
            className="w-60 h-60 rounded-full shadow-lg border-4 border-blue-600" // Adjusted class for better size
          />
        </div>
      </div>

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />
    </div>
  );
}

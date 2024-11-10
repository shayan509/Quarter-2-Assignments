import Image from "next/image";
import js from "@/app/assests/js.png";
import ts from "@/app/assests/ts.png";
import nodejs from "@/app/assests/nodejs.png";
import nextjs from "@/app/assests/nextjs.png";
import tailwind from "@/app/assests/tailwind.png";
import html from "@/app/assests/html.png";
import css from "@/app/assests/Css.png";

export default function Skills() {
  return (
    <section className="Skills-Section mt-20 px-8 text-center">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="skills-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div className="skill-item flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <Image src={js} alt="JavaScript" width={64} height={64} className="mb-2" />
          <span className="text-lg font-medium text-gray-700">JavaScript</span>
        </div>
        <div className="skill-item flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <Image src={ts} alt="TypeScript" width={64} height={64} className="mb-2" />
          <span className="text-lg font-medium text-gray-700">TypeScript</span>
        </div>
        <div className="skill-item flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <Image src={nextjs} alt="Next.js" width={64} height={64} className="mb-2" />
          <span className="text-lg font-medium text-gray-700">Next.js</span>
        </div>
        <div className="skill-item flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <Image src={html} alt="HTML" width={64} height={64} className="mb-2" />
          <span className="text-lg font-medium text-gray-700">HTML</span>
        </div>
        <div className="skill-item flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <Image src={css} alt="CSS" width={64} height={64} className="mb-2" />
          <span className="text-lg font-medium text-gray-700">CSS</span>
        </div>
        <div className="skill-item flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <Image src={tailwind} alt="Tailwind" width={64} height={64} className="mb-2" />
          <span className="text-lg font-medium text-gray-700">Tailwind</span>
        </div>
        <div className="skill-item flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <Image src={nodejs} alt="Node.js" width={64} height={64} className="mb-2" />
          <span className="text-lg font-medium text-gray-700">Node.js</span>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

import p1 from "@/app/assests/p1.jpg";
import p2 from "@/app/assests/p2.jpg";
import cmd from "@/app/assests/cmd.png";

const projects = [
  { id: 1, title: "Static Resume", imageUrl: p1, link: "https://milestone-01-fawn.vercel.app/" },
  { id: 2, title: "Dynamic Resume Builder", imageUrl: p2, link: "https://editableresumebuilder-psi.vercel.app/" },
  { id: 3, title: "Command Prompt Projects", imageUrl: cmd, link: "https://github.com/shayan509?tab=repositories" },
];

export default function ProjectCards() {
  return (
    <section className="Project-Section mt-20 px-8 text-center mb-24">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="project-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Link key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="project-card flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

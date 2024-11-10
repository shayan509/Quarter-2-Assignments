
import { error } from "console";

export default function Projects() {
  throw new console.error("Error") 
  return (
    <div
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="w-screen h-screen flex flex-col justify-between"
    >
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-bold text-4xl md:text-6xl text-white stroke-slate-100 mb-4">About</h1>
        <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto">
          Get to know us.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque nihil officia recusandae similique iure ab minus incidunt odit quas? Consectetur id sed dolorum cumque!
        </p>
      </div>
    </div>
  );
}

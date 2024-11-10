"use client"
// import { error } from "console"

// export default function Home() {
//   throw new console.error("eroor");
  
export default function Error() {
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
          <h1 className="font-bold text-4xl md:text-6xl text-white stroke-slate-100 mb-4">Opps... you ran into an error, try refreshing the page.</h1>
        </div>
      </div>
    )
}
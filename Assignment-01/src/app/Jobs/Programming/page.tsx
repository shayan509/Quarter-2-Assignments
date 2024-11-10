export default function Programming() {
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
        <h1 className="font-bold text-4xl md:text-6xl text-white stroke-slate-100 mb-4">Programming Jobs</h1>
        <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto">
          Become a Programmer Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga odit nihil, vero optio, nobis vel explicabo magnam voluptate cumque maiores, velit sequi eius dolores blanditiis iusto qui a. Laudantium corporis tenetur dolores. Deserunt nostrum vitae ad cumque, exercitationem odio.
        </p>
      </div>
    </div>
  );
}

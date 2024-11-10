export default function Jobs() {
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
        <h1 className="font-bold text-4xl md:text-6xl text-white stroke-slate-100 mb-4">Jobs</h1>
        <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto">
          Looking for opportunities? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam sunt, maiores eius distinctio, cum temporibus nisi quos qui incidunt, consequuntur voluptatibus officiis! Ipsum saepe unde iusto. Fuga eum obcaecati quae nam voluptatibus. Deleniti, architecto error.
          </p>
      </div>
    </div>
  );
}

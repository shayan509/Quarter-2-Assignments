export default async function Services() {
  await new Promise((resolve , reject) => {
    setTimeout(resolve , 5000)
});
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
        <h1 className="font-bold text-4xl md:text-6xl text-white stroke-slate-100 mb-4">Contacts</h1>
        <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto">
          Our wide range of services is tailored to meet your needs, from software development to digital marketing. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut architecto maxime nam!
        </p>
      </div>
    </div>
  );
}

export default function Home() {
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
        <h1 className="font-bold text-4xl md:text-6xl text-white mb-4">Home</h1>
        <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quidem quae? Est ratione odio officia iusto quae voluptatum impedit? Cupiditate, recusandae natus! Rerum vitae atque soluta harum eum doloribus corporis. Itaque excepturi, hic nulla ad in voluptatem possimus ipsam, provident reprehenderit repudiandae, nisi impedit cum iste error doloremque! Id, repellat.
        </p>
      </div>
    </div>
  );
}

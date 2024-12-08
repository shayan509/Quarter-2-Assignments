import Image from "next/image";

interface Blog {
  name: string;
  image: string;
  key: number;
}

export default function Blog() {
  const Blogs: Blog[] = [
    {
      name: "Going all-in with millennial design",
      image: "/keyboard.png",
      key: 1,
    },
    {
      name: "Going all-in with millennial design",
      image: "/pc.png",
      key: 2,
    },
    {
      name: "Going all-in with millennial design",
      image: "/pc1.png",
      key: 3,
    },
  ];

  return (
    <div className="Blog py-14 bg-white flex flex-col items-center gap-8 px-4 xl:h-[900px]">
      {/* Header text */}
      <div className="header text-center gap-4">
        <h1 className="font-Poppins font-medium text-2xl md:text-3xl xl:text-4xl leading-[54px]">
          Our Blogs
        </h1>
        <p className="font-Poppins font-medium text-sm md:text-base text-[#9F9F9F]">
          Find a bright idea to suit your taste with our great selection
        </p>
      </div>

      {/* Blogs */}
      <div className="flex flex-wrap  justify-center gap-12">
        {Blogs.map((blog) => (
          <div
            key={blog.key}
            className="blog flex flex-col gap-4 items-center"
          >
            <Image
              src={blog.image}
              alt={blog.name}
              width={393}
              height={393}
              className="object-cover"
            />
            <div className="text flex flex-col gap-3 items-center">
              <p className="font-Poppins font-normal text-base md:text-xl text-center">
                {blog.name}
              </p>
              <div className="flex flex-col gap-3 items-center">
                <p className="font-Poppins font-medium text-lg md:text-2xl">
                  View all posts
                </p>
                <div className="bg-black h-0.5 w-[170px]"></div>
              </div>
              <Image
                src={"/timendate.png"}
                alt=""
                width={223}
                height={24}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* View all button */}
      <div className="flex flex-col gap-3 items-center">
        <p className="font-Poppins font-medium text-lg md:text-2xl">
          View all posts
        </p>
        <div className="bg-black h-0.5 w-[170px]"></div>
      </div>
    </div>
  );
}

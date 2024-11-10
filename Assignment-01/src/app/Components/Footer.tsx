import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    return(
        <footer className="bg-gray-800 text-white p-4 flex flex-col items-center">
        <p>This website was made by M.Shayan Imran</p>
        <p>For more similar projects visit the following:</p>
        <Link target="_blank" href="https://github.com/shayan509?tab=repositories" className="text-blue-500 none">
          Github repo 
          <Image src="/1.png" alt="github logo" width={200} height={200} className="inline-block w-6 h-6 ml-2"></Image>
        </Link><br />
        <Link href="" className="text-blue-500 none ">
          Git account 
          <Image src="/2.png" alt="gitlogo" width={100} height={100} className="inline-block w-6 h-6 ml-2"></Image>
        </Link>
      </footer>
    )
}
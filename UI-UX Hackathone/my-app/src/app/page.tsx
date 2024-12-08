import HeroSec from "./components/Hero";
import Navbar from "./components/Navbar";
import TablenBead from "./components/TablenBead";
import Toppicks from "./components/Toppicks";
import NewArrival from "./components/NewArrival";
import Blog from "./components/Blog";
import Insta from "./components/Insta";
export default function Home() {
  return (
    <div className="flex bg-Herobg flex-col overflow-x-hidden">
     <Navbar></Navbar>
     <HeroSec></HeroSec>
     <TablenBead></TablenBead>
    <Toppicks></Toppicks>
    <NewArrival></NewArrival>
    <Blog></Blog>
    <Insta></Insta>
    </div>
  );
}

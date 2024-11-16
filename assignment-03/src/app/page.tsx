import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Management from "./components/Management";
import Extension from "./components/Extension";
import Customize from "./components/Customize";
import Work from "./components/Work";
import Sponsers from "./components/Sponsers";
import Footer from "./components/Footer";

export default function Home(){
  return (
<div className="flex flex-col">
  {/* Navbar */}

<Navbar/>

{/* Hero Section */}

<Hero/>

{/* Management Section */}

<Management/>

{/* Extension Section */}

<Extension/>

{/* Customize Section */}

<Customize/>

{/* Work Section  */}

<Work/>

{/* Sponsers Section */}

<Sponsers/>

{/* Footer */}

<Footer/>
</div>
  )
}
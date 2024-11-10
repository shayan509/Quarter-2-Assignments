import Link from "next/link"

export default function Navbar () {
    return (
        <nav id = "Navbar">
              <Link className="nav-component" href={"/"}>Home</Link>
              <Link className="nav-component" href={"/About"}>About</Link>
              <Link className="nav-component" href={"/Projects"}>Projects</Link>
              <Link className="nav-component" href={"/Jobs"}>Jobs</Link>
              {/* <Link href={"/Jobs/Programming"}></Link> */}
              <Link className="nav-component" href={"/Contacts"}>Contacts </Link> 
        </nav>

    )
}
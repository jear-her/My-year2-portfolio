import { Link } from "react-router-dom"
import LOGOIMAGE from "../assets/Logo.png"


const Navbar = () => {
    return (
        <nav className=" bg-gray-900 text-white p-4 flex justify-between items-center md:flex-row flex-col shadow-md  ">

            <header className="flex items-center ">
                <img
                    src={LOGOIMAGE}
                    alt="MY logoiamge"
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer"
                />
                <h1 className="text-xl font-bold text-white hover:text-blue-300 cursor-pointer" >Jear HER</h1>

            </header>

            <ul className="flex flex-col space-x-4 md:flex-row  " >
                <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
                <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
                <li><Link to="/profile" className="hover:text-blue-300">Profile</Link></li>
                <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>

            <button className="rounded-2xl bg-green-200 text-black px-4 py-2  hover:bg-blue-600 transition duration-300">
                <Link to="/contact" >Hire Me</Link>
            </button>

        </nav>
    )
}

export default Navbar

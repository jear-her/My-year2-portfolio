import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import LOGOIMAGE from "../assets/Logo.png"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll for glassmorphism effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Profile", path: "/profile" },
        { name: "Contact", path: "/contact" },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? "bg-gray-900/90 backdrop-blur-md py-2 shadow-xl" : "bg-gray-900 py-4"
        }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Logo & Brand */}
                <Link to="/" onClick={closeMenu} className="flex items-center group">
                    <div className="relative">
                        <img
                            src={LOGOIMAGE}
                            alt="Jear Her"
                            width={45}
                            height={45}
                            className="rounded-full border-2 border-green-400 group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 rounded-full bg-green-400/20 animate-pulse"></div>
                    </div>
                    <h1 className="text-2xl font-extrabold text-white ml-3 tracking-tight group-hover:text-green-400 transition-colors">
                        Jear<span className="text-green-400">Her</span>
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                    <ul className="flex space-x-2 mr-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                        isActive(link.path)
                                            ? "text-green-400 bg-green-400/10"
                                            : "text-gray-300 hover:text-white hover:bg-gray-800"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/contact">
                        <button className="bg-green-400 text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-green-500 hover:shadow-[0_0_15px_rgba(74,222,128,0.5)] transition-all transform hover:-translate-y-0.5 active:scale-95">
                            Hire Me
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
                    aria-label="Toggle navigation"
                >
                    {isOpen ? <FaTimes size={24} className="text-green-400" /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div className={`md:hidden absolute w-full bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 overflow-hidden"
            }`}>
                <ul className="flex flex-col space-y-2 px-6">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                onClick={closeMenu}
                                className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                                    isActive(link.path)
                                        ? "text-green-400 bg-green-400/10 border-l-4 border-green-400"
                                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li className="pt-4">
                        <Link to="/contact" onClick={closeMenu}>
                            <button className="w-full bg-green-400 text-black py-4 rounded-2xl font-bold text-lg hover:bg-green-500 shadow-lg active:scale-95 transition-all">
                                Hire Me
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar


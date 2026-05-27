import { FaFacebook, FaYoutube } from "react-icons/fa"
import { GiTheater } from "react-icons/gi"
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <main className="flex flex-col md:flex-row items-center justify-between p-10  bg-gray-800">

            <h1 className="text-white font-medium">© 2026 Jear Her. All rights reserved.</h1>

            <div className="flex items-center text-2xl space-x-4 text-white" >

                <Link to="/"><GiTheater /></Link>
                <Link to="/"><FaFacebook /></Link>
                <Link to="/"><FaYoutube /></Link>
            </div>

        </main>
    )
}

export default Footer

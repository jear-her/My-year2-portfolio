import { Link } from "react-router-dom"


const Hero = () => {
    return (
        <main className="min-h-screen p-4 bg-gray-900 text-white" >

            {/* First Hero Section */}

            <section className="shadow-md  mx-auto text-center leading-10 p-10 rounded-lg mt-20  ">

                <p className="text-4xl">Hello, I am Cheer</p>
                <h1 className="text-5xl font-semibold text-white">FrontEnd Developer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nostrum at ncidunt adipisci autem!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nostrum at ncidunt adipisci autem!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nostrum at ncidunt adipisci autem!</p>

                <div className="mt-10 flex items-center justify-center space-x-4  ">
                    <button className="bg-green-200 text-black px-4 py-2  hover:bg-blue-600 transition duration-300 rounded-2xl">Get in Touch</button>
                    <button className="bg-green-200 text-black px-4 py-2  hover:bg-blue-600 transition duration-300 rounded-2xl">
                        <Link to="/about" className="text-black hover:text-blue-300 transition duration-300 ">Learn More About Me</Link>
                    </button>

                </div>

            </section>


            {/** Second Hero Section */}

            <section className=" flex flex-col md:flex-row items-center justify-center  space-x-20 mx-5 shadow-md p-30 ">

                <div className="border-2 border-green-200    p-6 rounded-lg text-center hover:border-green-500 ">
                    <h1 className="text-white">10+</h1>
                    <p className="text-xl font-bold mb-4">Technologies master</p>
                    <p className="text-xl font-bold mb-4">Technologies master</p>
                    <p className="text-xl font-bold mb-4">Technologies master</p>

                </div>
                <div className="border-2 border-green-200 p-6 rounded-lg text-center hover:border-green-500 ">
                    <h1 className="text-white">50+</h1>
                    <p className="text-xl font-bold mb-4">Project completed</p>
                    <p className="text-xl font-bold mb-4">Project completed</p>
                    <p className="text-xl font-bold mb-4">Project completed</p>
                </div>
                <div className="border-2 border-green-200 p-6 rounded-lg text-center hover:border-green-500 ">
                    <h1 className="text-white">100</h1>
                    <p className="text-xl font-bold mb-4">Happy Clients</p>
                    <p className="text-xl font-bold mb-4">Happy Clients</p>
                    <p className="text-xl font-bold mb-4">Project completed</p>
                </div>

            </section>
            {/* Last Section  */}
            <section >
                <h1 className="text-2xl font-bold mb-4 text-center text-white" >What I DO ? </h1>

                <aside className="flex flex-col md:flex-row items-center justify-between px-6 mx-auto shadow-md p-20 space-x-5 ">

                    <div className="border-2 border-green-200 p-6 rounded-lg text-center hover:border-green-500 ">
                        <h1>Responsive Design</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, expedita.
                        </p>
                    </div>
                    <div className="border-2 border-green-200 p-6 rounded-lg text-center hover:border-green-500 ">
                        <h1>Responsive Design</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, expedita.
                        </p>
                    </div>
                    <div className="border-2 border-green-200 p-6 rounded-lg text-center hover:border-green-500 ">
                        <h1>Responsive Design</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, expedita.
                        </p>
                    </div>

                     
                </aside>
               
            </section>

        </main>

    )
}

export default Hero

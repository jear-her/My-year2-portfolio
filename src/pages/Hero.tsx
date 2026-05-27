import { Link } from "react-router-dom"


const Hero = () => {
    return (
        <main className="min-h-screen p-4 bg-gray-900 text-white" >

            {/* First Hero Section */}

            <section className="shadow-md  mx-auto text-center leading-10 p-10 rounded-lg mt-20  ">

                <p className="text-4xl text-green-400">Hello, I'm Jear Her</p>
                <h1 className="text-6xl font-bold text-white mb-6">Full-Stack Web Developer</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    I specialize in building modern, responsive, and high-performance web applications. 
                    With a passion for clean code and user-centric design, I help businesses transform their ideas into powerful digital experiences.
                </p>

                <div className="mt-12 flex items-center justify-center space-x-6">
                    <button className="bg-green-400 text-black px-8 py-3 font-bold hover:bg-green-500 transition duration-300 rounded-2xl">
                        <Link to="/contact">Get in Touch</Link>
                    </button>
                    <button className="border-2 border-green-400 text-white px-8 py-3 font-bold hover:bg-green-400 hover:text-black transition duration-300 rounded-2xl">
                        <Link to="/about">Learn More</Link>
                    </button>

                </div>

            </section>


            {/** Second Hero Section */}

            <section className=" flex flex-col md:flex-row items-center justify-center  gap-8 mx-5 shadow-md p-20 ">

                <div className="border-2 border-green-200 w-full md:w-64 p-8 rounded-xl text-center hover:border-green-500 transition-all transform hover:-translate-y-2">
                    <h1 className="text-4xl font-bold text-green-400 mb-2">10+</h1>
                    <p className="text-lg font-semibold text-white">Technologies Mastered</p>
                    <p className="text-sm text-gray-400 mt-2">Proficient in modern stacks like React, Node, and TypeScript.</p>
                </div>
                <div className="border-2 border-green-200 w-full md:w-64 p-8 rounded-xl text-center hover:border-green-500 transition-all transform hover:-translate-y-2">
                    <h1 className="text-4xl font-bold text-green-400 mb-2">50+</h1>
                    <p className="text-lg font-semibold text-white">Projects Completed</p>
                    <p className="text-sm text-gray-400 mt-2">Delivered diverse web solutions across various industries.</p>
                </div>
                <div className="border-2 border-green-200 w-full md:w-64 p-8 rounded-xl text-center hover:border-green-500 transition-all transform hover:-translate-y-2">
                    <h1 className="text-4xl font-bold text-green-400 mb-2">100%</h1>
                    <p className="text-lg font-semibold text-white">Client Satisfaction</p>
                    <p className="text-sm text-gray-400 mt-2">Committed to delivering excellence and exceeding expectations.</p>
                </div>

            </section>
            {/* Last Section  */}
            <section className="pb-20">
                <h1 className="text-4xl font-bold mb-12 text-center text-white" >Core Expertise</h1>

                <aside className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mx-auto max-w-6xl">

                    <div className="border-2 border-green-200 p-8 rounded-xl text-center hover:border-green-500 transition-colors">
                        <h2 className="text-xl font-bold text-green-400 mb-4">Responsive Web Design</h2>
                        <p className="text-gray-300">Creating seamless experiences across all devices, from mobile to desktop.</p>
                    </div>
                    <div className="border-2 border-green-200 p-8 rounded-xl text-center hover:border-green-500 transition-colors">
                        <h2 className="text-xl font-bold text-green-400 mb-4">Frontend Development</h2>
                        <p className="text-gray-300">Building interactive and dynamic user interfaces using modern React frameworks.</p>
                    </div>
                    <div className="border-2 border-green-200 p-8 rounded-xl text-center hover:border-green-500 transition-colors">
                        <h2 className="text-xl font-bold text-green-400 mb-4">Backend Architecture</h2>
                        <p className="text-gray-300">Developing robust and scalable server-side logic and database structures.</p>
                    </div>

                     
                </aside>
               
            </section>

        </main>

    )
}

export default Hero

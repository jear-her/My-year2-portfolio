import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"
import MyImage from "../assets/Logo.png";
import type { StackIcons, Backend, Toolextra } from "../types/StackIcons";



const About = () => {

    const StackItems: StackIcons[] = [
        {
            id: 1,
            name: "HTML",

        },
        {
            id: 2,
            name: "CSS",
        }
        , {
            id: 3,
            name: "JavaScript",
        }
        , {
            id: 4,
            name: "React.JS",
        }
        , {
            id: 5,
            name: "Next.JS",
        }
        , {
            id: 6,
            name: "API ",
        },
        {
            id: 7,
            name: "Shadcn UI",
        }
        , {
            id: 8,
            name: "TailwindCSS",
        }
        , {
            id: 9,
            name: "Flowbite",
        },
        {
            id: 10,
            name: "TypeScript",
        }

    ];

    const BackendSection: Backend[] = [
        {
            id: 1,
            name: "Node js & expressjs",
        },
        {
            id: 2,
            name: "MongoDB",
        },
        {
            id: 3,
            name: "SpringBoot",
        },
        {
            id: 4,
            name: "MYSQL",
        }, {
            id: 5,
            name: "Typeorm",
        }
    ]

    const ToolIDE:Toolextra[]=[
    {
        id:1,
        name:"Git & GitHub",
    },
    {
        id:2,
        name:"Postman"
    },
    {
        id:3,
        name:"AI Tools"
    }
    ,{
        id:4,
        name:"Docker Desktop"
    },
    {
        id:5,
        name:"VS Code"
    }

   ]




    return (

        <section className="bg-gray-900 py-20 min-h-screen text-white">

            <main className=" mx-40 flex flex-col md:flex-row items-center justify-around px-6  shadow-md" >
                {/* {/ * Hero section and the leftside with text and icons with button  */}
                <article className="container   " >
                    <h1 className="text-4xl font-bold mb-4 text-white">Welcome to My Portfolio</h1>
                    <h1 className="text-2xl font-semibold text-white">I am a Full-Stack <span className="text-green-500">Developer</span></h1>
                    <p>Dedicated to building high-quality, scalable web applications with modern technologies and a focus on user-centric design.</p>

                    <aside className="mt-6 flex items-center">
                        <button className="bg-green-200 text-black   rounded hover:bg-blue-600 transition duration-300">Get Started</button>
                        <Link to="/about" className="ml-4 text-blue-500 hover:text-blue-700 transition duration-300 text-3xl"><FaFacebook /></Link>
                        <Link to="/about" className="ml-4 text-black-500 hover:text-blue-700 transition duration-300 text-3xl"><FaTiktok /></Link>
                        <Link to="/about" className="ml-4 text-green-500 hover:text-blue-700 transition duration-300 text-3xl"><FaWhatsapp /></Link>
                    </aside>

                </article>

                {/* {/ * Hero section and the rightside with image  */}

                <article>
                    <img
                        src={MyImage}
                        alt="Profile Image"
                        width={400}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-md mt-10 md:mt-0" />
                </article>


            </main>


            <section>
                <header className="text-center text-4xl mt-20 text-shadow-md mb-10 uppercase tracking-widest">
                    Technical Expertise
                </header>

                {/* this is Frontend section  */}

                <aside className="mx-30">

                    <h1 className="text-white text-3xl font-bold mb-6">FRONTEND</h1>
                    <div className="flex flex-col md:flex-row gap-3 my-3 text-center">

                        {StackItems.map((item) => (
                            <div key={item.id}>

                                <p className="p-2 rounded-2xl border-2 border-green-200 ">{item.name}</p>
                            </div>
                        ))}

                    </div>
                </aside>

                {/** this is backend section */}

                <article className="mx-30 mt-12">
                    <h1 className="text-3xl text-white font-bold mb-6">BACKEND</h1>

                    <div className="flex flex-col md:flex-row gap-4 text-center">

                        {BackendSection.map((item) => (
                            <div key={item.id}>
                                <p className="border-2 border-green-200 rounded-2xl p-2">{item.name}</p>
                            </div>
                        ))}

                    </div>
                </article>

                {/** this is toolss section */}

                <article className="mx-30 mt-12">
                    <h1 className="text-white text-3xl font-bold mb-6">Tools & IDEs</h1>

                    <div className="flex flex-col md:flex-row gap-4 text-center">
                        {ToolIDE.map((item)=>(
                            <div key={item.id}>
                                <p className="border-2 border-green-200 rounded-2xl p-2">{item.name}</p>
                            </div>

                        ))}
                    </div>

                </article>
            </section>




        </section>


    )
}


export default About

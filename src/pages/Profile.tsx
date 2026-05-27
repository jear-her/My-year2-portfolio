import { Fa0, Fa1 } from "react-icons/fa6";
import ImageInfor from "../assets/Logo.png";
import { FaDocker, FaFacebook, FaGit, FaInstagram, FaNodeJs, FaReact, FaTiktok, FaWhatsapp } from "react-icons/fa";
import ProgressBar from "../components/ProgressBar";
import { DiMongodb } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { BsClaude } from "react-icons/bs";
import { SiWeb3Dotjs } from "react-icons/si";

const Skills = [
  { name: "JavaScript", level: "90" },
  { name: "TypeScript", level: "90" },
  { name: "React", level: "80" },
  { name: "Next.js", level: "90" },
  { name: "Node.js", level: "80" },
  { name: "express", level: "80" },
  { name: "Python", level: "50" },
  { name: "NestJS", level: "60" },
  { name: "MongoDB", level: "80" },
  { name: "SQL", level: "70" },
]

const Experience = [
  {
    company: "Freelance & Independent Projects",
    role: "Full-Stack Developer",
    duration: "Jan 2020 - Present",
  }
]



const Technologies = [
  { name: "React", icon: <FaReact className="text-2xl text-blue-500" /> },
  { name: "Next.js", icon: <RiNextjsFill className="text-2xl text-black-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" /> },
  { name: "MongoDB", icon: <DiMongodb className="text-2xl text-green-500" /> },
  { name: "git", icon: <FaGit className="text-2xl text-yellow-500" /> },
  { name: "docker", icon: <FaDocker className="text-2xl text-blue-500" /> },
  { name: "AI", icon: <Fa1 className="text-2xl text-blue-500" /> },
]

const Interests = [
  { name: "Claude code", icon: <BsClaude className="text-2xl text-gray-500" /> },
  { name: "AI", icon: <Fa0 className="text-2xl text-gray-500" /> },
  { name: "Web3", icon: <SiWeb3Dotjs className="text-2xl text-gray-500" /> },
]


const Profile = () => {

  return (
    <div className="min-h-screen p-4 bg-gray-900" >

      <section className=" flex flex-col md:flex-row  items-center mt-15" >
        <img src={ImageInfor} alt="Jear Her" className="rounded-xl w-32 h-32 mb-4 border-2 border-green-200" />
        <div className="flex flex-col items-center md:items-start md:ml-6 text-white mt-10"  >
          <h1 className="text-3xl font-bold mb-2 text-white">Jear Her</h1>
          <p className="text-xl text-green-400 mb-4">Full-Stack Web Developer</p>
          <p className="text-gray-300 max-w-2xl">Passionate developer with a strong foundation in modern web technologies, committed to creating efficient, scalable, and impactful digital solutions that solve real-world problems.</p>

          <div className="flex flex-col md:flex-row gap-6 mt-6 text-white" >

            <h1 className="flex items-center gap-2 text-white"><span className="text-green-400 font-bold">Location:</span> Vientiane, Laos</h1>
            <h1 className="flex items-center gap-2 text-white"><span className="text-green-400 font-bold">Phone:</span> +856 20 9647 9259</h1>
            <h1 className="flex items-center gap-2 text-white"><span className="text-green-400 font-bold">Email:</span> jearher826@gmail.com</h1>

          </div>

          <div className="flex flex-col md:flex-row space-x-6 mt-6" >

            <FaFacebook className="text-2xl text-blue-500 hover:scale-110 transition-transform cursor-pointer" />
            <FaTiktok className="text-2xl text-white hover:scale-110 transition-transform cursor-pointer" />
            <FaWhatsapp className="text-2xl text-green-500 hover:scale-110 transition-transform cursor-pointer" />
            <FaInstagram className="text-2xl text-pink-500 hover:scale-110 transition-transform cursor-pointer" />

          </div>
        </div>


      </section>


      {/* Skills Section and Professional Background */}

      <main className="flex flex-col md:flex-row space-x-0 md:space-x-20 mt-8  p-4" >
        <section className="mt-8  w-full md:w-1/2 " >
          <h1 className="text-2xl font-bold mb-6 border-b-2 border-green-200 pb-2 inline-block text-white">Technical Skills</h1>
          <div className="space-y-6  ">
            {Skills.map((skill, index) => (
              <ProgressBar
                key={index}
                label={skill.name}
                percentage={parseInt(skill.level)}
                color="bg-green-400"


              />
            ))}
          </div>
        </section>


        <section className="mt-8 p-4 w-full md:w-1/2" >
          <h1 className="text-2xl font-bold mb-6 border-b-2 border-green-200 pb-2 inline-block text-white">Professional Experience</h1>
          <div className="space-y-4 text-white mb-10">
            {Experience.map((exp, index) => (
              <div key={index} className="border-2 border-green-200 p-6 rounded-xl bg-gray-800/30">
                <h2 className="text-xl font-bold text-green-400">{exp.role}</h2>
                <p className="text-lg font-semibold">{exp.company}</p>
                <p className="text-gray-400">{exp.duration}</p>
              </div>
            ))}
          </div>

          <h1 className="text-2xl font-bold mb-6 border-b-2 border-green-200 pb-2 inline-block text-white">Technologies</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white mb-10">
            {Technologies.map((tech, index) => (
              <div key={index} className="flex items-center space-x-3 border-2 border-green-200  p-4 rounded-xl hover:bg-gray-800 transition-colors">
                {tech.icon}
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}

          </div>

          <h1 className="text-2xl font-bold mb-6 border-b-2 border-green-200 pb-2 inline-block text-white">Interests</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Interests.map((interest, index) => (
              <div key={index} className="flex items-center space-x-3 border-2 border-green-200 text-white p-4 rounded-xl hover:bg-gray-800 transition-colors">
                {interest.icon}
                <span className="font-medium">{interest.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>


    </div>
  )
}

export default Profile

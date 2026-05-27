import { Fa0 } from "react-icons/fa6";
import ImageInfor from "../assets/Logo.png";
import { FaFacebook } from "react-icons/fa";
import ProgressBar from "../components/ProgressBar";

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
    company: "www.company",
    role: "Frontend Developer",
    duration: "Jan 2020 - Present",
  }
]

const Technologies = [
  { name: "React", icon: <FaFacebook className="text-2xl text-blue-500" /> },
  { name: "Next.js", icon: <Fa0 className="text-2xl text-gray-500" /> },
  { name: "Node.js", icon: <Fa0 className="text-2xl text-gray-500" /> },
  { name: "MongoDB", icon: <Fa0 className="text-2xl text-gray-500" /> },
  { name: "git", icon: <Fa0 className="text-2xl text-gray-500" /> },
  { name: "docker", icon: <Fa0 className="text-2xl text-gray-500" /> },
  { name: "AI", icon: <Fa0 className="text-2xl text-gray-500" /> },
]

const Interests=[
  {name:"Claude code",icon:<Fa0 className="text-2xl text-gray-500" />},
  {name:"AI",icon:<Fa0 className="text-2xl text-gray-500" />},
  {name:"Web3",icon:<Fa0 className="text-2xl text-gray-500" />},


]
const Profile = () => {

  return (
    <div className="min-h-screen p-4 bg-gray-900" >

      <section className=" flex flex-col md:flex-row  items-center mt-15" >
        <img src={ImageInfor} alt="Profile" className="rounded-xl w-32 h-32 mb-4" />
        <div className="flex flex-col items-center md:items-start md:ml-6 text-white"  >
          <h1 className="text-2xl font-bold mb-2 text-white">Jear</h1>
          <p className=" mb-4 text-white">FrontEnd  Developer</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo ducimus recusandae aliquid illo fuga?</p>

          <div className="flex flex-col md:flex-row space-x-4 mt-4 text-white" >

            <h1 className="text-white">Localtion:Lao</h1>
            <h1 className="text-white">Phone:+856-2096479259</h1>
            <h1 className="text-white">Email: cheerher826@gmail.com</h1>

          </div>

          <div className="flex flex-col md:flex-row space-x-4 mt-4" >

            <FaFacebook className="text-2xl text-blue-500" />
            <Fa0 className="text-2xl text-gray-500" />
            <Fa0 className="text-2xl text-gray-500" />
            <Fa0 className="text-2xl text-gray-500" />

          </div>
        </div>


      </section>


      {/* Skills Section and Education */}

      <main className="flex flex-col md:flex-row space-x-20 mt-8  p-4" >
        <section className="mt-8  w-full " >
          <h1 className="text-2xl font-bold mb-4">Skills</h1>
          <div className="space-y-4  ">
            {Skills.map((skill, index) => (
              <ProgressBar
                key={index}
                label={skill.name}
                percentage={parseInt(skill.level)}
                color="bg-blue-500 "
                
                
              />
            ))}
          </div>
        </section>


        <section className="mt-8 p-4" >
          <h1 className="text-2xl font-bold mb-4 text-white">Education</h1>
          <div className="space-y-4 text-white">
            {Experience.map((exp, index) => (
              <div key={index} className="border-2 border-green-200 p-4 rounded">
                <h2 className="text-xl font-semibold text-white">{exp.role} at {exp.company}</h2>
                <p className="text-white">{exp.duration}</p>
              </div>
            ))}
          </div>

          <h1 className="text-2xl font-bold mb-4 text-white">Technologies</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white">
            {Technologies.map((tech, index) => (
              <div key={index} className="flex items-center space-x-2 border-2 border-green-200  p-4 rounded">
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}

          </div>

          <h1 className="text-2xl font-bold mb-4 text-white">Interests</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Interests.map((interest, index) => (
              <div key={index} className="flex items-center space-x-2 border-2 border-green-200 text-white p-4 rounded">
                {interest.icon}
                <span>{interest.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>


    </div>
  )
}

export default Profile

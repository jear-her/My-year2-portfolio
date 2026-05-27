import { Link } from "react-router-dom"
const Services = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-900 text-white">

      <div className="mt-30">
        <h1 className="text-4xl font-bold text-center text-white mb-0">Professional Services</h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto">I provide comprehensive web development solutions tailored to bring your vision to life, focusing on quality, scalability, and user experience.</p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-20" >

        <div className="border-2 border-green-200 p-8 rounded-xl hover:border-green-400 transition-colors bg-gray-800/20">
          <h1 className="text-xl font-bold mb-3 text-green-400">Frontend Web Development</h1>
          <p className="text-gray-300">Building modern, interactive web applications using React, TypeScript, and Tailwind CSS with a focus on performance and seamless user experience.</p>
        </div>
        <div className="border-2 border-green-200  p-8 rounded-xl hover:border-green-400 transition-colors bg-gray-800/20">
          <h1 className="text-xl font-bold mb-3 text-green-400">UI/UX Design</h1>
          <p className="text-gray-300">Creating stunning, intuitive designs that captivate your audience and enhance brand identity through modern design principles and user research.</p>
        </div>
        <div className="border-2 border-green-200 p-8 rounded-xl hover:border-green-400 transition-colors bg-gray-800/20">
          <h1 className="text-xl font-bold mb-3 text-green-400">Responsive Architecture</h1>
          <p className="text-gray-300">Ensuring your website looks and performs perfectly on all devices, from mobile phones to large-screen monitors, using a mobile-first approach.</p>
        </div>
        <div className="border-2 border-green-200 p-8 rounded-xl hover:border-green-400 transition-colors bg-gray-800/20">
          <h1 className="text-xl font-bold mb-3 text-green-400">API Integration & Development</h1>
          <p className="text-gray-300">Seamlessly connecting third-party services and developing custom APIs to enhance functionality and streamline your application's workflow.</p>
        </div>
        <div className="border-2 border-green-200 p-8 rounded-xl hover:border-green-400 transition-colors bg-gray-800/20">
          <h1 className="text-xl font-bold mb-3 text-green-400">Performance Optimization</h1>
          <p className="text-gray-300">Optimizing web applications for maximum speed, SEO, and accessibility to ensure the best possible user engagement and search engine visibility.</p>
        </div>
        <div className="border-2 border-green-200 p-8 rounded-xl hover:border-green-400 transition-colors bg-gray-800/20">
          <h1 className="text-xl font-bold mb-3 text-green-400">Full-Stack Solutions</h1>
          <p className="text-gray-300">End-to-end development services combining robust frontend interfaces with scalable backend architectures and optimized database management.</p>
        </div>

      </section >

      <section className="border-2 border-green-200 rounded-2xl mt-20 p-10 text-center bg-gray-800/40" >
        <h1 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Next Project?</h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Let's collaborate to transform your ideas into exceptional digital solutions. I am available for freelance projects and full-time opportunities.</p>

        <button className="rounded-2xl bg-green-400 text-black px-10 py-4 font-bold hover:bg-green-500 transition-colors transform hover:scale-105">
          <Link to="/contact">Start a Conversation</Link>
        </button>
      </section>


    </div >
  )
}

export default Services

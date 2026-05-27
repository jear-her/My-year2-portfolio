
const Services = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-900 text-white">

      <div className="mt-15">
        <h1 className="text-3xl text-center text-white">My services</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!</p>
      </div>

      <section className="grid grid-cols-2 md:grid-cols-2 gap-4  p-4 mt-20" >

        <div className="border-2 border-green-200 p-4 rounded">
          <h1 className="text-xl font-bold mb-2 text-white">FrontEnd Web Development</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!</p>
        </div>
        <div className="border-2 border-green-200  p-4 rounded">
          <h1 className="text-xl font-bold mb-2 text-white">Web Design</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!</p>
        </div>
        <div className="border-2 border-green-200 p-4 rounded">
          <h1 className="text-xl font-bold mb-2 text-white">Responsive Web Design</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!</p>
        </div>
        <div className="border-2 border-green-200 p-4 rounded">
          <h1 className="text-xl font-bold mb-2 text-white">API Integration</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!</p>
        </div>
        <div className="border-2 border-green-200 p-4 rounded">
          <h1 className="text-xl font-bold mb-2 text-white">Web Development</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!</p>
        </div>
        <div className="border-2 border-green-200 p-4 rounded">
          <h1 className="text-xl font-bold mb-2 text-white">Web Development</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!</p>
        </div>

      </section >

      <section className="border-2 border-green-200 rounded-2xl   mt-10 p-3 text-white" >
        <h1>Have a project in mind?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium officia soluta adipisci sunt id facilis.</p>

        <button className="rounded-2xl bg-green-200 text-black hover:text-white active:bg-blue-200">
          Start a conversation
        </button>
      </section>


    </div >
  )
}

export default Services

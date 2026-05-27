import { FaAddressCard, FaFacebook, FaInstagram, FaPhoneSquareAlt, FaTiktok, FaWhatsapp } from "react-icons/fa"
import { MdContactMail } from "react-icons/md"


const Contact = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-900 text-white" >


      <header className="text-center py-10 text-white">
        <h1 className="text-white text-4xl font-bold mb-3"> Get in Touch </h1>
        <p className="text-gray-300">I am always open to new opportunities and collaborations. Feel free to reach out using the form below or via my social channels.</p>
      </header>


      <section className="flex flex-col md:flex-row items-center justify-between px-6 shadow-md mx-auto"  >
        <div className=" border-2 border-green-200 p-8 rounded-4xl" >
          <h1 className="text-2xl font-bold mb-6"> Contact Information</h1>

          <div className="space-y-4">
            <p className="flex items-center gap-3 text-lg"><MdContactMail className="text-green-400" />Email: contact@jearher.com</p>
            <p className="flex items-center gap-3 text-lg"><FaPhoneSquareAlt className="text-green-400" />Phone: +856 20 9647 9259</p>
            <p className="flex items-center gap-3 text-lg"><FaAddressCard className="text-green-400" />Address: Vientiane, Laos</p>
          </div>

          <div className="py-8" >

            <h1 className="text-xl font-bold mb-4"> Follow Me</h1>
            <div className="space-x-6 inline-flex border-2 border-green-200 p-4 rounded-4xl" >

              <FaFacebook className="text-2xl text-blue-500 hover:text-blue-700 cursor-pointer transition-transform hover:scale-110" />
              <FaWhatsapp className="text-2xl text-green-500 hover:text-green-600 cursor-pointer transition-transform hover:scale-110" />
              <FaTiktok className="text-2xl hover:text-gray-400 cursor-pointer transition-transform hover:scale-110" />
              <FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer transition-transform hover:scale-110" />


            </div>

            <div className="border-2 border-green-200 p-6 rounded-2xl mt-8 bg-gray-800/50" >
              <h1 className="text-green-400 text-xl font-bold text-center mb-2">Available for New Projects </h1>
              <p className="text-center text-gray-300">Whether you have a specific project in mind or just want to say hello, I'd love to hear from you.</p>
            </div>


          </div>



        </div>

        <form className="border-2 border-green-200 p-8 w-full md:w-1/2 rounded-4xl mt-10 md:mt-0" >
          <h1 className="text-white text-2xl font-bold mb-6"> Send a Message</h1>

          <div className="flex flex-col md:flex-row md:space-x-4" >
            <div className="flex-1">
              <label htmlFor="name" className="block mb-2 font-medium"> Name </label>
              <input type="text" id="name" className="w-full bg-gray-800 border-2 border-gray-700 p-3 mb-4 rounded focus:border-green-400 outline-none" placeholder="Your Name" required />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block mb-2 font-medium"> Email </label>
              <input type="email" id="email" className="w-full bg-gray-800 border-2 border-gray-700 p-3 mb-4 rounded focus:border-green-400 outline-none" placeholder="Your Email" required />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium"> Message </label>
            <textarea id="message" className="w-full bg-gray-800 border-2 border-gray-700 p-3 mb-4 rounded focus:border-green-400 outline-none" placeholder="How can I help you?" rows={5} />
          </div>

          <button type="submit" className="bg-green-400 text-black font-bold px-8 py-3 rounded-xl hover:bg-green-500 transition-colors w-full md:w-auto"> Send Message </button>



        </form>
      </section>




    </div>
  )
}

export default Contact

import { FaAddressCard, FaFacebook, FaInstagram, FaPhoneSquareAlt, FaTiktok, FaWhatsapp } from "react-icons/fa"
import { MdContactMail } from "react-icons/md"


const Contact = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-900 text-white" >


      <header className="text-center py-10 text-white">
        <h1 className="text-white text-3xl mb-3"> Get in touch </h1>
        < p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sapiente!</p>
      </header>


      <section className="flex flex-col md:flex-row items-center justify-between px-6 shadow-md mx-auto"  >
        <div className=" border-2 border-green-200 p-4 rounded-4xl" >
          <h1> Contact Information</h1>

          <p className="flex items-center gap-3"><MdContactMail />Email: example@example.com</p>
          <p className="flex items-center gap-3"><FaPhoneSquareAlt />Phone: (123) 456-7890</p>
          <p className="flex items-center gap-3"><FaAddressCard />Address: 123 Main St, Anytown, USA</p>

          <div className="p-4" >

            <h1> Folllow Me</h1>
            <div className="space-x-4 inline-flex border-2 border-red-500 p-4 rounded-4xl" >

              <FaFacebook className="text-2xl text-blue-500 hover:text-blue-700 cursor-pointer" />
              <FaWhatsapp className="text-2xl text-green-500 hover:text-green-600 cursor-pointer" />
              {/* <FaInbox className="text-2xl text-blue-500" /> */}
              <FaTiktok className="text-2xl hover:text-black cursor-pointer " />
              <FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer" />


            </div>

            <div className="border-2 border-green-200 p-4 rounded-2xl mt-3" >
              <h1 className="text-white text-xl text-center">Available for new projects </h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio!</p>
            </div>


          </div>



        </div>

        <form className="border-2 border-green-200 p-4 w-full md:w-1/2 rounded-4xl" >
          <h1 className="text-white text-2xl "> Send a Message</h1>

          <div className="flex flex-col md:flex-row space-y-4" >
            <div>
              <label htmlFor="name" className="block mb-2"> Name </label>
              <input type="text" id="name" className="w-full border-2 border-gray-300 p-2 mb-4" placeholder="Your Name" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2" aria-required> Email </label>
              <input type="email" id="email" className="w-full border-2 border-gray-300 p-2 mb-4" placeholder="Your Email" required />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2"> Message </label>
            <textarea id="message" className="w-full border-2 border-gray-300 p-2 mb-4" placeholder="Your Message" rows={5} />
          </div>

          <button type="submit" className="bg-green-200 text-black px-4 py-2 rounded w-50"> Send </button>



        </form>
      </section>




    </div>
  )
}

export default Contact

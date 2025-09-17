import React from 'react'
export default function Contact() {
  return (
   <>
   <section id="contact" className="py-16 px-6 md:px-20 bg-gray-100">
    <div className="text-center mb-12 ">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#006A67]">
            Contact
        </h2>

        <div className="mt-2 w-24  h-1 bg-[#4FB7B3] shadow-[0_0_12px_#4FB7B3] mx-auto">

        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-20" >
         <div className="bg-white shadow-lg rounded-xl p-6 md:p-8  hover:scale-105 transition duration-300">
          <form className="space-y-5 pt-20">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4FB7B3] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4FB7B3] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4FB7B3] focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-[#4FB7B3] text-white font-semibold hover:bg-[#3a8f8c] transition"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Map Section */}
        <div className="rounded-xl overflow-hidden shadow-lg h-[60vh] md:h-[80vh]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019703445812!2d-122.41941568468164!3d37.774929779759066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2d2e36ab%3A0xbaa5d7db7b3d5c3a!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1677361546196!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ minHeight: "400px", border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
       </div>
    </div>
    
   </section>
   </>
  )
}

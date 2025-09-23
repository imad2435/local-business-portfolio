
import React from "react";
import team from "../assets/team.jpg";
export default function About(){
  return (
    <section id="about" className="px-6 md:px-20 py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img 
          src={team}
          alt="Our dedicated team" 
          className="rounded-xl shadow-lg w-full h-full object-cover" 
        />
        <div>
          

          <p className="text-[#F59E0B] font-medium uppercase tracking-wider">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Committed to Excellence Since Day One
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Founded with a passion for quality and a commitment to our community, we have been providing top-tier services for years. Our experienced team works tirelessly to exceed expectations and deliver results you can depend on. We believe in building lasting relationships with our clients through transparency, reliability, and exceptional work.
          </p>
          


          <div className="grid grid-cols-3 gap-4">
            <img 
              src={team} 
              alt="A snapshot of our work" 
              className="rounded-lg w-full h-full object-cover" 
            />
            <img 
              src={team} 
              alt="Another view of our facilities" 
              className="rounded-lg w-full h-full object-cover" 
            />
            <div className="rounded-lg bg-white p-4 flex items-center justify-center text-center text-sm shadow-md">
              <div>
                <h3 className="font-bold text-lg text-[#006A67]">10+</h3>
                <p className="text-gray-500 text-xs mt-1">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
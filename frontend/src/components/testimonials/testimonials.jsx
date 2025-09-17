import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import testimonials from "./testimonialcard"; 

export default function Testimonials() {
  return (
    <section className="py-16 px-6 md:px-20 text-center bg-gray-100">
     
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl text-center mt-15 pt-10 font-extrabold text-[#006A67] ">
            Testimonials
        </h2>

        <div className="mt-2 w-24  h-1 bg-[#4FB7B3] shadow-[0_0_12px_#4FB7B3] mx-auto">

        </div>
        <h1 className="mt-20 text-3xl md:text-4xl font-extrabold text-[#1a2c50] font-serif">
          What our clients say about us.
        </h1>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {testimonials.map((review) => (
          <div
            key={review.id}
            className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition cursor-pointer flex flex-col gap-4"
          >
            <span className="text-yellow-400 text-4xl mx-auto">
              <RiDoubleQuotesL />
            </span>
            <p className="text-gray-700 font-medium">{review.text}</p>
            <hr className="w-10 mx-auto border-gray-300" />
            <img
              src={review.image}
              alt={review.name}
              className="w-32 h-32 rounded-full border border-[#1a2c50] mx-auto"
            />
            <p className="text-gray-500 text-sm font-medium hover:text-[#1a2c50] transition">
              {review.name}
            </p>
          </div>
        ))}
      </div>


    </section>
  );
}



// frontend/src/components/Hero.jsx

import React from "react";
// Make sure you have an image named 'hero.jpg' in your 'frontend/src/assets/' folder
import heroImg from "../assets/hero.jpg"; 
import { Link } from 'react-scroll';

export default function Hero(){
  return (
    <header id="hero" className="relative">
      <div className="md:flex md:items-center md:justify-between px-6 md:px-20 py-12 md:py-20 bg-gradient-to-r from-[#042f33] to-[#13363a] text-white">
        <div className="md:w-1/2 space-y-6">
          
          {/* --- TEXT CHANGES START HERE --- */}

          <p className="text-[#F59E0B] font-medium">YOUR TRUSTED LOCAL PARTNER</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Quality Service & Professional Care
          </h1>
          <p className="text-gray-200 max-w-xl">
            We are dedicated to providing the best service for our community. 
            Explore our work and see why our clients trust us for all their needs.
          </p>

          {/* --- TEXT CHANGES END HERE --- */}

          <div className="flex gap-4">
            <Link to="about" smooth={true} duration={500} offset={-70}>
                <button className="px-6 py-3 rounded-full bg-orange-500 font-semibold shadow">Learn More</button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-70}>
                <button className="px-6 py-3 rounded-full border border-white/30">Contact Us</button>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="w-full max-w-md rounded-lg overflow-hidden shadow-2xl">
            <img src={heroImg} alt="Professional business setting" className="w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="px-6 md:px-20 -mt-8">
        <div className="bg-white rounded-xl shadow p-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          
          {/* --- TEXT CHANGES START HERE --- */}

          <div className="text-center py-4">
            <div className="text-[#F59E0B] text-xl">★</div>
            <p className="mt-2 text-sm font-medium">Top-Rated Service</p>
          </div>
          <div className="text-center py-4">
            <div className="text-[#F59E0B] text-xl">✓</div>
            <p className="mt-2 text-sm font-medium">Certified Experts</p>
          </div>
          <div className="text-center py-4">
            <div className="text-[#F59E0B] text-xl">💡</div>
            <p className="mt-2 text-sm font-medium">Innovative Solutions</p>
          </div>
          <div className="text-center py-4">
            <div className="text-[#F59E0B] text-xl">🤝</div>
            <p className="mt-2 text-sm font-medium">Customer Support</p>
          </div>
          <div className="text-center py-4 hidden md:block">
            <div className="text-[#F59E0B] text-xl">🗓️</div>
            <p className="mt-2 text-sm font-medium">Easy Appointments</p>
          </div>

          {/* --- TEXT CHANGES END HERE --- */}

        </div>
      </div>
    </header>
  );
}
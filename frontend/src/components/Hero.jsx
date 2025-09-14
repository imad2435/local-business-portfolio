import React from "react";
import heroImg from "../assets/hero.jpg";
import { Link } from "react-router-dom";


export default function Hero(){
  return (
    <header className="relative">
      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center text-white font-bold">D</div>
          <span className="font-bold text-lg">Doctor</span>
        </div>
        <ul className="hidden md:flex gap-6 text-sm text-gray-700">
        <li><Link to="/" className="hover:text-[#4FB7B3]">Home</Link></li>
          <li>Services</li>
         <li><Link to="/portfolio" className="hover:text-[#4FB7B3]">Portfolio</Link></li>
         <li>Testimonials</li>
          <li>About</li>
          <li><Link to="/Contact" className="hover:text-[#4FB7B3]">Contact</Link></li>
        </ul>
        <div className="hidden md:block">
          <button className="px-4 py-2 rounded-md bg-[#F59E0B] text-white">Book Now</button>
        </div>
      </nav>

      <div className="md:flex md:items-center md:justify-between px-6 md:px-20 py-12 md:py-20 bg-gradient-to-r from-[#042f33] to-[#13363a] text-white">
        <div className="md:w-1/2 space-y-6">
          <p className="text-[#F59E0B] font-medium">Featured</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Orsvousty Choose Persdunêeds
          </h1>
          <p className="text-gray-200 max-w-xl">
            See by me, too certi Dsed your foradare, anylalness beac to prajiq inution amn physiotre.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full bg-orange-500 font-semibold shadow">Learn More</button>
            <button className="px-6 py-3 rounded-full border border-white/30">Contact</button>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="w-full max-w-md rounded-lg overflow-hidden shadow-2xl">
            <img src={heroImg} alt="hero" className="w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="px-6 md:px-20 -mt-8">
        <div className="bg-white rounded-xl shadow p-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center py-4">
            <div className="text-[#F59E0B] text-xl">★</div>
            <p className="mt-2 text-sm">Featured Medicine</p>
          </div>
          <div className="text-center py-4">
            <div className="text-[#F59E0B] text-xl">❤</div>
            <p className="mt-2 text-sm">Cardio Clinics</p>
          </div>
          <div className="text-center py-4">
            <div className="text-[#F59E0B] text-xl">⚕️</div>
            <p className="mt-2 text-sm">Clinical Ideas</p>
          </div>
          <div className="text-center py-4">
            <div className="text-[#F59E0B] text-xl">🏥</div>
            <p className="mt-2 text-sm">Emergency</p>
          </div>
          <div className="text-center py-4 hidden md:block">
            <div className="text-[#F59E0B] text-xl">🩺</div>
            <p className="mt-2 text-sm">Appointments</p>
          </div>
        </div>
      </div>
    </header>
  );
}
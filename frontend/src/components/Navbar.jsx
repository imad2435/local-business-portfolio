// frontend/src/components/Navbar.jsx

import React from 'react';
// IMPORTANT: We are now using Link from 'react-scroll', not 'react-router-dom'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    // ADDED: Professional styling for a sticky, semi-transparent navbar
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center text-white font-bold">D</div>
        <span className="font-bold text-lg">Doctor</span>
      </div>
      <ul className="hidden md:flex gap-6 text-sm text-gray-700">
        {/* CHANGED: All links now use react-scroll for smooth scrolling */}
        <li><Link to="hero" smooth={true} duration={500} offset={-70} className="hover:text-[#4FB7B3] cursor-pointer">Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-70} className="hover:text-[#4FB7B3] cursor-pointer">About</Link></li>
        <li><Link to="services" smooth={true} duration={500} offset={-70} className="hover:text-[#4FB7B3] cursor-pointer">Services</Link></li>
        <li><Link to="portfolio" smooth={true} duration={500} offset={-70} className="hover:text-[#4FB7B3] cursor-pointer">Portfolio</Link></li>
        <li><Link to="testimonials" smooth={true} duration={500} offset={-70} className="hover:text-[#4FB7B3] cursor-pointer">Testimonials</Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-70} className="hover:text-[#4FB7B3] cursor-pointer">Contact</Link></li>
      </ul>
      <div className="hidden md:block">
        <Link to="contact" smooth={true} duration={500} offset={-70}>
            <button className="px-4 py-2 rounded-md bg-[#F59E0B] text-white">Book Now</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
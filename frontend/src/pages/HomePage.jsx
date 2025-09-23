// frontend/src/pages/HomePage.jsx

import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import GalleryReact from '../components/portfolio/portfolio';
import Testimonials from '../components/testimonials/testimonials';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <GalleryReact />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;
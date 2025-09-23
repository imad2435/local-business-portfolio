// frontend/src/components/Services.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/services/getServices');
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  return (
    <section id="services" className="py-16 px-6 md:px-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#006A67]">
          Our Services
        </h2>
        <div className="mt-2 w-24 h-1 bg-[#4FB7B3] shadow-[0_0_12px_#4FB7B3] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <div key={service._id} className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
            {/* Make sure your backend serves images from the /uploads folder */}
            <img 
              src={`http://localhost:5000/uploads/${service.image}`} 
              alt={service.title} 
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-[#4FB7B3]"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
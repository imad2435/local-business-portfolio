// frontend/src/components/Contact.jsx

import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  // ADDED: State to manage form inputs and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // ADDED: Function to update state when user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ADDED: Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/messages', formData);
      setStatusMessage(response.data.message);
      // Clear the form on success
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatusMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-16 px-6 md:px-20 bg-gray-100">
        <div className="text-center mb-12 ">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#006A67]">
            Contact
          </h2>
          <div className="mt-2 w-24 h-1 bg-[#4FB7B3] shadow-[0_0_12px_#4FB7B3] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
            {/* UPDATED: Added onSubmit handler to the form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name" // ADDED
                  value={formData.name} // ADDED
                  onChange={handleChange} // ADDED
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4FB7B3] focus:outline-none"
                  required // ADDED
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email" // ADDED
                  value={formData.email} // ADDED
                  onChange={handleChange} // ADDED
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4FB7B3] focus:outline-none"
                  required // ADDED
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message" // ADDED
                  value={formData.message} // ADDED
                  onChange={handleChange} // ADDED
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4FB7B3] focus:outline-none"
                  required // ADDED
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 rounded-lg bg-[#4FB7B3] text-white font-semibold hover:bg-[#3a8f8c] transition disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {/* ADDED: Display status message after submission */}
              {statusMessage && <p className="text-center mt-4 text-gray-600">{statusMessage}</p>}
            </form>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-[60vh] md:h-auto">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019703445812!2d-122.41941568468164!3d37.774929779759066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2d2e36ab%3A0xbaa5d7db7b3d5c3a!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1677361546196!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ minHeight: "450px", border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
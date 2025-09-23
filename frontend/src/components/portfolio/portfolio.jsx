// frontend/src/components/portfolio/portfolio.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

const GalleryReact = () => {
  const [items, setItems] = useState([]); 
  const [allItems, setAllItems] = useState([]); 
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/portfolio");
        setItems(data);
        setAllItems(data);
      } catch (error) {
        console.error("Error fetching portfolio items:", error);
      }
    };
    fetchPortfolioItems();
  }, []); 

  const filterItem = (category) => {
    if (category === "ALL") {
      setItems(allItems);
    } else {
      const updatedItems = allItems.filter(
        (curElement) => curElement.category === category
      );
      setItems(updatedItems);
    }
    setIsOpen(false);
  };

  return (
    // THE ONLY CHANGE IS HERE: Added id="portfolio"
    <section id="portfolio" className="py-16 px-6 md:px-20 bg-gray-100 ">
      <h2 className="text-3xl md:text-4xl text-center pt-10 font-extrabold text-[#006A67] ">
        Portfolio
      </h2>
      <div className="mt-2 w-24  h-1 bg-[#4FB7B3] shadow-[0_0_12px_#4FB7B3] mx-auto"></div>

      <section className=" py-12 px-6 max-w-6xl mx-auto">
        <div className="w-full flex justify-end items-center mb-10">
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-[#F59E0B] transition"
            >
              Category ⌄
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                <ul className="py-2 text-gray-700">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => filterItem("ALL")}>
                    All
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => filterItem("Facilities")}>
                    Facilities
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => filterItem("Treatments")}>
                    Treatments
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => filterItem("Events")}>
                    Events
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
            {items.map(({ _id, title, imageUrl }) => (
              <div key={_id} className="p-4">
                <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 hover:drop-shadow-[0_8px_20px_rgba(79,183,179,0.7)] bg-[#006A67]">
                  <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
                  <div className="p-4 flex-grow">
                    <h3 className="mt-3 text-lg font-semibold text-[#F8F8F8] text-center">{title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default GalleryReact;
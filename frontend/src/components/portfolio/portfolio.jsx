// frontend/src/components/portfolio/portfolio.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

// This component no longer needs the hardcoded data file
// import portfoliocard from './portfoliocard';

const GalleryReact = () => {
  const [items, setItems] = useState([]); // This will hold the items displayed
  const [allItems, setAllItems] = useState([]); // This will be the master list
  const [isOpen, setIsOpen] = useState(false);

  // Fetch data from the backend
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
  }, []); // Empty dependency array means this runs once on mount

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
    <>
      <section className="py-16 px-6 md:px-20 bg-gray-100 ">
        {/* ... (heading and category button JSX is the same) ... */}
         <div className="w-full flex justify-end items-center mb-10">
            {/*... The category button dropdown code remains here ...*/}
         </div>
        
        {/* Main section */}
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
            {items.map(({ _id, title, imageUrl }) => ( // Use _id from MongoDB and properties from your model
              <div key={_id} className="p-4">
                <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 hover:drop-shadow-[0_8px_20px_rgba(79,183,179,0.7)] bg-[#006A67]">
                  {/* Assuming imageUrl is a full URL or path from server */}
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
    </>
  );
};

export default GalleryReact;
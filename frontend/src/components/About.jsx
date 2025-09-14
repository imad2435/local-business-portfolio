import React from "react";
import team1 from "../assets/team1.jpg";
import doc1 from "../assets/doc1.jpg";
import doc2 from "../assets/doc2.jpg";

export default function About(){
  return (
    <section className="px-6 md:px-20 py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img src={team1} alt="team" className="rounded-xl shadow-lg w-full object-cover" />
        <div>
          <p className="text-[#F59E0B] font-medium">Features to</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Procuane is DûrspOneowy storted</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem itaque, dolorem perspiciatis pariatur commodi harum placeat, repudiandae minus debitis esse architecto! Eligendi exercitationem quae a cum beatae laboriosam quibusdam error dicta recusandae?
          </p>

          <div className="grid grid-cols-3 gap-3">
            <img src={doc1} alt="doc" className="rounded-lg" />
            <img src={doc2} alt="doc2" className="rounded-lg" />
            <div className="rounded-lg bg-white p-4 flex items-center justify-center text-sm shadow">
              <div>
                <h3 className="font-semibold">Dummy</h3>
                <p className="text-gray-500 text-xs">Dummy text</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
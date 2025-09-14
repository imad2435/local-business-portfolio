import React, {useState} from 'react'

import portfoliocard from './portfoliocard'

const categories = ["ALL", "Treatments", "Facilities", "Events"];



const GalleryReact = () => {
       
    const[items, setitems] = useState(portfoliocard);
     
    const filteritem = (Category) => {
      const updateitems = portfoliocard.filter((curElement)=>{
        return curElement.category===Category;
      });
      setitems(updateitems);
}
  
  
    return (
   <>
   <section className="bg-gray-100">
    <h2 className="text-3xl md:text-4xl text-center mt-20 pt-10 font-extrabold text-[#006A67] ">
            Portfolio
        </h2>

        <div className="mt-2 w-24  h-1 bg-[#4FB7B3] shadow-[0_0_12px_#4FB7B3] mx-auto">

        </div>


   <section className=" py-12">
   <div className="w-full flex justify-center mt-5 mb-8">
   <div className="flex justify-center gap-10 mb-8 flex-wrap">
      <button className=" px-10 py-3 rounded-lg bg-orange-500 text-[#F8F8F8] text-2xl font-semibold hover:bg-[#F59E0B] transition"onClick={() => setitems(portfoliocard)}>ALL</button>
    <button className=" px-10 py-3 rounded-lg bg-orange-500 text-[#F8F8F8]  text-2xl font-semibold hover:bg-[#F59E0B] transition" onClick={()=> filteritem("Facilities")}>Facilities</button>
     <button className=" px-10 py-3 rounded-lg bg-orange-500 text-[#F8F8F8] text-2xl font-semibold hover:bg-[#F59E0B] transition"onClick={()=> filteritem("Treatments")}>Treatments</button>
      <button className=" px-10 py-3 rounded-lg bg-orange-500 text-[#F8F8F8] text-2xl font-semibold hover:bg-[#F59E0B] transition"onClick={()=> filteritem("Events")}>Events</button>
</div>
   </div>

{/*main section*/}

 <div className="container mx-auto px-4 ">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
    {items.map(({ id, name, image,}) => (
      <div key={id} className="p-4">
        <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 hover:drop-shadow-[0_8px_20px_rgba(79,183,179,0.7)] bg-[#006A67]">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          <div className="p-4 flex-grow">
            <h3 className="mt-3 text-lg font-semibold text-[#F8F8F8] text-center">{name}</h3>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  </section>
  </section>
   </>
  )
}

export default GalleryReact
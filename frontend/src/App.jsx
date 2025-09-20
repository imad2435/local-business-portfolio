import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryReact from "./components/portfolio/portfolio";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonials from "./components/testimonials/testimonials";


function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <h1 className="text-3xl font-bold text-white underline">
        Frontend Setup Complete with Vite + React + Tailwind!
        Hasnain cloned the repos
      </h1>
    </div>
  )
    <Router>
       <Hero />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<GalleryReact />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials/>} />
      </Routes>
    </Router>
  );
}

export default App
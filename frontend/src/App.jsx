// frontend/src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryReact from "./components/portfolio/portfolio";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonials from "./components/testimonials/testimonials";

function App() {
  // FIX: Removed the extra JSX block. The component should only return one element.
  return (
    <Router>
      <Hero />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<GalleryReact />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryReact from "./components/portfolio/portfolio";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
       <Hero />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<GalleryReact />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App
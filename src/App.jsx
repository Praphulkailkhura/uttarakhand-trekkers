import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import NelongValleyPermit from "./pages/NelongValleyPermit";
import Navbar from "./components/Home/Navbar";
import ScrollToSection from "./components/ScrollToSection";
import Scroll from "./components/Home/Scroll";
import Treks from "./pages/Treks";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";

function App() {
 
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/NelongValleyPermit" element={<NelongValleyPermit />} />
        <Route path="/treks" element={<Treks />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/treks/:slug" element={<Blog />} />
      </Routes>

      <ScrollToSection />
      <Scroll />
    </BrowserRouter>
  )
}

export default App

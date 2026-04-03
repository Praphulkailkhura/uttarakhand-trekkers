import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import NelongValleyPermit from "./pages/NelongValleyPermit";
import Navbar from "./components/Home/Navbar";
import ScrollToSection from "./components/ScrollToSection";
import Footer from "./components/Home/Footer";

function App() {
 
  return (
    <BrowserRouter>
    <Navbar />
    <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/NelongValleyPermit" element={<NelongValleyPermit />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

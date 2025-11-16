import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

import Contact from "./components/Contact";
import Navbar from "./components/Navbar"; // path to your Navbar.jsx
import FindJob from "./components/FindJob";

import HomeDetails from "./components/HomeDetails";
import Footer from "./components/Footer";
import LandingPage from "./components/Landingpage";
import AboutPage from "./components/AboutPage";
import FindjobPage from "./components/FindjobPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";


const App = () => {
  
    
  return (
    <>
    
   
     <main style={{ paddingTop: "24px" }}></main>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
  <Route path="/homepage" element={<HomePage />} />
 
       <Route path="/find-job" element={<FindjobPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
     

     </>
  );
};

export default App;

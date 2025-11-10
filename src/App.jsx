import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar"; // path to your Navbar.jsx
import FindJob from "./components/FindJob";

import HomeDetails from "./components/HomeDetails";
import Footer from "./components/Footer";


const App = () => {
  
    
  return (
    <>
    <Navbar/>
   
     <main style={{ paddingTop: "24px" }}></main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
  
 
       <Route path="/find-job" element={<FindJob />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
     <About/>
     <FindJob/>
     <Contact/>
     <Footer/>

     </>
  );
};

export default App;

import { useState, useRef } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import SentimentAnalyzer from './components/SentimentAnalyzer';
import Services2 from './components/Services2';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Create a reference for the Services section
  const servicesRef = useRef(null);

  // Function to scroll to Services section
  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#3e1f59] to-[#233066]">
        <Navbar />
        <div className='bg-gradient-to-b from-[#3e1f59] to-[#233066]' id="Home"><Home scrollToServices={scrollToServices} /></div>
        <div id="About"><About /></div>
        <div id="Services" ref={servicesRef}><Services /></div>
        <div id=""><Services2 /></div>
        <div id="Contact"><Contact /></div>
        <Footer />
      </div>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Footer from './components/Footer'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import InvoiceAdmin from './pages/InvoiceAdmin';
import './App.css';
import Gallery from './pages/Gallery';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/invoice-admin" element={<InvoiceAdmin />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        </Routes>
      </div>
       <Footer />
    </Router>
  );
}

export default App;

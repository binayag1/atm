import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // or use inline/Tailwind

const Home = () => {
  return (
    <div className="homepage">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Moving Made Easy with AnyTime Movers</h1>
          <p>Stress-free furniture and house moving across Australia</p>
          <Link to="/quote" className="btn-primary">Get a Free Quote</Link>
          <br/><br/><br/>
          <a href="tel:0469303269" className="btn-primary">Call Us Now</a>
        </div>
        <img src="/anytimemovers.jpeg" alt="Moving truck" className="hero-img"/>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <div className="benefits">
          <div className="benefit-card">
            <img src="fast.png" alt="Fast" className="fast-img" />
            <h3>Fast & Reliable</h3>
            <p>We move on time, every time – no delays, no surprises.</p>
          </div>
          <div className="benefit-card">
            <img src="safety.png" alt="Safe" className="safe-img" />
            <h3>Safe Handling</h3>
            <p>We treat your belongings like our own – fully insured service.</p>
          </div>
          <div className="benefit-card">
            <img src="/affordable.png" alt="Affordable" className="affordable-img" />
            <h3>Transparent Pricing</h3>
            <p>No hidden fees – you pay based on distance and items.</p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <h2>What We Offer</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Local Removals</h3>
            <p>Fast and stress-free moves within your city or suburb.</p>
          </div>
          <div className="service-item">
            <h3>Home Removals</h3>
            <p>Professional handling of your household furniture and goods.</p>
          </div>
          <div className="service-item">
            <h3>Office & Factory Removals</h3>
            <p>Minimize downtime with efficient commercial relocations.</p>
          </div>
          <div className="service-item">
            <h3>Hard Rubbish Removals</h3>
            <p>Eco-friendly disposal of bulky items and unwanted materials.</p>
          </div>
          <div className="service-item">
            <h3>General Waste Services</h3>
            <p>Eco-friendly disposal of general.</p>
          </div>
          <div className="service-item">
            <h3>Storage Solutions</h3>
            <p>Secure short- and long-term storage for your belongings.</p>
          </div>
          <div className="service-item">
            <h3>Packaging & Unpackaging</h3>
            <p>Expert packing services to keep your items safe during transit.</p>
          </div>
        </div>
        <Link to="/services" className="btn-secondary">Explore All Services</Link>
      </section>


      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <h3>Get a Quote</h3>
            <p>Use our form to provide details and receive pricing.</p>
          </div>
          <div className="step">
            <span>2</span>
            <h3>We Pack & Move</h3>
            <p>Our professional team packs, lifts, and transports.</p>
          </div>
          <div className="step">
            <span>3</span>
            <h3>You Relax</h3>
            <p>We set up your new space while you take it easy.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Move?</h2>
        <p>Let’s get started with your free, no-obligation quote.</p>
        <Link to="/quote" className="btn-primary">Get a Quote</Link>
      </section>

    </div>
  );
};

export default Home;

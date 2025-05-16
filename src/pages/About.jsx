import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="hero-section">
        <h1>About Any Time Movers AU</h1>
        <p>Your Trusted, Local Moving Experts in South Australia</p>
      </section>

      <section className="about-section">
        <h2>Locally Owned. Community Focused.</h2>
        <p>
          At <strong>Any Time Movers AU</strong>, we’re more than just a removalist company – we’re a proudly <strong>Australian-owned and operated</strong> business built on trust, reliability, and exceptional service. Based right here in <strong>South Australia</strong>, we’ve been helping individuals, families, and businesses move with ease throughout <strong>Adelaide and surrounding suburbs</strong>.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          To provide <strong>professional, affordable, and reliable moving solutions</strong> to the people of Adelaide and beyond. Whether it’s a single item or an entire household, we treat every job with the same level of care and commitment.
        </p>
      </section>

      <section className="services-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Local & Interstate Removals</li>
          <li>Office & Factory Moves</li>
          <li>Storage Solutions</li>
          <li>Hard Rubbish & General Waste Removal</li>
          <li>Packing & Unpacking Services</li>
        </ul>
      </section>

      <section className="why-choose-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ Experienced Local Team</li>
          <li>✅ Transparent Pricing – No Hidden Fees</li>
          <li>✅ 7 Days a Week Availability</li>
          <li>✅ Excellent Customer Reviews</li>
          <li>✅ Modern Equipment & Reliable Vehicles</li>
        </ul>
      </section>

      <section className="coverage-section">
        <h2>Serving Adelaide & Beyond</h2>
        <p>
          From <strong>Salisbury to Glenelg</strong>, <strong>Norwood to Port Adelaide</strong>, we cover all Adelaide suburbs and regional South Australia. No move is too big or too small for us.
        </p>
      </section>

      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <blockquote>
          “Professional, quick, and super friendly. The best moving experience we’ve ever had!” – Sarah J., Mawson Lakes
        </blockquote>
        <blockquote>
          “Great local business. The team took care of everything from packing to disposal. Highly recommend!” – Daniel M., Prospect
        </blockquote>
      </section>

      <section className="community-section">
        <h2>Supporting Our Local Community</h2>
        <p>
          We proudly support local initiatives, charities, and events throughout South Australia. When you hire Any Time Movers AU, you're not just hiring a moving service – you're supporting your local economy.
        </p>
      </section>

     <section className="cta-section">
        <h2>Let’s Move, Together.</h2>
        <p>Looking for a stress-free move with a trusted local removalist?</p>
        <a href="/quote" className="btn-primary">Get a Free Quote</a>
        <p>Or call us today at <strong>0469 303 269</strong></p>
      </section>

    </div>
  );
};

export default AboutUs;

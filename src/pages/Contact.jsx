import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <section className="contact-hero">
        <h1>Contact Any Time Movers AU</h1>
        <p>We’re here to help you move anywhere across South Australia – reach out today!</p>
      </section>

      <section className="contact-details">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Phone:</strong> <a href="tel:0469303269">0469 303 269</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@anytimemovers.com.au">info@anytimemovers.com.au</a></p>
          <p><strong>Address:</strong> Salisbury, South Australia</p>
          <p><strong>Hours:</strong> 7 Days a Week · 7:00 AM – 8:00 PM</p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
           <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Your Phone</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Your Phone"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            />
          </div>

          <button type="submit" className="btn-primary">Send Message</button>

          </form>
        </div>
      </section>

      <section className="map-section">
        <h2>Where We Are</h2>
        <iframe
          title="Our Location - Salisbury, South Australia"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13674.994038579035!2d138.62111565!3d-34.76202425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cfe0e264f3d3%3A0x5033654628ed030!2sSalisbury%20SA%205108!5e0!3m2!1sen!2sau!4v1715917200000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </section>
    </div>
  );
};

export default ContactUs;
